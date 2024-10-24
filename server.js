require('dotenv').config();
const express = require('express');
const cors = require('cors');
const studentRoutes = require('./routes/studentRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/students', studentRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// Required fields to display (in desired order)
const allowedFields = [
    'Roll No', 'Gender', 'Date of Birth', 'Mobile Number 📞',
    'Email-id 📩', 'Correspondence address 🏠', 'Physically Disable', 'Type of Disability',
    'X th CGPA', 'X th Percentage', 'X th School Name', 'Diploma CGPA OR 12th Marks',
    'Intermediate/Diploma Percentage', 'XII/Inter College Name', 'Engineering Entrance Exam',
    'EAMCET Rank or ECET Branch Rank', 'College Name', 'B.Tech (1-1 SEM SGPA)',
    'B.Tech (1-2 SEM SGPA)', 'B.Tech (2-1 SEM SGPA)', 'B.Tech (2-2 SEM SGPA)',
    'B.Tech (3-1 SEM SGPA)', 'Number of Backlogs', 'B.Tech (CGPA till Now)',
    'B.Tech (3-2 SEM SGPA)'
];

// Filtering and structuring student data
function formatStudentData(student) {
    const formattedData = {};
    allowedFields.forEach((field) => {
        if (student[field]) {
            formattedData[field] = student[field];
        }
    });
    return formattedData;
}

app.get('/api/student/:rollNumber', (req, res) => {
    const rollNumber = req.params.rollNumber;
    fetchStudentData(rollNumber, (student) => {
        if (student) {
            const formattedStudentData = formatStudentData(student);  // Filter fields here
            res.json(formattedStudentData);
        } else {
            res.status(404).json({ error: 'Student data not found' });
        }
    });
});