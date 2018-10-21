const express = require('express');
const router = express.Router();

router.get('/', function (req, res, next) {
    return res.send("API Working");
});


module.exports = router;