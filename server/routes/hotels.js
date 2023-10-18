import express from "express";
import {
  createHotel,
  deleteHotel,
  getHotel,
  getHotels,
  getHotelsByCity,
  getHotelsByType,
  getRooms,
  updateHotel,
} from "../controllers/hotel.js";
import { verifyAdmin } from "../utils/verify-token.js";

const router = express.Router();

// CREATE
router.post("/", verifyAdmin, createHotel);

// UPDATE
router.put("/:id", verifyAdmin, updateHotel);

// DELETE
router.delete("/:id", verifyAdmin, deleteHotel);

// GET
router.get("/find/:id", getHotel);

// GET ALL
router.get("/", getHotels);
router.get("/city", getHotelsByCity);
router.get("/type", getHotelsByType);
router.get("/room/:id", getRooms);

export default router;
