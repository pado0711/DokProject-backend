const { Router } = require("express");
const userController = require("../controllers/userController");

const router = Router();

router.post("/signUp", userController.signUp);

module.exports = { router };
