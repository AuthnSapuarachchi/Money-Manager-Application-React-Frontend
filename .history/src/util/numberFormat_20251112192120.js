/**
 * Adds thousands separator to a number
 * @param {number|string} num - The number to format
 * @returns {string} - Formatted number with thousands separator
 */
export const addThousandsSeparator = (num) => {
    if (num === null || num === undefined || num === '') {
        return '0';
    }
    
    // Convert to number if string
    const number = typeof num === 'string' ? parseFloat(num) : num;
    
    // Check if valid number
    if (isNaN(number)) {
        return '0';
    }
    
    // Format with thousands separator
    return number.toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
};

/**
 * Format currency with symbol
 * @param {number|string} num - The number to format
 * @param {string} currency - Currency symbol (default: '$')
 * @returns {string} - Formatted currency string
 */
export const formatCurrency = (num, currency = '$') => {
    return `${currency}${addThousandsSeparator(num)}`;
};
