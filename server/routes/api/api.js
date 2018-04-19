const path = require('path');
const router = require('express').Router();

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, '../../scripts/build/index.html'));
});

router.get('/dashboard', (req, res) => {
  res.status(200).json({
    message: "You're authorized to see this secret message.",
    user: req.user
  });
});

module.exports = router;
