const express = require("express");
const userController = require("../controllers/user-controller");

const router = express.Router();

router.post("/register", userController.register);

// router.route("/").get(userController.getAllUsers);

// router.use(authController.protect);

// router.patch("/updateMyPassword", authController.updatePassword);
// router.get("/me", userController.getMe, userController.getUser);
// router.delete("/deleteMe", userController.deleteMe);

// router.use(authController.restrictTo("admin"));

// router
//   .route("/:id")
//   .get(userController.getUser)
//   .patch(authController.restrictTo("admin"), userController.updateUser)
//   .delete(authController.restrictTo("admin"), userController.deleteUser);

module.exports = router;
