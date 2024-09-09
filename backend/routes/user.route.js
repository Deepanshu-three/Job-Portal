import e from "express";
import { login, logout, register, updateProfile } from "../controllers/user.controller";
import isAuthenticated from "../middleware/usAuthenticated";
import { singleUpload } from "../middleware/multer";

const router = e.Router();

router.route("/register").post(singleUpload,register)
router.route("/login").post(login)
router.route("/logout").get(logout)
router.route("/profile/update").post(isAuthenticated ,updateProfile)

export default router
 