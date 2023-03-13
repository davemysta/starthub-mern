const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator/check");

// @route   POST api/user
// @desc    Register user
// @access  Public

router.post("/",
    [
        check("name", "Name is require").not().isEmpty(),
        check("email", "Please include a valid email"),
        check("password", "Please enter a valid pass of at least 6 characters.").isLength({ min: 6 })
    ],
    (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        res.send("User route");
    }
);

module.exports = router;