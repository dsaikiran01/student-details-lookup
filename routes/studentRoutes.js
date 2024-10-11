const express = require('express');
const { getStudentData } = require('../controllers/studentController');
const router = express.Router();

router.get('/:rollNumber', getStudentData);

module.exports = router;
