const express = require('express');
const router = express.Router();

router.get('/1', (req, res) => {
    res.json({ success: true, res: 1 })
});

module.exports = router;