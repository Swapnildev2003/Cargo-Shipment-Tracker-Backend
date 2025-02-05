import mongoose from "mongoose";

const shipmentSchema = mongoose.Schema(
  {
    containerID: { type: String, required: true },
    route: [
      {
        lat: { type: Number, required: true },
        lng: { type: Number, required: true },
      }
    ],
    currentLocation: { type: String, required: true },
    eta: { type: String, required: true },
    status: { type: String, enum: ["In Transit", "Delivered", "Delayed"], default: "In Transit" },
  },
  { timestamps: true }
);

const Shipment = mongoose.model("Shipment", shipmentSchema);
export default Shipment;
