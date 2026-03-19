const express = require('express');
const router = express.Router();
const supabase = require('../utils/supabaseClient');

// Sign up
router.post('/register', async (req, res) => {
    const { email, password, name } = req.body;
    const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: { data: { name, role: 'user' } }
    });
    if (error) return res.status(400).json({ error: error.message });
    res.json({ success: true, data });
});

// Login
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) return res.status(401).json({ error: error.message });
    res.json({ success: true, data });
});

module.exports = router;
