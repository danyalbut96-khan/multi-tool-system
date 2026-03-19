const supabase = require('../utils/supabaseClient');

module.exports = async (req, res, next) => {
    // Only log API and tool routes
    if (!req.path.startsWith('/api')) return next();

    res.on('finish', async () => {
        try {
            const toolName = req.params.toolName || 'general';
            const logData = {
                user_id: req.user?.id || null,
                tool_name: toolName,
                ip_address: req.ip,
                device_type: req.headers['user-agent'],
                timestamp: new Error().toISOString()
            };

            await supabase.from('analytics').insert([logData]);
        } catch (error) {
            console.error('Analytics logging failed:', error);
        }
    });

    next();
};
