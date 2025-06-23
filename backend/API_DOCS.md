# API Documentation: Traffic Pulse Backend

## Base URL

- Local: `http://localhost:5000/api`

---

## Endpoints

### Traffic Data
- **GET /traffic**
  - Description: Get all traffic data (populated with intersection details)
  - Response: Array of traffic data objects

- **POST /traffic**
  - Description: Add new traffic data
  - Body:
    ```json
    {
      "intersectionId": "<intersectionId>",
      "vehicleCount": 20,
      "signalStatus": "GREEN"
    }
    ```
  - Response: Created traffic data object

### Signal Data
- **GET /signal**
  - Description: Get all intersections and their signals
  - Response: Array of intersection objects

- **POST /signal**
  - Description: Update signals for an intersection
  - Body:
    ```json
    {
      "intersectionId": "<intersectionId>",
      "signals": ["N", "S", "E", "W"]
    }
    ```
  - Response: Updated intersection object

### Emergency Logs
- **GET /emergency**
  - Description: Get all emergency logs (populated with intersection details)
  - Response: Array of emergency log objects

- **POST /emergency**
  - Description: Add a new emergency log
  - Body:
    ```json
    {
      "intersectionId": "<intersectionId>",
      "type": "AMBULANCE"
    }
    ```
  - Response: Created emergency log object

---

## Real-Time Updates (Socket.io)
- Events: `trafficUpdate`, `signalUpdate`, `emergencyUpdate`
- Description: Emitted to all connected clients when new data is posted.

---

## Error Handling
- All endpoints return JSON errors with appropriate status codes.

---

## Authentication
- Not enabled (for demo/dev only). Add JWT or API key for production.

---

## Contact
- For questions, contact the backend maintainer.
