<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Cargo Shipment Tracker Backend</title>
</head>
<body>

  <h1>Cargo Shipment Tracker Backend</h1>
  <p>This is the backend for the Cargo Shipment Tracker application, built using Node.js, Express, and MongoDB. It provides API endpoints to manage and track cargo shipments, update locations, and calculate estimated times of arrival (ETA).</p>

  <h2>Table of Contents</h2>
  <ul>
    <li><a href="#installation">Installation</a></li>
    <li><a href="#environment-variables">Environment Variables</a></li>
    <li><a href="#running-the-application">Running the Application</a></li>
    <li><a href="#api-endpoints">API Endpoints</a></li>
    <li><a href="#models">Models</a></li>
    <li><a href="#dependencies">Dependencies</a></li>
    <li><a href="#license">License</a></li>
  </ul>

  <h2 id="installation">Installation</h2>
  <p>1. Clone the repository:</p>
  <pre><code>git clone https://github.com/your-username/backend-repo.git
cd backend-repo</code></pre>

  <p>2. Install the dependencies:</p>
  <pre><code>npm install</code></pre>

  <h2 id="environment-variables">Environment Variables</h2>
  <p>Make sure to create a <code>.env</code> file in the root of the project with the following environment variables:</p>

  <pre><code>MONGO_URI=mongodb://localhost:27017/Tracking_Details  # MongoDB connection string
PORT=5000  # The port the backend will run on (default: 5000)</code></pre>

  <p><strong>MONGO_URI</strong>: The MongoDB connection string. This points to the database used to store tracking details (e.g., <code>mongodb://localhost:27017/Tracking_Details</code>).</p>
  <p><strong>PORT</strong>: The port the backend server will listen on (default: <code>5000</code>).</p>

  <h2 id="running-the-application">Running the Application</h2>
  <p>1. Start the backend server:</p>
  <pre><code>npm start</code></pre>

  <p>2. The backend will run on <code>http://localhost:5000</code> by default.</p>
  <p>3. You can now interact with the API endpoints for the Cargo Shipment Tracker application.</p>

  <h2 id="api-endpoints">API Endpoints</h2>
  <h3>GET /shipments</h3>
  <p>Retrieve all shipments with their details (status, route, current location, ETA, etc.).</p>
  <p><strong>Response:</strong></p>
  <pre><code>[
  {
    "shipmentId": "12345",
    "containerId": "CON123",
    "route": ["Location A", "Location B", "Location C"],
    "currentLocation": "Location B",
    "eta": "2024-12-15T15:00:00Z",
    "status": "In Transit"
  },
  ...
]</code></pre>

  <h3>GET /shipment/:id</h3>
  <p>Retrieve details of a specific shipment by its ID.</p>
  <p><strong>Response:</strong></p>
  <pre><code>{
  "shipmentId": "12345",
  "containerId": "CON123",
  "route": ["Location A", "Location B", "Location C"],
  "currentLocation": "Location B",
  "eta": "2024-12-15T15:00:00Z",
  "status": "In Transit"
}</code></pre>

  <h3>POST /shipment/:id/update-location</h3>
  <p>Update the current location of a specific shipment.</p>
  <p><strong>Request Body:</strong></p>
  <pre><code>{
  "currentLocation": "Location C"
}</code></pre>

  <h3>GET /shipment/:id/eta</h3>
  <p>Retrieve the estimated time of arrival (ETA) based on the current location and route data.</p>
  <p><strong>Response:</strong></p>
  <pre><code>{
  "eta": "2024-12-15T15:00:00Z"
}</code></pre>

  <h3>POST /shipment</h3>
  <p>Create a new shipment with the provided container ID and other details.</p>
  <p><strong>Request Body:</strong></p>
  <pre><code>{
  "containerId": "CON123",
  "route": ["Location A", "Location B", "Location C"],
  "status": "In Transit"
}</code></pre>
  <p><strong>Response:</strong></p>
  <pre><code>{
  "shipmentId": "12345",
  "containerId": "CON123",
  "route": ["Location A", "Location B", "Location C"],
  "status": "In Transit"
}</code></pre>

  <h2 id="models">Models</h2>
  <h3>Shipment Model</h3>
  <p>The <strong>Shipment</strong> model defines the structure for each shipment, including:</p>
  <ul>
    <li><strong>shipmentId</strong>: A unique identifier for the shipment.</li>
    <li><strong>containerId</strong>: The ID of the container.</li>
    <li><strong>route</strong>: An array of locations that the shipment will pass through.</li>
    <li><strong>currentLocation</strong>: The current location of the shipment.</li>
    <li><strong>eta</strong>: Estimated time of arrival.</li>
    <li><strong>status</strong>: The current status of the shipment (e.g., "In Transit", "Delivered").</li>
  </ul>

  <h2 id="dependencies">Dependencies</h2>
  <p>This project uses the following libraries:</p>
  <ul>
    <li><strong>Express</strong>: For building the RESTful API.</li>
    <li><strong>Mongoose</strong>: For interacting with the MongoDB database.</li>
    <li><strong>dotenv</strong>: For managing environment variables.</li>
    <li><strong>cors</strong>: For handling cross-origin requests.</li>
    <li><strong>body-parser</strong>: For parsing incoming request bodies.</li>
  </ul>

  <h2 id="license">License</h2>
  <p>This project is licensed under the MIT License - see the LICENSE file for details.</p>

</body>
</html>
