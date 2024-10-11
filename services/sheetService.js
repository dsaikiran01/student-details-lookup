const axios = require('axios');
const { googleSheetUrl } = require('../config/config');

// Fetch Google Sheet Data
async function fetchSheetData() {
    try {
        const response = await axios.get(googleSheetUrl);
        return response.data;
    } catch (error) {
        console.error('Error fetching data from Google Sheets:', error);
        throw new Error('Failed to fetch student data');
    }
}

module.exports = { fetchSheetData };
