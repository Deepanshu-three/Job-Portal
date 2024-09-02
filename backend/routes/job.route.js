import eexpress from "express";
import isAuthenticated from "../middleware/usAuthenticated.js";
import { getAdminJobs, getAllJobs, getJobById, postJob } from "../controllers/job.controller.js";

const router = eexpress.Router();

router.route("/post").post(isAuthenticated, postJob)
router.route("/get").get(isAuthenticated, getAllJobs)
router.route("/getAdminJobs").get(isAuthenticated, getAdminJobs)
router.route("/get/:id").post(isAuthenticated ,getJobById)

export default router
