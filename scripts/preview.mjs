import http from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../', import.meta.url));
const types = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
};
const server = http.createServer(async (req, res) => {
  try {
    const pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
    let file = path.resolve(root, '.' + pathname);
    const relative = path.relative(root, file);
    if (
      relative.startsWith('..') ||
      path.isAbsolute(relative) ||
      pathname.split('/').some((part) => part.startsWith('.'))
    ) {
      res.writeHead(403).end('Forbidden');
      return;
    }
    let status = 200;
    try {
      if ((await stat(file)).isDirectory()) file = path.join(file, 'index.html');
      await stat(file);
    } catch {
      file = path.join(root, '404.html');
      status = 404;
    }
    const body = await readFile(file);
    res.writeHead(status, {
      'Content-Type': types[path.extname(file)] || 'application/octet-stream',
      'Cache-Control': 'no-store',
    });
    res.end(body);
  } catch {
    res.writeHead(400).end('Bad request');
  }
});
const port = Number(process.env.PORT || 4173);
server.listen(port, '127.0.0.1', () => console.log(`Portfolio preview: http://127.0.0.1:${port}`));
