// ========== MAIN JAVASCRIPT ========== 

document.addEventListener('DOMContentLoaded', function() {
    console.log('✅ EJS Framework loaded successfully');
    
    // Initialize features
    initializeEventListeners();
    fetchAndDisplayStats();
});

// ========== EVENT LISTENERS ==========
function initializeEventListeners() {
    // Form validation
    const addItemForm = document.querySelector('.add-item-form');
    if (addItemForm) {
        addItemForm.addEventListener('submit', validateForm);
    }

    // Delete confirmation (handled by onclick in template)
}

// ========== FORM VALIDATION ==========
function validateForm(e) {
    const itemName = document.querySelector('#itemName');
    const itemPrice = document.querySelector('#itemPrice');
    
    if (!itemName.value.trim()) {
        alert('Please enter an item name');
        e.preventDefault();
        return false;
    }
    
    if (!itemPrice.value || itemPrice.value <= 0) {
        alert('Please enter a valid price');
        e.preventDefault();
        return false;
    }
    
    return true;
}

// ========== FETCH STATS FROM API ==========
function fetchAndDisplayStats() {
    fetch('/api/items')
        .then(response => response.json())
        .then(data => {
            console.log('📊 Current items:', data.count);
        })
        .catch(error => console.error('Error fetching stats:', error));
}

// ========== UTILITY FUNCTIONS ==========

// Format price
function formatPrice(price) {
    return parseFloat(price).toFixed(2);
}

// Show notification
function showNotification(message, type = 'success') {
    console.log(`[${type.toUpperCase()}] ${message}`);
    // You can extend this to show toast notifications
}

// Delete item with confirmation
function confirmDelete(itemId) {
    if (confirm('Are you sure you want to delete this item?')) {
        return true;
    }
    return false;
}

// ========== CONSOLE MESSAGES ==========
console.log('%c🚀 EJS Framework v1.0', 'font-size: 16px; color: #3498db; font-weight: bold;');
console.log('%c Built with Express.js & EJS', 'font-size: 12px; color: #7f8c8d;');
