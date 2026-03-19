const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
require('dotenv').config();

const toolRoutes = require('./routes/toolRoutes');
const adminRoutes = require('./routes/adminRoutes');
const authRoutes = require('./routes/authRoutes');
const errorHandler = require('./middleware/errorHandler');

const multer = require('multer');
const usageLogger = require('./middleware/usageLogger');

const app = express();
const PORT = process.env.PORT || 5000;

// Multer Setup
const upload = multer({ storage: multer.memoryStorage() });

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use(usageLogger);

// Routes
app.use('/api/tools', toolRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/auth', authRoutes);

// Error Handling
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
