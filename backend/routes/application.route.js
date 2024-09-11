import e from "express";
import isAuthenticated from "../middleware/usAuthenticated.js";
import { applyJob, getApplicants, getAppliedJobs, updateStatus } from "../controllers/application.controller.js";

const router = e.Router();

router.route("/apply/:id").get(isAuthenticated, applyJob)
router.route("/get").get(isAuthenticated, getAppliedJobs)
router.route("/:id/applicants").get(isAuthenticated, getApplicants)
router.route("/status/:id/update").post(isAuthenticated, updateStatus)

export default router
