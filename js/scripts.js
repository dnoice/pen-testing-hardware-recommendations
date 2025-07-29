// DOM Elements
const searchInput = document.getElementById('searchInput');
const filterButtons = document.querySelectorAll('.filter-btn');
const toolCards = document.querySelectorAll('.tool-card');
const gridView = document.getElementById('gridView');
const listView = document.getElementById('listView');
const themeToggle = document.getElementById('themeToggle');
const toolsGrid = document.getElementById('toolsGrid');

// State
let currentFilter = 'all';
let currentView = 'grid';
let searchTerm = '';

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    initializeTheme();
    initializeEventListeners();
    animateOnScroll();
    initializeTooltips();
    updateToolCount();
});

// Theme Management
function initializeTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
}

function toggleTheme() {
    document.body.classList.toggle('dark-theme');
    const isDark = document.body.classList.contains('dark-theme');
    themeToggle.innerHTML = isDark ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    
    // Add transition effect
    document.body.style.transition = 'all 0.3s ease';
    setTimeout(() => {
        document.body.style.transition = '';
    }, 300);
}

// Event Listeners
function initializeEventListeners() {
    // Search
    searchInput.addEventListener('input', debounce(handleSearch, 300));
    
    // Filter buttons
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => handleFilter(btn));
    });
    
    // View toggle
    gridView.addEventListener('click', () => setView('grid'));
    listView.addEventListener('click', () => setView('list'));
    themeToggle.addEventListener('click', toggleTheme);
    
    // Tool card interactions
    toolCards.forEach(card => {
        card.addEventListener('click', (e) => {
            if (e.target.closest('.tool-stats')) {
                showToolDetails(card);
            }
        });
    });
    
    // Keyboard shortcuts
    document.addEventListener('keydown', handleKeyboardShortcuts);
}

// Search Functionality
function handleSearch(e) {
    searchTerm = e.target.value.toLowerCase();
    filterTools();
}

// Filter Functionality
function handleFilter(btn) {
    // Update active state
    filterButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    
    currentFilter = btn.dataset.category;
    filterTools();
    
    // Add pulse animation
    btn.style.animation = 'pulse 0.5s ease';
    setTimeout(() => {
        btn.style.animation = '';
    }, 500);
}

// Combined filtering
function filterTools() {
    let visibleCount = 0;
    
    toolCards.forEach((card, index) => {
        const category = card.dataset.category;
        const name = card.querySelector('.tool-name').textContent.toLowerCase();
        const features = card.querySelector('.tool-features').textContent.toLowerCase();
        
        const matchesFilter = currentFilter === 'all' || category === currentFilter;
        const matchesSearch = name.includes(searchTerm) || features.includes(searchTerm);
        
        if (matchesFilter && matchesSearch) {
            showCard(card, index * 50);
            visibleCount++;
        } else {
            hideCard(card);
        }
    });
    
    updateToolCount(visibleCount);
    
    // Show no results message if needed
    if (visibleCount === 0) {
        showNoResults();
    } else {
        hideNoResults();
    }
}

// Card visibility animations
function showCard(card, delay = 0) {
    setTimeout(() => {
        card.classList.remove('fade-out');
        card.style.display = '';
        card.style.animation = 'fadeInUp 0.5s ease forwards';
    }, delay);
}

function hideCard(card) {
    card.classList.add('fade-out');
    setTimeout(() => {
        card.style.display = 'none';
    }, 300);
}

// View Toggle
function setView(view) {
    currentView = view;
    
    if (view === 'grid') {
        toolsGrid.classList.remove('list-view');
        gridView.classList.add('active');
        listView.classList.remove('active');
    } else {
        toolsGrid.classList.add('list-view');
        listView.classList.add('active');
        gridView.classList.remove('active');
    }
    
    // Re-animate cards
    toolCards.forEach((card, index) => {
        if (!card.classList.contains('fade-out')) {
            card.style.animation = 'fadeInUp 0.5s ease forwards';
            card.style.animationDelay = `${index * 30}ms`;
        }
    });
}

// Tool Details Modal
function showToolDetails(card) {
    const name = card.querySelector('.tool-name').textContent;
    const price = card.querySelector('.tool-price').textContent;
    const features = Array.from(card.querySelectorAll('.feature')).map(f => f.textContent);
    
    // Create modal (simplified for this example)
    const modal = document.createElement('div');
    modal.className = 'tool-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <h2>${name}</h2>
            <p class="modal-price">${price}</p>
            <h3>Key Features:</h3>
            <ul>${features.map(f => `<li>${f}</li>`).join('')}</ul>
            <button onclick="this.closest('.tool-modal').remove()">Close</button>
        </div>
    `;
    
    // Add styles (would be in CSS in production)
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0,0,0,0.8);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1000;
        animation: fadeIn 0.3s ease;
    `;
    
    document.body.appendChild(modal);
}

// Keyboard Shortcuts
function handleKeyboardShortcuts(e) {
    // Ctrl/Cmd + K for search focus
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        searchInput.focus();
    }
    
    // Escape to clear search
    if (e.key === 'Escape' && document.activeElement === searchInput) {
        searchInput.value = '';
        searchTerm = '';
        filterTools();
    }
    
    // Number keys for quick filters
    if (e.key >= '1' && e.key <= '7' && !e.ctrlKey && !e.metaKey) {
        const filterIndex = parseInt(e.key) - 1;
        const filterBtn = filterButtons[filterIndex];
        if (filterBtn) {
            handleFilter(filterBtn);
        }
    }
}

// Scroll Animations
function animateOnScroll() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '50px'
    });
    
    // Observe elements
    document.querySelectorAll('.price-range, .info-card, .compatibility-section').forEach(el => {
        observer.observe(el);
    });
}

// Tooltips
function initializeTooltips() {
    // Add tooltips to badges
    document.querySelectorAll('.tool-badge').forEach(badge => {
        badge.setAttribute('title', getTooltipText(badge.textContent));
        badge.style.cursor = 'help';
    });
    
    // Add tooltips to compatibility statuses
    document.querySelectorAll('.compat-status').forEach(status => {
        const text = status.textContent;
        if (text === 'Full') {
            status.setAttribute('title', 'Fully supported with all features');
        } else if (text === 'Partial') {
            status.setAttribute('title', 'Limited functionality available');
        } else if (text === 'Limited' || text === 'None') {
            status.setAttribute('title', 'Not recommended for this platform');
        }
    });
}

function getTooltipText(badge) {
    const tooltips = {
        'Popular': 'Widely used by security professionals',
        'Premium': 'High-end professional tool',
        'Stealth': 'Designed for covert operations',
        'Industry Standard': 'Recognized standard in the field',
        'Enterprise': 'Built for large-scale deployments',
        'New': 'Recently released or crowdfunded',
        'AI Powered': 'Includes AI/ML capabilities',
        'Professional': 'Recommended for professional use',
        'SDR': 'Software Defined Radio',
        'Camera Detect': 'Specialized for finding hidden cameras',
        'Viral Hit': 'Popular on social media',
        'RFID Pro': 'Advanced RFID/NFC capabilities',
        'Covert': 'Designed to be undetectable'
    };
    
    return tooltips[badge] || 'Professional penetration testing tool';
}

// Update tool count
function updateToolCount(count) {
    const statValue = document.querySelector('.header-stats .stat:nth-child(2) .stat-value');
    if (statValue) {
        if (count !== undefined) {
            statValue.textContent = count;
            statValue.style.animation = 'pulse 0.5s ease';
            setTimeout(() => {
                statValue.style.animation = '';
            }, 500);
        } else {
            statValue.textContent = toolCards.length;
        }
    }
}

// No results message
function showNoResults() {
    if (!document.querySelector('.no-results')) {
        const message = document.createElement('div');
        message.className = 'no-results';
        message.innerHTML = `
            <i class="fas fa-search"></i>
            <h3>No tools found</h3>
            <p>Try adjusting your search or filter criteria</p>
        `;
        message.style.cssText = `
            text-align: center;
            padding: 4rem 2rem;
            color: var(--text-tertiary);
            animation: fadeIn 0.3s ease;
        `;
        toolsGrid.appendChild(message);
    }
}

function hideNoResults() {
    const message = document.querySelector('.no-results');
    if (message) {
        message.remove();
    }
}

// Utility Functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Add pulse animation to CSS dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.05); }
        100% { transform: scale(1); }
    }
    
    .animate-in {
        animation: fadeInUp 0.8s ease forwards;
    }
    
    .tool-modal .modal-content {
        background: var(--bg-primary);
        color: var(--text-primary);
        padding: 2rem;
        border-radius: 1rem;
        max-width: 500px;
        width: 90%;
        animation: slideInUp 0.3s ease;
    }
    
    .modal-price {
        font-size: 1.5rem;
        color: var(--primary-color);
        margin-bottom: 1rem;
    }
`;
document.head.appendChild(style);

// Price range interactions
document.querySelectorAll('.price-range').forEach(range => {
    range.addEventListener('click', () => {
        const rangeType = range.className.includes('beginner') ? 'beginner' :
                         range.className.includes('intermediate') ? 'intermediate' : 'advanced';
        
        // Highlight relevant tools
        toolCards.forEach(card => {
            const price = parseInt(card.dataset.price);
            const highlight = (rangeType === 'beginner' && price <= 150) ||
                            (rangeType === 'intermediate' && price > 150 && price <= 1000) ||
                            (rangeType === 'advanced' && price > 1000);
            
            if (highlight) {
                card.style.border = '2px solid var(--primary-color)';
                setTimeout(() => {
                    card.style.border = '';
                }, 2000);
            }
        });
    });
});

// Export functions for external use
window.pentestTools = {
    filterByCategory: (category) => {
        const btn = Array.from(filterButtons).find(b => b.dataset.category === category);
        if (btn) handleFilter(btn);
    },
    searchTools: (term) => {
        searchInput.value = term;
        handleSearch({ target: searchInput });
    },
    toggleTheme: toggleTheme,
    setView: setView
};

// Performance monitoring
console.log('Pen Testing Hardware Infographic loaded successfully');
console.log(`Total tools: ${toolCards.length}`);
console.log('Press Ctrl/Cmd + K to focus search');
console.log('Press 1-7 to quick filter by category');
