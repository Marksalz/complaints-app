import { Router } from "express";
import * as complaintsCtrl from "../controllers/complaintsController.js";

const router = Router();

router.post("/submit", complaintsCtrl.submitContoller);
router.post("/admin", complaintsCtrl.adminController);

export default router;
