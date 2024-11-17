const express = require("express");
const router = express.Router();
const { protect } = require("../middlewares/auth");

// import controllers
const { compile } = require("../controllers/CodecompilerC");

router.post("/compile", protect, compile);
