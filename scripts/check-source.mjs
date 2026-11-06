import assert from 'node:assert/strict';
import { readFile, readdir } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { Script } from 'node:vm';

const root = new URL('../', import.meta.url);
const reference = new URL('docs/planning/portfolio-v2-template/', root);
const snapshot = JSON.parse(await readFile(new URL('snapshot.json', reference), 'utf8'));
const hash = (bytes) => createHash('sha256').update(bytes).digest('hex');
const moved = {
  'tokens.css': 'assets/css/tokens.css',
  'style.css': 'assets/css/style.css',
  'main.js': 'assets/js/main.js',
};

// Preserve quoted SVG attributes (especially path data), ignoring only formatting
// between attributes/tags. This permits readable SVGs without redrawing artwork.
const svgTokens = (text) => text.match(/"[^"]*"|'[^']*'|[^\s"']+/g).join('');
let runtimeFiles = 0;
let artworkChecks = 0;

for (const [name, expected] of Object.entries(snapshot.files_sha256)) {
  const bytes = await readFile(new URL('site/' + name, reference));
  assert.equal(hash(bytes), expected, `Reference hash: ${name}`);

  if (['README.md', 'CHANGELOG.md', 'VERIFICATION.md', 'LICENSE', 'NOTICE'].includes(name)) {
    continue;
  }

  const actual = await readFile(new URL(moved[name] || name, root));
  assert.ok(actual.length, `Nonempty runtime file: ${name}`);

  if (name.endsWith('.svg')) {
    assert.equal(svgTokens(actual.toString()), svgTokens(bytes.toString()), `Artwork: ${name}`);
    artworkChecks++;
  } else if (name.endsWith('.png')) {
    assert.equal(hash(actual), expected, `Original raster asset: ${name}`);
    artworkChecks++;
  }

  runtimeFiles++;
}

assert.equal(
  hash(await readFile(new URL('portfolio-v2-source.zip', reference))),
  snapshot.archive_sha256,
  'Archive hash',
);

const pages = ['index.html', 'projects.html', '404.html'];
for (const directory of ['projects', 'blog']) {
  const names = await readdir(new URL(directory + '/', root));
  pages.push(
    ...names.filter((name) => name.endsWith('.html')).map((name) => `${directory}/${name}`),
  );
}

for (const name of pages) {
  const html = await readFile(new URL(name, root), 'utf8');
  assert.equal((html.match(/<h1(?:\s|>)/g) || []).length, 1, `${name}: one h1`);

  for (const required of [
    'class="skip-link"',
    'id="main"',
    'jtl-light.svg',
    'jtl-dark.svg',
    'assets/css/tokens.css',
    'assets/css/style.css',
    'assets/js/main.js',
  ]) {
    assert.ok(html.includes(required), `${name}: ${required}`);
  }

  // Inline theme initialization must still parse after HTML formatting.
  for (const match of html.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/g)) {
    if (match[1].trim()) new Script(match[1], { filename: name });
  }
}

const home = (await readFile(new URL('index.html', root), 'utf8')).replace(/\s+/g, ' ');
assert.ok(
  home.includes('IT Professional | Product Quality Engineer | Electronics Engineer'),
  'Approved professional titles',
);
assert.ok(home.includes('signals-sandbox-v2.svg'), 'Approved blog mark');
const notFound = await readFile(new URL('404.html', root), 'utf8');
assert.match(notFound, /<base\s+href="\/"\s*\/?>/, 'Root-based 404');
new Script(await readFile(new URL('assets/js/main.js', root), 'utf8'), {
  filename: 'assets/js/main.js',
});

console.log(
  `Passed: ${Object.keys(snapshot.files_sha256).length} reference hashes, archive hash, ` +
    `${runtimeFiles} runtime files, ${artworkChecks} artwork checks, and ${pages.length} page contracts. ` +
    'Active content and formatting may evolve; the saved reference stays immutable.',
);
