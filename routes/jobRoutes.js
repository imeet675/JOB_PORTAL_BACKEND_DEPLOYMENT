import express, { Router } from "express";
import { getAllJobs,
     postJob,
     getMyJobs,
     updateJob,
     deleteJob,
     getSingleJob
     } from "../controller/jobController.js";
import { isAuthenticated } from "../middlewares/auth.js";


const router = express.Router();
router.get("/getall",getAllJobs);
router.post("/post", isAuthenticated, postJob);
router.get("/getmyjobs", isAuthenticated, getMyJobs);
router.put("/update/:id", isAuthenticated, updateJob);
router.delete("/delete/:id", isAuthenticated, deleteJob);
router.get("/:id", isAuthenticated, getSingleJob);

export default router;