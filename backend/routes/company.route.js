import e from "express";
import isAuthenticated from "../middleware/usAuthenticated";
import { getCompany, getCompanyById, registerCompany, updateCompany } from "../controllers/company.controller";

const router = e.Router();

router.route("/register").post(isAuthenticated, registerCompany)
router.route("/get").get(isAuthenticated, getCompany)
router.route("/get/:id").get(isAuthenticated, getCompanyById)
router.route("/update/:id").put(isAuthenticated ,updateCompany)

export default router
