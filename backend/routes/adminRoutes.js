const express = require('express');
const router = express.Router();
const supabase = require('../utils/supabaseClient');
const { verifyToken, adminOnly } = require('../middleware/authMiddleware');

router.use(verifyToken);
router.use(adminOnly);

// Get usage stats
router.get('/tools-usage', async (req, res) => {
    const { data, error } = await supabase.from('tools_usage').select('*');
    if (error) return res.status(500).json({ error: error.message });
    res.json({ success: true, data });
});

// Get analytics
router.get('/analytics', async (req, res) => {
    const { data, error } = await supabase.from('analytics').select('*');
    if (error) return res.status(500).json({ error: error.message });
    res.json({ success: true, data });
});

module.exports = router;
