// Utility functions module

// Formatters
const formatDate = (date) => {
    return date.toISOString().slice(0, 19).replace('T', ' ');
};

const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount);
};

// Validators
const isEmailValid = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
};

const isPhoneNumberValid = (phone) => {
    const regex = /^(\+\d{1,3}[- ]?)?\d{10}$/;
    return regex.test(phone);
};

// Storage Helpers
const saveToLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
};

const getFromLocalStorage = (key) => {
    return JSON.parse(localStorage.getItem(key));
};

const removeFromLocalStorage = (key) => {
    localStorage.removeItem(key);
};

export { formatDate, formatCurrency, isEmailValid, isPhoneNumberValid, saveToLocalStorage, getFromLocalStorage, removeFromLocalStorage };