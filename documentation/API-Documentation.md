# TTMS API Documentation

## Base URL
```
http://localhost:5000/api
```

## Status Check
```
GET /status
Response: { status: "Server is running", timestamp: "2026-06-01T...", environment: "development" }
```

---

## Authentication Endpoints

### Register
```
POST /auth/register
Content-Type: application/json

Body:
{
  "firstName": "Hoang",
  "lastName": "Dung",
  "email": "user@example.com",
  "password": "password123",
  "role": "customer"
}

Response 201:
{
  "message": "User registered successfully",
  "token": "eyJhbGc...",
  "user": {
    "id": "6755d1a1...",
    "firstName": "Hoang",
    "lastName": "Dung",
    "email": "user@example.com",
    "role": "customer"
  }
}
```

### Login
```
POST /auth/login
Content-Type: application/json

Body:
{
  "email": "user@example.com",
  "password": "password123"
}

Response 200:
{
  "message": "Login successful",
  "token": "eyJhbGc...",
  "user": {
    "id": "6755d1a1...",
    "firstName": "Hoang",
    "lastName": "Dung",
    "email": "user@example.com",
    "role": "customer"
  }
}
```

### Get Current User
```
GET /auth/me
Headers: Authorization: Bearer <token>

Response 200:
{
  "_id": "6755d1a1...",
  "firstName": "Hoang",
  "lastName": "Dung",
  "email": "user@example.com",
  "phone": "0901234567",
  "role": "customer",
  "isActive": true,
  "createdAt": "2026-06-01T10:00:00Z"
}
```

---

## Tour Endpoints

### Get All Tours
```
GET /tours
Query Parameters:
  - destination: string (optional)
  - season: string (optional) - spring/summer/autumn/winter
  - budget: string (optional) - "min-max"

Response 200:
[
  {
    "_id": "6755d1a1b3e4f5g6h7i8j9k0",
    "title": "Ha Long Bay Adventure",
    "destination": "Ha Long",
    "startDate": "2026-06-15T00:00:00Z",
    "endDate": "2026-06-18T00:00:00Z",
    "duration": 3,
    "price": 2500000,
    "maxParticipants": 50,
    "currentParticipants": 12,
    "season": "spring",
    "status": "active",
    "rating": 4.8,
    "accommodations": ["5566e2b2c4f5g6h7i8j9k1a"],
    "createdAt": "2026-05-20T10:00:00Z"
  }
]
```

### Get Tour by ID
```
GET /tours/:id

Response 200:
{
  "_id": "6755d1a1b3e4f5g6h7i8j9k0",
  "title": "Ha Long Bay Adventure",
  "description": "3 days exploring UNESCO World Heritage Ha Long Bay",
  "destination": "Ha Long",
  "startDate": "2026-06-15T00:00:00Z",
  "endDate": "2026-06-18T00:00:00Z",
  "duration": 3,
  "price": 2500000,
  "maxParticipants": 50,
  "currentParticipants": 12,
  "itinerary": [
    {
      "day": 1,
      "title": "Arrival & Cruise",
      "description": "Check-in at hotel, board Ha Long Bay cruise",
      "activities": ["Hotel check-in", "Dinner cruise", "Sunset viewing"],
      "location": "Ha Long City"
    }
  ],
  "accommodations": ["5566e2b2c4f5g6h7i8j9k1a"],
  "season": "spring",
  "status": "active",
  "rating": 4.8,
  "reviews": [],
  "createdAt": "2026-05-20T10:00:00Z"
}
```

### Create Tour (Admin)
```
POST /tours
Headers: Authorization: Bearer <admin-token>
Content-Type: application/json

Body:
{
  "title": "New Tour",
  "description": "Description here",
  "destination": "Hanoi",
  "startDate": "2026-07-01",
  "endDate": "2026-07-03",
  "duration": 3,
  "price": 1500000,
  "maxParticipants": 40,
  "season": "summer",
  "accommodations": ["hotel_id"]
}

Response 201:
{ tour object }
```

### Update Tour (Admin)
```
PUT /tours/:id
Headers: Authorization: Bearer <admin-token>
Content-Type: application/json

Body: { fields to update }

Response 200:
{ updated tour object }
```

### Delete Tour (Admin)
```
DELETE /tours/:id
Headers: Authorization: Bearer <admin-token>

Response 200:
{ "message": "Tour deleted" }
```

---

## Booking Endpoints

### Get My Bookings
```
GET /bookings
Headers: Authorization: Bearer <token>

Response 200:
[
  {
    "_id": "6755d1a1...",
    "bookingCode": "BK-20260601123456",
    "customer": { user object },
    "tour": { tour object },
    "numberOfParticipants": 4,
    "totalPrice": 10000000,
    "status": "pending_approval",
    "paymentStatus": "unpaid",
    "departureDate": "2026-06-15T00:00:00Z",
    "returnDate": "2026-06-18T00:00:00Z",
    "createdAt": "2026-06-01T10:00:00Z"
  }
]
```

### Get Booking by ID
```
GET /bookings/:id
Headers: Authorization: Bearer <token>

Response 200:
{ booking object }
```

### Create Booking
```
POST /bookings
Headers: Authorization: Bearer <token>
Content-Type: application/json

Body:
{
  "tourId": "6755d1a1b3e4f5g6h7i8j9k0",
  "numberOfParticipants": 4,
  "participants": [
    {
      "firstName": "Hoang",
      "lastName": "Dung",
      "email": "hoang@email.com",
      "phone": "0901111111",
      "dateOfBirth": "1990-05-15",
      "nationality": "Vietnam",
      "passportNumber": "A12345678"
    }
  ],
  "specialRequests": "Need airport transfer"
}

Response 201:
{
  "message": "Booking created and waiting for approval",
  "booking": { booking object }
}
```

### Approve Booking (Admin)
```
PUT /bookings/:id/approve
Headers: Authorization: Bearer <admin-token>

Response 200:
{
  "message": "Booking approved",
  "booking": { updated booking object }
}
```

### Reject Booking (Admin)
```
PUT /bookings/:id/reject
Headers: Authorization: Bearer <admin-token>
Content-Type: application/json

Body:
{
  "rejectionReason": "Hotel not available on selected dates"
}

Response 200:
{
  "message": "Booking rejected",
  "booking": { updated booking object }
}
```

### Cancel Booking
```
PUT /bookings/:id/cancel
Headers: Authorization: Bearer <token>

Response 200:
{
  "message": "Booking cancelled",
  "booking": { updated booking object }
}
```

---

## Hotel Endpoints

### Get All Hotels
```
GET /hotels

Response 200:
[
  {
    "_id": "5566e2b2c4f5g6h7i8j9k1a",
    "name": "Starlight Ha Long Bay",
    "location": {
      "city": "Ha Long",
      "country": "Vietnam"
    },
    "rating": 4.7,
    "rooms": [ { roomType, totalRooms, availableRooms, pricePerNight } ],
    "status": "active"
  }
]
```

### Get Hotel by ID
```
GET /hotels/:id

Response 200:
{ hotel object }
```

### Create Hotel (Admin)
```
POST /hotels
Headers: Authorization: Bearer <admin-token>
Content-Type: application/json

Body:
{
  "name": "Hotel Name",
  "description": "Description",
  "address": "Address",
  "city": "City",
  "country": "Country",
  "rating": 4.5,
  "rooms": [
    {
      "roomType": "double",
      "totalRooms": 20,
      "availableRooms": 15,
      "pricePerNight": 3000000,
      "amenities": ["AC", "WiFi"]
    }
  ],
  "status": "active"
}

Response 201:
{ hotel object }
```

### Update Hotel (Admin)
```
PUT /hotels/:id
Headers: Authorization: Bearer <admin-token>

Response 200:
{ updated hotel object }
```

### Delete Hotel (Admin)
```
DELETE /hotels/:id
Headers: Authorization: Bearer <admin-token>

Response 200:
{ "message": "Hotel deleted" }
```

---

## Analytics Endpoints

### Get Dashboard Analytics (Admin)
```
GET /analytics/dashboard
Headers: Authorization: Bearer <admin-token>

Response 200:
{
  "totalBookings": 1234,
  "totalRevenue": 125000000,
  "totalCustomers": 3456,
  "totalTours": 42,
  "bookingsByStatus": [
    { _id: "pending_approval", count: 12 },
    { _id: "approved", count: 28 },
    { _id: "completed", count: 45 },
    { _id: "rejected", count: 3 }
  ]
}
```

### Get Revenue Analytics (Admin)
```
GET /analytics/revenue
Headers: Authorization: Bearer <admin-token>

Response 200:
[
  {
    _id: "6755d1a1b3e4f5g6h7i8j9k0",
    total: 30000000,
    count: 12,
    tourInfo: { tour details }
  }
]
```

### Get Occupancy Analytics (Admin)
```
GET /analytics/occupancy
Headers: Authorization: Bearer <admin-token>

Response 200:
[
  {
    tourId: "6755d1a1b3e4f5g6h7i8j9k0",
    tourName: "Ha Long Bay Adventure",
    maxParticipants: 50,
    currentParticipants: 12,
    occupancyRate: "24.00%"
  }
]
```

---

## Error Responses

### 400 Bad Request
```json
{
  "error": "Please provide all required fields"
}
```

### 401 Unauthorized
```json
{
  "error": "Invalid email or password"
}
```

### 403 Forbidden
```json
{
  "error": "Access denied"
}
```

### 404 Not Found
```json
{
  "error": "Tour not found"
}
```

### 500 Internal Server Error
```json
{
  "error": "Internal Server Error"
}
```

---

## Response Codes

| Code | Meaning |
|------|---------|
| 200 | OK |
| 201 | Created |
| 400 | Bad Request |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |
| 500 | Internal Server Error |

---

## Authentication

All protected endpoints require JWT token in header:
```
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

Token expires in 7 days.

---

**API Version:** 1.0  
**Last Updated:** June 1, 2026
