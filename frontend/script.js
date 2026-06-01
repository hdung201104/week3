// Sales Chart
const salesCtx = document.getElementById('salesChart').getContext('2d');
const salesChart = new Chart(salesCtx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
            {
                label: 'Revenue',
                data: [12000, 19000, 15000, 25000, 22000, 30000],
                borderColor: '#667eea',
                backgroundColor: 'rgba(102, 126, 234, 0.1)',
                borderWidth: 3,
                fill: true,
                tension: 0.4,
                pointBackgroundColor: '#667eea',
                pointBorderColor: '#fff',
                pointBorderWidth: 2,
                pointRadius: 5,
                pointHoverRadius: 7,
            },
            {
                label: 'Expenses',
                data: [8000, 12000, 10000, 15000, 14000, 18000],
                borderColor: '#764ba2',
                backgroundColor: 'rgba(118, 75, 162, 0.1)',
                borderWidth: 3,
                fill: true,
                tension: 0.4,
                pointBackgroundColor: '#764ba2',
                pointBorderColor: '#fff',
                pointBorderWidth: 2,
                pointRadius: 5,
                pointHoverRadius: 7,
            }
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
            legend: {
                display: true,
                position: 'top',
                labels: {
                    font: { size: 12, weight: 'bold' },
                    padding: 20,
                    usePointStyle: true,
                }
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    callback: function(value) {
                        return '$' + value.toLocaleString();
                    }
                },
                grid: {
                    color: 'rgba(0, 0, 0, 0.05)'
                }
            },
            x: {
                grid: {
                    display: false
                }
            }
        }
    }
});

// Distribution Chart
const distributionCtx = document.getElementById('distributionChart').getContext('2d');
const distributionChart = new Chart(distributionCtx, {
    type: 'doughnut',
    data: {
        labels: ['Active Users', 'Inactive Users', 'New Users', 'Premium Users'],
        datasets: [{
            data: [45, 20, 15, 20],
            backgroundColor: [
                '#667eea',
                '#764ba2',
                '#43e97b',
                '#4facfe'
            ],
            borderColor: '#fff',
            borderWidth: 3,
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
            legend: {
                display: true,
                position: 'bottom',
                labels: {
                    font: { size: 12, weight: '500' },
                    padding: 20,
                    usePointStyle: true,
                }
            }
        }
    }
});

// Search functionality
const searchBox = document.querySelector('.search-box');
if (searchBox) {
    searchBox.addEventListener('input', function(e) {
        const searchTerm = e.target.value.toLowerCase();
        const tableRows = document.querySelectorAll('.activity-table tbody tr');
        
        tableRows.forEach(row => {
            const text = row.textContent.toLowerCase();
            if (text.includes(searchTerm)) {
                row.style.display = '';
            } else {
                row.style.display = 'none';
            }
        });
    });
}

// Sidebar toggle for mobile
const sidebar = document.querySelector('.sidebar');
const navLinks = document.querySelectorAll('.nav-link');

// Add click handlers for navigation
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        const section = this.getAttribute('href');
        console.log('Navigating to:', section);
    });
});

// Add smooth scroll behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Button actions
const actionButtons = document.querySelectorAll('.btn-action');
actionButtons.forEach(button => {
    button.addEventListener('click', function() {
        const orderId = this.parentElement.parentElement.querySelector('td').textContent;
        alert(`Viewing details for order: ${orderId}`);
    });
});

// Real-time updates simulation
function updateStats() {
    const statValues = document.querySelectorAll('.stat-value');
    statValues.forEach((stat, index) => {
        // Simulate value change (in real app, this would come from API)
        const currentValue = stat.textContent;
        // You can add animation here
    });
}

// Initialize tooltips (optional, for enhanced UX)
function initTooltips() {
    const elements = document.querySelectorAll('[data-tooltip]');
    elements.forEach(el => {
        el.addEventListener('mouseenter', function() {
            const tooltip = this.getAttribute('data-tooltip');
            // Add tooltip logic here
        });
    });
}

// Format currency
function formatCurrency(value) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(value);
}

// Format date
function formatDate(date) {
    return new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    }).format(new Date(date));
}

// Add loading animation
function showLoadingState(element) {
    element.classList.add('loading');
}

function hideLoadingState(element) {
    element.classList.remove('loading');
}

// Dark mode toggle (optional)
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
}

// Check for saved dark mode preference
if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    console.log('Dashboard initialized successfully');
    initTooltips();
});

// Handle window resize for responsive behavior
let resizeTimer;
window.addEventListener('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
        // Handle resize logic
        console.log('Window resized');
    }, 250);
});

// API Integration Helper
class APIClient {
    constructor(baseURL = 'http://localhost:5000/api') {
        this.baseURL = baseURL;
    }

    async get(endpoint) {
        try {
            const response = await fetch(`${this.baseURL}${endpoint}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            return await response.json();
        } catch (error) {
            console.error('GET Error:', error);
            throw error;
        }
    }

    async post(endpoint, data) {
        try {
            const response = await fetch(`${this.baseURL}${endpoint}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            return await response.json();
        } catch (error) {
            console.error('POST Error:', error);
            throw error;
        }
    }

    async put(endpoint, data) {
        try {
            const response = await fetch(`${this.baseURL}${endpoint}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            return await response.json();
        } catch (error) {
            console.error('PUT Error:', error);
            throw error;
        }
    }

    async delete(endpoint) {
        try {
            const response = await fetch(`${this.baseURL}${endpoint}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            return await response.json();
        } catch (error) {
            console.error('DELETE Error:', error);
            throw error;
        }
    }
}

// Create global API client instance
const apiClient = new APIClient();

// Example of using API client (uncomment when backend is ready)
/*
async function loadDashboardData() {
    try {
        const users = await apiClient.get('/users');
        const orders = await apiClient.get('/orders');
        const products = await apiClient.get('/products');
        
        console.log('Users:', users);
        console.log('Orders:', orders);
        console.log('Products:', products);
    } catch (error) {
        console.error('Failed to load dashboard data:', error);
    }
}

// Load data when page loads
document.addEventListener('DOMContentLoaded', loadDashboardData);
*/
