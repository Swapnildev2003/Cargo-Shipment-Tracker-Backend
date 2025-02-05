# Cargo Shipment Tracker Backend

This is the backend of the Cargo Shipment Tracker application, built using the MERN stack (MongoDB, Express, Node.js). This backend exposes API endpoints to manage and track cargo shipments. It allows for creating, retrieving, and updating shipment details, including their current location, ETA, and status.

## Table of Contents
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [API Endpoints](#api-endpoints)
  - [GET /shipments](#get-shipments)
  - [GET /shipment/:id](#get-shipmentid)
  - [POST /shipment/:id/update-location](#post-shipmentidupdate-location)
  - [GET /shipment/:id/eta](#get-shipmentideta)
  - [POST /shipment](#post-shipment)
- [Running the Application](#running-the-application)
- [License](#license)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/backend-repo.git
   cd backend-repo
Install the dependencies:
bash
Copy
Edit
npm install
Environment Variables
Make sure to create a .env file in the root of the project with the following environment variables:

env
Copy
Edit
PORT=5000
DB_URI=mongodb://localhost:27017/cargoTracker # Or MongoDB Atlas URL if using cloud DB
JWT_SECRET=your-secret-key
PORT: The port the server will run on (default: 5000).
DB_URI: MongoDB connection string (change it to your database URI).
JWT_SECRET: A secret key used for JSON Web Token (JWT) authentication.
API Endpoints
GET /shipments
Retrieve a list of all shipments with their details.

Response:
json
Copy
Edit
[
  {
    "id": "shipment_id",
    "container_id": "ABC123",
    "route": ["Location1", "Location2", "Location3"],
    "current_location": "Location1",
    "current_eta": "2025-12-01T14:00:00Z",
    "status": "In Transit"
  }
]
GET /shipment/:id
Retrieve the details of a specific shipment by its ID.

URL Parameters:
id: The unique identifier of the shipment.
Response:
json
Copy
Edit
{
  "id": "shipment_id",
  "container_id": "ABC123",
  "route": ["Location1", "Location2", "Location3"],
  "current_location": "Location1",
  "current_eta": "2025-12-01T14:00:00Z",
  "status": "In Transit"
}
POST /shipment/:id/update-location
Update the current location of the shipment.

URL Parameters:

id: The unique identifier of the shipment.
Request Body:

json
Copy
Edit
{
  "current_location": "New Location"
}
Response:

json
Copy
Edit
{
  "message": "Shipment location updated successfully"
}
GET /shipment/:id/eta
Retrieve the estimated time of arrival (ETA) for a specific shipment.

URL Parameters:
id: The unique identifier of the shipment.
Response:
json
Copy
Edit
{
  "eta": "2025-12-01T14:00:00Z"
}
POST /shipment
Create a new shipment with its details.

Request Body:

json
Copy
Edit
{
  "container_id": "ABC123",
  "route": ["Location1", "Location2", "Location3"],
  "current_location": "Location1",
  "status": "In Transit"
}
Response:

json
Copy
Edit
{
  "id": "new_shipment_id",
  "message": "Shipment created successfully"
}
Running the Application
Start the server:

bash
Copy
Edit
npm start
The server will run on the port specified in the .env file (default: http://localhost:5000).

You can now test the API using tools like Postman or Insomnia by sending requests to the endpoints mentioned above.

License
This project is licensed under the MIT License - see the LICENSE file for details.

markdown
Copy
Edit

### Summary of Changes:
- The original API and environment variable details were retained.
- Organized the README into sections for easy navigation, providing clear instructions for 
