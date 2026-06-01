# TTMS Database Design - ERD

## Entity Relationship Diagram

```
USERS (id, email, password, role, ...)
  ├─── 1:N ──→ TOURS (createdBy)
  ├─── 1:N ──→ BOOKINGS (customer)
  └─── 1:N ──→ BOOKINGS (approvedBy)

TOURS (id, title, destination, price, ...)
  ├─── N:N ──→ HOTELS (accommodations)
  └─── 1:N ──→ BOOKINGS (tour)

BOOKINGS (id, bookingCode, status, ...)
  ├─── N:1 ──→ USERS (customer)
  ├─── N:1 ──→ USERS (agent)
  ├─── N:1 ──→ TOURS (tour)
  └─── 1:N ──→ PARTICIPANTS (embedded)

HOTELS (id, name, city, ...)
  └─── N:N ←── TOURS (accommodations)
```

## Collections Structure

### Users
- _id, firstName, lastName, email, password, phone
- role (customer/agent/admin), address, city, country
- isActive, lastLogin, createdAt, updatedAt

### Tours  
- _id, title, description, destination
- startDate, endDate, duration, price
- maxParticipants, currentParticipants
- season, status, rating
- itinerary[], accommodations[], reviews[]
- createdBy, createdAt, updatedAt

### Bookings
- _id, bookingCode, customer, tour, agent
- numberOfParticipants, totalPrice
- status (pending_approval/approved/rejected/cancelled/completed)
- paymentStatus (unpaid/partially_paid/paid)
- participants[], departureDate, returnDate
- specialRequests, approvedBy, approvalDate
- createdAt, updatedAt

### Hotels
- _id, name, description, location
- rating, rooms[], amenities[]
- contactInfo, policies, status
- images, createdAt, updatedAt

## Key Constraints

1. Email: UNIQUE
2. BookingCode: UNIQUE  
3. Relationship: Tour.accommodations[] → Hotel._id
4. Status Workflow: pending_approval → approved → completed
5. Participant Validation: numberOfParticipants <= availableSeats
