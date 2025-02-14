const express = require("express");
const { body } = require("express-validator");
const { registerUser, loginUser } = require("../controllers/authController");

const router = express.Router();

const validateRegistration = [
  body("username").isAlphanumeric().withMessage("Username must be alphanumeric").isLength({ min: 3 }),
  body("email").isEmail().withMessage("Invalid email format"),
  body("password").isLength({ min: 6 }).withMessage("Password must be at least 6 characters"),
  body("fullName").isLength({ min: 3 }).withMessage("Full Name is required"),
  body("gender").isIn(["Male", "Female", "Other"]).withMessage("Invalid gender"),
  body("dob").isDate().withMessage("Invalid date of birth"),
  body("country").notEmpty().withMessage("Country is required"),
];

router.post("/register", validateRegistration, registerUser);
router.post("/login", loginUser);

module.exports = router;
