// Project data for filtering and search
const projects = [
    {
        element: document.querySelector('[data-tags*="api"]'),
        tags: ['api', 'testing', 'postman'],
        title: 'Postman API Testing Framework',
        summary: 'Comprehensive API testing suite using Postman with automated test scripts'
    },
    {
        element: document.querySelector('[data-tags*="selenium"]'),
        tags: ['automation', 'selenium', 'python', 'testing', 'web'],
        title: 'Selenium Web Automation Suite',
        summary: 'Automated web testing framework using Selenium WebDriver with Python'
    },
    {
        element: document.querySelector('[data-tags*="database"]'),
        tags: ['database', 'sql'],
        title: 'Database Management System',
        summary: 'Enterprise-level database design and management system'
    },
    {
        element: document.querySelector('[data-tags*="qa"]'),
        tags: ['testing', 'web'],
        title: 'QA Testing Dashboard',
        summary: 'Real-time quality assurance dashboard for tracking test results'
    },
    {
        element: document.querySelector('[data-tags*="cybersecurity"]'),
        tags: ['cybersecurity', 'security'],
        title: 'Cybersecurity Analysis Tool',
        summary: 'Security vulnerability assessment tool with network scanning'
    }
];

// Initialize after DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Re-query elements after DOM is loaded
    projects[0].element = document.querySelector('[data-tags*="api"]');
    projects[1].element = document.querySelector('[data-tags*="selenium"]');
    projects[2].element = document.querySelector('[data-tags*="database"]');
    projects[3].element = document.querySelector('[data-tags*="qa"]');
    projects[4].element = document.querySelector('[data-tags*="cybersecurity"]');

    setupEventListeners();
});

function setupEventListeners() {
    // Search functionality
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', handleSearch);

    // Filter buttons
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', handleFilter);
    });

    // Keyboard navigation for project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                card.click();
            }
        });
    });
}

function handleSearch() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const activeFilter = document.querySelector('.filter-btn.active').dataset.filter;
    
    filterProjects(searchTerm, activeFilter);
}

function handleFilter(e) {
    // Update active button
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
        btn.setAttribute('aria-pressed', 'false');
    });
    
    e.target.classList.add('active');
    e.target.setAttribute('aria-pressed', 'true');

    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const activeFilter = e.target.dataset.filter;
    
    filterProjects(searchTerm, activeFilter);
}

function filterProjects(searchTerm = '', filter = 'all') {
    let visibleCount = 0;

    projects.forEach(project => {
        if (!project.element) return;

        const matchesSearch = searchTerm === '' || 
            project.title.toLowerCase().includes(searchTerm) ||
            project.summary.toLowerCase().includes(searchTerm) ||
            project.tags.some(tag => tag.toLowerCase().includes(searchTerm));

        const matchesFilter = filter === 'all' || project.tags.includes(filter);

        if (matchesSearch && matchesFilter) {
            project.element.style.display = 'block';
            visibleCount++;
        } else {
            project.element.style.display = 'none';
        }
    });

    // Show/hide no results message
    const noResults = document.getElementById('noResults');
    if (visibleCount === 0) {
        noResults.style.display = 'block';
    } else {
        noResults.style.display = 'none';
    }
}

function navigateToProject(projectId) {
    window.location.href = `projects/${projectId}.html`;
}

// Mobile menu toggle
function toggleMenu() {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('nav');
    
    hamburger.classList.toggle('active');
    nav.classList.toggle('active');
    
    const isExpanded = hamburger.classList.contains('active');
    hamburger.setAttribute('aria-expanded', isExpanded);
}

// Announce filter changes to screen readers
function announceFilterChange(filter) {
    const announcement = `Filtered projects by ${filter}`;
    const announcer = document.createElement('div');
    announcer.setAttribute('aria-live', 'polite');
    announcer.setAttribute('aria-atomic', 'true');
    announcer.className = 'sr-only';
    announcer.textContent = announcement;
    document.body.appendChild(announcer);
    
    setTimeout(() => {
        document.body.removeChild(announcer);
    }, 1000);
}