import React, { useState } from 'react';
import axios from 'axios';

const StudentLookup = () => {
    const [rollNumber, setRollNumber] = useState('');
    const [studentData, setStudentData] = useState(null);
    const [error, setError] = useState('');

    // Allowed fields (corresponding to the format you mentioned)
    const allowedFields = [
        'Roll No', 'Name', 'Gender', 'Date of Birth', 'Mobile Number 📞', 
        'Email-id 📩', 'Correspondence address 🏠', 'Physically Disable', 'Type of Disability', 
        'X th CGPA', 'X th Percentage', 'X th School Name', 'Diploma CGPA OR 12th Marks', 
        'Intermediate/Diploma Percentage', 'XII/Inter College Name', 'Engineering Entrance Exam', 
        'EAMCET Rank or ECET Branch Rank', 'College Name', 'B.Tech (1-1 SEM SGPA)', 
        'B.Tech (1-2 SEM SGPA)', 'B.Tech (2-1 SEM SGPA)', 'B.Tech (2-2 SEM SGPA)', 
        'B.Tech (3-1 SEM SGPA)', 'Number of Backlogs', 'B.Tech (CGPA till Now)', 
        'B.Tech (3-2 SEM SGPA)'
    ];

    const handleInputChange = (e) => {
        setRollNumber(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(''); // Reset error before the API call
        setStudentData(null); // Reset data before new search

        if (rollNumber.trim() === '') {
            setError('Roll number is required');
            return;
        }

        try {
            const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/${rollNumber}`);
            if (Object.keys(response.data).length === 0) {
                setError('No data found for this roll number.');
            } else {
                // Filter out any fields that are not in the allowedFields array
                const filteredData = Object.keys(response.data)
                    .filter(key => allowedFields.includes(key))
                    .reduce((obj, key) => {
                        obj[key] = response.data[key];
                        return obj;
                    }, {});
                setStudentData(filteredData);
            }
        } catch (err) {
            setError(err.response?.data?.message || 'Error fetching data');
        }
    };

    return (
        <div className="student-lookup">
            <h1>Student Details</h1>

            <form onSubmit={handleSubmit}>
                <label htmlFor="rollNumber">Enter Roll Number:</label>
                <input
                    type="text"
                    id="rollNumber"
                    value={rollNumber}
                    onChange={handleInputChange}
                    required
                />
                <button type="submit">Search</button>
            </form>

            {error && <p className="error-message">{error}</p>}

            {studentData && (
                <div className="student-data">
                    <h2>Student Details:</h2>
                    <table>
                        <tbody>
                            {Object.entries(studentData).map(([key, value]) => (
                                <tr key={key}>
                                    <th>{key}</th>
                                    <td>{value}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default StudentLookup;
