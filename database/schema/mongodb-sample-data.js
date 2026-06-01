# TTMS MongoDB Schema Collections
# Sample documents for each collection

## Users Collection
db.users.insertMany([
  {
    _id: ObjectId(),
    firstName: "Nguyen",
    lastName: "Van A",
    email: "customer1@ttms.com",
    password: "$2a$10$...", // bcrypt hashed
    phone: "0901234567",
    role: "customer",
    address: "123 Nguyen Hue St",
    city: "Ho Chi Minh City",
    country: "Vietnam",
    avatar: "https://...",
    isActive: true,
    lastLogin: new Date("2026-06-01"),
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    _id: ObjectId(),
    firstName: "Tran",
    lastName: "Admin",
    email: "admin@ttms.com",
    password: "$2a$10$...",
    phone: "0987654321",
    role: "admin",
    isActive: true,
    lastLogin: new Date("2026-06-01"),
    createdAt: new Date(),
    updatedAt: new Date()
  }
]);

## Tours Collection
db.tours.insertMany([
  {
    _id: ObjectId("6755d1a1b3e4f5g6h7i8j9k0"),
    title: "Ha Long Bay Adventure",
    description: "3 days exploring UNESCO World Heritage Ha Long Bay",
    destination: "Ha Long",
    startDate: new Date("2026-06-15"),
    endDate: new Date("2026-06-18"),
    duration: 3,
    price: 2500000, // VND
    maxParticipants: 50,
    currentParticipants: 12,
    itinerary: [
      {
        day: 1,
        title: "Arrival & Cruise",
        description: "Check-in at hotel, board Ha Long Bay cruise",
        activities: ["Hotel check-in", "Dinner cruise", "Sunset viewing"],
        location: "Ha Long City"
      },
      {
        day: 2,
        title: "Cave Exploration",
        description: "Visit Sung Sot Cave and Surprise Cave",
        activities: ["Cave tour", "Swimming", "Lunch on cruise"],
        location: "Ha Long Bay"
      },
      {
        day: 3,
        title: "Return & Departure",
        description: "Breakfast, checkout, return to Hanoi",
        activities: ["Breakfast", "Transfer to Hanoi"],
        location: "Ha Long City"
      }
    ],
    accommodations: [ObjectId("5566e2b2c4f5g6h7i8j9k1a")],
    season: "spring",
    status: "active",
    images: ["image1.jpg", "image2.jpg"],
    rating: 4.8,
    reviews: [
      {
        userId: ObjectId(),
        comment: "Amazing experience!",
        rating: 5,
        createdAt: new Date()
      }
    ],
    createdBy: ObjectId(),
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    _id: ObjectId("6755d1a1b3e4f5g6h7i8j9k1"),
    title: "Sapa Trekking Tour",
    description: "4 days trekking in mountains with homestay",
    destination: "Sapa",
    startDate: new Date("2026-07-01"),
    endDate: new Date("2026-07-05"),
    duration: 4,
    price: 1800000,
    maxParticipants: 30,
    currentParticipants: 8,
    itinerary: [
      {
        day: 1,
        title: "Hanoi to Sapa",
        description: "Travel from Hanoi to Sapa",
        activities: ["Bus travel", "Hotel check-in"],
        location: "Sapa"
      }
    ],
    accommodations: [ObjectId("5566e2b2c4f5g6h7i8j9k1b")],
    season: "summer",
    status: "active",
    rating: 4.6,
    createdBy: ObjectId(),
    createdAt: new Date(),
    updatedAt: new Date()
  }
]);

## Hotels Collection
db.hotels.insertMany([
  {
    _id: ObjectId("5566e2b2c4f5g6h7i8j9k1a"),
    name: "Starlight Ha Long Bay",
    description: "Luxury cruise hotel in Ha Long Bay",
    location: {
      address: "Ha Long Bay, Quang Ninh",
      city: "Ha Long",
      country: "Vietnam",
      coordinates: {
        latitude: 20.9101,
        longitude: 107.1839
      }
    },
    rating: 4.7,
    rooms: [
      {
        roomType: "double",
        totalRooms: 20,
        availableRooms: 15,
        pricePerNight: 3000000,
        amenities: ["AC", "Bathroom", "TV", "Balcony"]
      },
      {
        roomType: "suite",
        totalRooms: 5,
        availableRooms: 3,
        pricePerNight: 5000000,
        amenities: ["AC", "Bathroom", "TV", "Balcony", "Living room"]
      }
    ],
    amenities: ["WiFi", "Restaurant", "Bar", "Pool", "Spa"],
    images: ["hotel1.jpg", "hotel2.jpg"],
    contactInfo: {
      email: "info@starlighthalongbay.com",
      phone: "+84 33 1234567",
      website: "www.starlighthalongbay.com"
    },
    policies: {
      checkInTime: "14:00",
      checkOutTime: "11:00",
      cancellationPolicy: "Free cancellation up to 7 days before arrival"
    },
    status: "active",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    _id: ObjectId("5566e2b2c4f5g6h7i8j9k1b"),
    name: "Sapa Mountain Lodge",
    description: "Homestay in Sapa mountains",
    location: {
      address: "Sapa, Lao Cai",
      city: "Sapa",
      country: "Vietnam",
      coordinates: {
        latitude: 22.3402,
        longitude: 103.8442
      }
    },
    rating: 4.5,
    rooms: [
      {
        roomType: "double",
        totalRooms: 10,
        availableRooms: 8,
        pricePerNight: 1500000,
        amenities: ["Heating", "Private bathroom", "Mountain view"]
      }
    ],
    amenities: ["WiFi", "Restaurant", "Fireplace"],
    contactInfo: {
      email: "info@sapamountainlodge.com",
      phone: "+84 20 3871234"
    },
    policies: {
      checkInTime: "15:00",
      checkOutTime: "10:00",
      cancellationPolicy: "Free cancellation up to 3 days before arrival"
    },
    status: "active",
    createdAt: new Date(),
    updatedAt: new Date()
  }
]);

## Bookings Collection
db.bookings.insertMany([
  {
    _id: ObjectId(),
    bookingCode: "BK-20260601123456",
    customer: ObjectId(), // Reference to user
    tour: ObjectId("6755d1a1b3e4f5g6h7i8j9k0"),
    agent: ObjectId(),
    numberOfParticipants: 4,
    totalPrice: 10000000,
    status: "pending_approval",
    paymentStatus: "unpaid",
    amountPaid: 0,
    departureDate: new Date("2026-06-15"),
    returnDate: new Date("2026-06-18"),
    specialRequests: "Need airport transfer",
    participants: [
      {
        firstName: "Hoang",
        lastName: "Dung",
        email: "hoang@email.com",
        phone: "0901111111",
        dateOfBirth: new Date("1990-05-15"),
        nationality: "Vietnam",
        passportNumber: "A12345678"
      }
    ],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    _id: ObjectId(),
    bookingCode: "BK-20260601123457",
    customer: ObjectId(),
    tour: ObjectId("6755d1a1b3e4f5g6h7i8j9k1"),
    numberOfParticipants: 2,
    totalPrice: 3600000,
    status: "approved",
    paymentStatus: "paid",
    amountPaid: 3600000,
    departureDate: new Date("2026-07-01"),
    returnDate: new Date("2026-07-05"),
    approvedBy: ObjectId(),
    approvalDate: new Date("2026-06-01"),
    participants: [],
    createdAt: new Date("2026-05-28"),
    updatedAt: new Date()
  }
]);

## Create Indexes
db.users.createIndex({ email: 1 }, { unique: true });
db.users.createIndex({ role: 1 });
db.users.createIndex({ isActive: 1 });

db.tours.createIndex({ destination: 1 });
db.tours.createIndex({ season: 1 });
db.tours.createIndex({ startDate: 1 });
db.tours.createIndex({ status: 1 });
db.tours.createIndex({ price: 1 });
db.tours.createIndex({ createdBy: 1 });

db.bookings.createIndex({ bookingCode: 1 }, { unique: true });
db.bookings.createIndex({ customer: 1 });
db.bookings.createIndex({ tour: 1 });
db.bookings.createIndex({ status: 1 });
db.bookings.createIndex({ createdAt: 1 });

db.hotels.createIndex({ "location.city": 1 });
db.hotels.createIndex({ status: 1 });
db.hotels.createIndex({ rating: 1 });
