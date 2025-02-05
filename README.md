# Cargo Shipment Tracker Backend

This is the backend for the Cargo Shipment Tracker application, built using Node.js, Express, and MongoDB. It provides API endpoints to manage and track cargo shipments, update locations, and calculate estimated times of arrival (ETA).

## Table of Contents
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [Models](#models)
- [Dependencies](#dependencies)
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
MONGO_URI=mongodb://localhost:27017/Tracking_Details  # MongoDB connection string
PORT=5000  # The port the backend will run on (default: 5000)
MONGO_URI: The MongoDB connection string. This points to the database used to store tracking details (e.g., mongodb://localhost:27017/Tracking_Details).
PORT: The port the backend server will listen on (default: 5000).
Running the Application
Start the backend server:

bash
Copy
Edit
npm start
The backend will run on http://localhost:5000 by default.

You can now interact with the API endpoints for the Cargo Shipment Tracker application.

API Endpoints
The backend exposes the following API endpoints:

GET /shipments
Retrieve all shipments with their details (status, route, current location, ETA, etc.).

Response:

json
Copy
Edit
[
  {
    "shipmentId": "12345",
    "containerId": "CON123",
    "route": ["Location A", "Location B", "Location C"],
    "currentLocation": "Location B",
    "eta": "2024-12-15T15:00:00Z",
    "status": "In Transit"
  },
  ...
]
GET /shipment/:id
Retrieve details of a specific shipment by its ID.

Response:

json
Copy
Edit
{
  "shipmentId": "12345",
  "containerId": "CON123",
  "route": ["Location A", "Location B", "Location C"],
  "currentLocation": "Location B",
  "eta": "2024-12-15T15:00:00Z",
  "status": "In Transit"
}
POST /shipment/:id/update-location
Update the current location of a specific shipment.

Request Body:

json
Copy
Edit
{
  "currentLocation": "Location C"
}
GET /shipment/:id/eta
Retrieve the estimated time of arrival (ETA) based on the current location and route data.

Response:

json
Copy
Edit
{
  "eta": "2024-12-15T15:00:00Z"
}
POST /shipment
Create a new shipment with the provided container ID and other details.

Request Body:

json
Copy
Edit
{
  "containerId": "CON123",
  "route": ["Location A", "Location B", "Location C"],
  "status": "In Transit"
}
Response:

json
Copy
Edit
{
  "shipmentId": "12345",
  "containerId": "CON123",
  "route": ["Location A", "Location B", "Location C"],
  "status": "In Transit"
}
Models
Shipment Model
The Shipment model defines the structure for each shipment, including:

shipmentId: A unique identifier for the shipment.
containerId: The ID of the container.
route: An array of locations that the shipment will pass through.
currentLocation: The current location of the shipment.
eta: Estimated time of arrival.
status: The current status of the shipment (e.g., "In Transit", "Delivered").
Dependencies
This project uses the following libraries:

Express: For building the RESTful API.
Mongoose: For interacting with the MongoDB database.
dotenv: For managing environment variables.
cors: For handling cross-origin requests.
body-parser: For parsing incoming request bodies.
License
This project is licensed under the MIT License - see the LICENSE file for details.

markdown
Copy
Edit

### Changes Made:
- Added the `MONGO_URI` environment variable and explanation for it.
- Clarified the purpose of the `PORT` variable.
- The rest of the structure remains the same, with instructions on setting up, running the backend, and using the API.






