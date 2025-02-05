import Shipment from "../models/Shipment.js";

export const getShipments = async (req, res) => {
  const shipments = await Shipment.find();
  res.json(shipments);
};

export const getShipmentById = async (req, res) => {
  try {
    const shipment = await Shipment.findOne({ containerID: req.params.id });

    if (!shipment) {
      return res.status(404).json({ message: "Shipment not found" });
    }
console.log("hi")
    res.json(shipment);
  } catch (error) {
    console.error("Error fetching shipment data:", error);
    res.status(500).json({ message: "Error fetching shipment data" });
  }
};

export const updateLocation = async (req, res) => {
  const { location, route } = req.body; 
  console.log(route);

  try {
   
    const shipment = await Shipment.findOne({ containerID: req.params.id });

    if (shipment) {
     
      shipment.currentLocation = location; 
      console.log(shipment.route);

     
      if (route && Array.isArray(route)) {
        

       
        shipment.route = [...shipment.route, ...route]; 
      }

     
      await shipment.save();

   
      res.json({ message: "Location Updated Successfully", updatedShipment: shipment });
    } else {
      res.status(404).json({ message: "Shipment not found" });
    }
  } catch (error) {
    console.error("Error updating location:", error);
    res.status(500).json({ message: "Internal server error. Failed to update location." });
  }
};





export const createShipment = async (req, res) => {
  const { containerID, route, currentLocation, eta } = req.body;

  const shipment = new Shipment({ containerID, route, currentLocation, eta });
  await shipment.save();
  res.status(201).json(shipment);
};

export const getETA = async (req, res) => {
  const shipment = await Shipment.findById(req.params.id);
  res.json({ eta: shipment.eta });
};
