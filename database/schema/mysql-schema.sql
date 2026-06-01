-- TTMS MySQL Database Schema
-- Complete SQL schema for Tour & Travel Management System

CREATE TABLE IF NOT EXISTS users (
  id INT PRIMARY KEY AUTO_INCREMENT,
  firstName VARCHAR(100) NOT NULL,
  lastName VARCHAR(100) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  phone VARCHAR(20),
  role ENUM('customer', 'agent', 'admin') DEFAULT 'customer',
  address VARCHAR(255),
  city VARCHAR(100),
  country VARCHAR(100),
  avatar VARCHAR(255),
  isActive BOOLEAN DEFAULT TRUE,
  lastLogin TIMESTAMP NULL,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX idx_email (email),
  INDEX idx_role (role),
  INDEX idx_isActive (isActive)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS tours (
  id INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(255) NOT NULL,
  description LONGTEXT,
  destination VARCHAR(100) NOT NULL,
  startDate DATE NOT NULL,
  endDate DATE NOT NULL,
  duration INT NOT NULL,
  price DECIMAL(12, 2) NOT NULL,
  maxParticipants INT NOT NULL,
  currentParticipants INT DEFAULT 0,
  season ENUM('spring', 'summer', 'autumn', 'winter'),
  status ENUM('active', 'inactive', 'cancelled') DEFAULT 'active',
  rating DECIMAL(3, 1) DEFAULT 0,
  createdBy INT NOT NULL,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (createdBy) REFERENCES users(id),
  INDEX idx_destination (destination),
  INDEX idx_startDate (startDate),
  INDEX idx_status (status),
  INDEX idx_price (price)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS hotels (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  description LONGTEXT,
  address VARCHAR(255),
  city VARCHAR(100),
  country VARCHAR(100),
  latitude DECIMAL(10, 8),
  longitude DECIMAL(11, 8),
  rating DECIMAL(3, 1) DEFAULT 0,
  email VARCHAR(255),
  phone VARCHAR(20),
  website VARCHAR(255),
  checkInTime VARCHAR(20),
  checkOutTime VARCHAR(20),
  cancellationPolicy LONGTEXT,
  status ENUM('active', 'inactive', 'maintenance') DEFAULT 'active',
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX idx_city (city),
  INDEX idx_status (status)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS tour_hotels (
  id INT PRIMARY KEY AUTO_INCREMENT,
  tourId INT NOT NULL,
  hotelId INT NOT NULL,
  nightsCount INT,
  FOREIGN KEY (tourId) REFERENCES tours(id) ON DELETE CASCADE,
  FOREIGN KEY (hotelId) REFERENCES hotels(id) ON DELETE CASCADE,
  UNIQUE KEY unique_tour_hotel (tourId, hotelId)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS bookings (
  id INT PRIMARY KEY AUTO_INCREMENT,
  bookingCode VARCHAR(50) UNIQUE NOT NULL,
  customerId INT NOT NULL,
  tourId INT NOT NULL,
  agentId INT,
  numberOfParticipants INT NOT NULL,
  totalPrice DECIMAL(12, 2) NOT NULL,
  status ENUM('pending_approval', 'approved', 'rejected', 'cancelled', 'completed') DEFAULT 'pending_approval',
  paymentStatus ENUM('unpaid', 'partially_paid', 'paid') DEFAULT 'unpaid',
  amountPaid DECIMAL(12, 2) DEFAULT 0,
  departureDate DATE,
  returnDate DATE,
  specialRequests LONGTEXT,
  approvedBy INT,
  approvalDate TIMESTAMP NULL,
  rejectionReason LONGTEXT,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (customerId) REFERENCES users(id),
  FOREIGN KEY (tourId) REFERENCES tours(id),
  FOREIGN KEY (agentId) REFERENCES users(id),
  FOREIGN KEY (approvedBy) REFERENCES users(id),
  INDEX idx_bookingCode (bookingCode),
  INDEX idx_customerId (customerId),
  INDEX idx_status (status),
  INDEX idx_createdAt (createdAt)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS booking_participants (
  id INT PRIMARY KEY AUTO_INCREMENT,
  bookingId INT NOT NULL,
  firstName VARCHAR(100) NOT NULL,
  lastName VARCHAR(100) NOT NULL,
  email VARCHAR(255),
  phone VARCHAR(20),
  dateOfBirth DATE,
  nationality VARCHAR(100),
  passportNumber VARCHAR(50),
  FOREIGN KEY (bookingId) REFERENCES bookings(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
