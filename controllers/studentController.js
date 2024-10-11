const Papa = require('papaparse');
const { fetchSheetData } = require('../services/sheetService');

// Controller to fetch and filter data by roll number
async function getStudentData(req, res) {
    const { rollNumber } = req.params;

    try {
        const csvData = await fetchSheetData();
        const parsedData = Papa.parse(csvData, { header: true }).data;

        const student = parsedData.find(row => row['Roll No'] === rollNumber);

        if (student) {
            res.status(200).json(student);
        } else {
            res.status(404).json({ message: 'No data found for this roll number' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
}

module.exports = { getStudentData };
