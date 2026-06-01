# Setup & Installation Guide
## TTMS - SWR-G6 Week 3 Development Environment

---

## 🎯 Prerequisites

### System Requirements
- **OS:** Windows 10+, macOS 10.15+, or Ubuntu 18.04+
- **RAM:** 8GB minimum (16GB recommended)
- **Storage:** 10GB free space

### Software to Install
1. **Git** - https://git-scm.com/
2. **Node.js** (18+ LTS) - https://nodejs.org/
3. **npm** or **yarn** - Comes with Node.js
4. **Code Editor:** VS Code - https://code.visualstudio.com/
5. **Database:**
   - **MongoDB Community** - https://www.mongodb.com/try/download/community
   - OR **MySQL** - https://www.mysql.com/downloads/

### Optional Tools
- **Postman** - https://www.postman.com/ (API testing)
- **MongoDB Compass** - https://www.mongodb.com/products/compass (MongoDB GUI)
- **MySQL Workbench** - https://www.mysql.com/products/workbench/ (MySQL GUI)
- **Git GUI:** GitHub Desktop - https://desktop.github.com/

---

## 📥 Step 1: Clone Repository

```bash
# Navigate to your development directory
cd ~/Development
# or
cd /path/to/projects

# Clone the repository
git clone https://github.com/hdung201104/week3.git
cd week3

# List contents
ls -la
```

**Expected Output:**
```
.
frontend/
backend/
database/
documentation/
latex-template/
README.md
SETUP-GUIDE.md
...
```

---

## 🖥️ Step 2: Frontend Setup

### 2.1 Navigate to Frontend Folder
```bash
cd frontend
pwd  # Verify you're in week3/frontend
```

### 2.2 Install Dependencies
```bash
npm install
# or
yarn install
```

**This will install:**
- React 18+
- Tailwind CSS 3+
- React Router v6+
- Axios
- Other dependencies from package.json

### 2.3 Create Environment File
```bash
cp .env.example .env.local
```

**Edit `.env.local`:**
```env
REACT_APP_API_URL=http://localhost:5000/api
REACT_APP_ENVIRONMENT=development
```

### 2.4 Start Development Server
```bash
npm start
# or
yarn start
```

**Expected Output:**
```
Compiled successfully!

You can now view frontend in the browser.

Local:            http://localhost:3000
On Your Network:  http://192.168.x.x:3000
```

✅ **Frontend is running on http://localhost:3000**

---

## ⚙️ Step 3: Backend Setup

### 3.1 Open New Terminal Window
```bash
# In a NEW terminal (keep frontend running in first terminal)
cd /path/to/week3/backend
pwd  # Verify location
```

### 3.2 Install Dependencies
```bash
npm install
```

**This will install:**
- Express.js
- MongoDB/MySQL driver
- JWT for authentication
- Dotenv for environment variables
- Cors for cross-origin
- Other dependencies

### 3.3 Create Environment File
```bash
cp .env.example .env
```

**Edit `.env`:**

#### For MongoDB:
```env
PORT=5000
NODE_ENV=development

# MongoDB
DB_TYPE=mongodb
MONGODB_URI=mongodb://localhost:27017/ttms
# Or MongoDB Atlas:
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/ttms

# JWT
JWT_SECRET=your_super_secret_key_here_change_in_production
JWT_EXPIRE=7d

# CORS
CLIENT_URL=http://localhost:3000
```

#### For MySQL:
```env
PORT=5000
NODE_ENV=development

# MySQL
DB_TYPE=mysql
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=ttms

# JWT
JWT_SECRET=your_super_secret_key_here_change_in_production
JWT_EXPIRE=7d

# CORS
CLIENT_URL=http://localhost:3000
```

### 3.4 Start Backend Server
```bash
npm run dev
# or
node src/server.js
```

**Expected Output:**
```
Server is running on port 5000
Database connected successfully
```

✅ **Backend is running on http://localhost:5000**

---

## 🗄️ Step 4: Database Setup

### Option A: MongoDB (Recommended for flexibility)

#### 4A.1 Install MongoDB Community
- **Windows:** Download from https://www.mongodb.com/try/download/community
- **macOS:** `brew install mongodb-community`
- **Linux:** `sudo apt-get install -y mongodb`

#### 4A.2 Start MongoDB Service
```bash
# macOS
brew services start mongodb-community

# Windows (as Admin)
net start MongoDB

# Linux
sudo systemctl start mongod
```

#### 4A.3 Verify MongoDB is Running
```bash
# Test connection
mongo mongodb://localhost:27017/ttms

# Should show: "connecting to: mongodb://localhost:27017/ttms"
```

#### 4A.4 Create Initial Database (Optional)
```bash
use ttms
db.createCollection("users")
db.createCollection("tours")
db.createCollection("bookings")
db.createCollection("hotels")
exit
```

---

### Option B: MySQL

#### 4B.1 Install MySQL
- **Windows:** https://dev.mysql.com/downloads/installer/
- **macOS:** `brew install mysql`
- **Linux:** `sudo apt-get install mysql-server`

#### 4B.2 Start MySQL Service
```bash
# macOS
brew services start mysql

# Windows (as Admin)
net start MySQL80

# Linux
sudo systemctl start mysql
```

#### 4B.3 Create Database
```bash
# Connect to MySQL
mysql -u root -p
# Enter your password

# Create database
CREATE DATABASE ttms;
USE ttms;

# Verify
SHOW DATABASES;
exit
```

#### 4B.4 Run Schema Script
```bash
mysql -u root -p ttms < database/schema/mysql-schema.sql
```

---

## 🔗 Step 5: Verify All Services Running

```bash
# Check Frontend (Terminal 1)
# http://localhost:3000 - Should see React app

# Check Backend (Terminal 2)
# http://localhost:5000/api/status - Should return JSON

# Check Database
# MongoDB: mongo --version
# MySQL: mysql --version
```

**Test API Connection:**
```bash
# Make test request
curl http://localhost:5000/api/status

# Or use Postman:
# GET http://localhost:5000/api/status
```

---

## 📚 Step 6: Documentation Setup

### 6.1 Review Documentation
```bash
cd documentation

# Available documents:
ls -la
# SRS.md
# usecase-diagram.md
# ui-design.md
# api-documentation.md
# deployment.md
```

### 6.2 Setup LaTeX (Overleaf)

1. Go to https://www.overleaf.com/
2. Create new account (if needed)
3. Create new project from Springer template
4. Upload files from `latex-template/` folder
5. Compile to generate PDF

### 6.3 Setup Zotero

1. Go to https://www.zotero.org/
2. Create new account
3. Download Zotero desktop app
4. Create new collection for TTMS
5. Install browser extension
6. Start collecting references

---

## 🧪 Step 7: Test Everything

### 7.1 Frontend Test
```bash
# Terminal 1 - Frontend should be serving
cd frontend
npm test
```

### 7.2 Backend Test
```bash
# Terminal 2 - Backend should have routes
curl http://localhost:5000/api/auth/status
```

### 7.3 Database Test
```bash
# MongoDB
mongo mongodb://localhost:27017/ttms --eval "db.adminCommand('ping')"

# MySQL
mysql -u root -p -e "SELECT DATABASE();"
```

---

## 📝 Additional Commands

### Git Workflow
```bash
# Check status
git status

# Create new branch
git checkout -b feature/your-feature-name

# Add changes
git add .

# Commit
git commit -m "feat: describe your changes"

# Push to GitHub
git push origin feature/your-feature-name

# Create Pull Request on GitHub
```

### Frontend Development
```bash
# Start dev server
npm start

# Build for production
npm run build

# Run tests
npm test

# Format code
npm run lint
```

### Backend Development
```bash
# Start dev server with auto-reload
npm run dev

# Start production server
npm start

# Run tests
npm test

# Format code
npm run lint
```

---

## 🐛 Troubleshooting

### Frontend Won't Start
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm start
```

### Backend Port Already in Use
```bash
# Find process using port 5000
lsof -i :5000

# Kill process
kill -9 <PID>

# Or change port in .env
PORT=5001
```

### Database Connection Failed
```bash
# Check MongoDB status
mongo --version
sudo systemctl status mongod

# Check MySQL status
mysql --version
sudo systemctl status mysql

# Verify credentials in .env
```

### Module Not Found
```bash
# Reinstall all dependencies
npm install

# Clear npm cache
npm cache clean --force
npm install
```

---

## ✅ Checklist - Setup Complete

- [ ] Node.js & npm installed
- [ ] Repository cloned
- [ ] Frontend dependencies installed
- [ ] Backend dependencies installed
- [ ] Database (MongoDB or MySQL) installed
- [ ] .env files created for frontend and backend
- [ ] Frontend running on http://localhost:3000
- [ ] Backend running on http://localhost:5000
- [ ] Database connected
- [ ] Git configured
- [ ] Overleaf project created
- [ ] Zotero account created

---

## 📞 Need Help?

1. **Check GitHub Issues:** https://github.com/hdung201104/week3/issues
2. **Contact Project Lead:** Hoàng Ngọc Dũng (@hdung201104)
3. **Ask in GitHub Discussions:** https://github.com/hdung201104/week3/discussions

---

**Version:** 1.0  
**Last Updated:** June 1, 2026  
**Status:** Ready for Use