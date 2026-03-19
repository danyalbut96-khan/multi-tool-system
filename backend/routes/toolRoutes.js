const express = require('express');
const router = express.Router();
const toolController = require('../controllers/toolController');
const { verifyToken } = require('../middleware/authMiddleware');

const multer = require('multer');
const upload = multer({ storage: multer.memoryStorage() });

// Generic tool execution endpoint with file support
router.post('/:toolName/run', upload.single('input_file'), toolController.runTool);

module.exports = router;
