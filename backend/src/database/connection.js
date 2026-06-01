const mongoose = require('mongoose');
const mysql = require('mysql2/promise');

const connectDB = async () => {
  const dbType = process.env.DB_TYPE || 'mongodb';

  if (dbType === 'mongodb') {
    connectMongoDB();
  } else if (dbType === 'mysql') {
    connectMySQL();
  }
};

const connectMongoDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
    console.log(`📚 Database: ${conn.connection.name}`);
    return conn;
  } catch (error) {
    console.error(`❌ MongoDB Connection Error: ${error.message}`);
    process.exit(1);
  }
};

const connectMySQL = async () => {
  try {
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    });

    console.log(`✅ MySQL Connected: ${process.env.DB_HOST}`);
    console.log(`📚 Database: ${process.env.DB_NAME}`);
    return connection;
  } catch (error) {
    console.error(`❌ MySQL Connection Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
