import e from "express";
import { login, logout, register, updateProfile } from "../controllers/user.controller.js";
import isAuthenticated from "../middleware/usAuthenticated.js";
import { singleUpload } from "../middleware/multer.js";

const router = e.Router();

router.route("/register").post(singleUpload,register)
router.route("/login").post(login)
router.route("/logout").get(logout)
router.route("/profile/update").post(isAuthenticated ,updateProfile)

export default router
 