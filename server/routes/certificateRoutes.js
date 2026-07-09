import express from "express";
import { createCertificate, verifyCertificate} from "../controllers/certificateController.js";

const router = express.Router();

router.post("/create", createCertificate);
router.get("/verify/:certificateId", verifyCertificate);

export default router;