import express from "express";
import { getShipments, getShipmentById, updateLocation, createShipment, getETA } from "../controllers/shipmentController.js";

const router = express.Router();

router.get("/", getShipments);
router.get("/:id", getShipmentById);
router.post("/:id/update-location", updateLocation);
router.get("/:id/eta", getETA);
router.post("/", createShipment);

export default router;
