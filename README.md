# Tour & Travel Management System (TTMS)
## Team: SWR-G6 (Nhóm 6)

**Project Lead:** Hoàng Ngọc Dũng  
**Team Members:** Trần Mạnh Tường, Lê Quốc Dũng, Phạm Bá Hoàng Hà, Đinh Gia Bảo  
**Supervisor:** Nguyễn Văn Nam  
**Duration:** May 2026
**Repository:** https://github.com/hdung201104/week3

---

## 📁 Week 3 Deliverables Structure

```
week3/
├── frontend/                           # React Frontend
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── common/                # Shared components
│   │   │   ├── layouts/               # Layout components
│   │   │   └── features/              # Feature-specific components
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   ├── TourSearch.jsx
│   │   │   ├── BookingManagement.jsx
│   │   │   └── Analytics.jsx
│   │   ├── styles/
│   │   ├── App.jsx
│   │   └── index.jsx
│   ├── package.json
│   ├── tailwind.config.js
│   └── .env.example
│
├── backend/                            # Node.js Backend
│   ├── src/
│   │   ├── controllers/
│   │   │   ├── authController.js
│   │   │   ├── tourController.js
│   │   │   ├── bookingController.js
│   │   │   ├── hotelController.js
│   │   │   └── analyticsController.js
│   │   ├── models/
│   │   │   ├── User.js
│   │   │   ├── Tour.js
│   │   │   ├── Booking.js
│   │   │   ├── Hotel.js
│   │   │   └── Agent.js
│   │   ├── routes/
│   │   │   ├── auth.js
│   │   │   ├── tours.js
│   │   │   ├── bookings.js
│   │   │   ├── hotels.js
│   │   │   └── analytics.js
│   │   ├── middleware/
│   │   │   ├── auth.js
│   │   │   └── errorHandler.js
│   │   ├── database/
│   │   │   └── connection.js
│   │   └── server.js
│   ├── package.json
│   └── .env.example
│
├── database/                           # Database Design
│   ├── schema/
│   │   ├── mongodb-schema.md           # MongoDB schema design
│   │   ├── mysql-schema.sql            # MySQL schema
│   │   └── collections/
│   │       ├── users.json
│   │       ├── tours.json
│   │       ├── bookings.json
│   │       └── hotels.json
│   ├── ERD.md                          # Entity Relationship Diagram
│   └── database-design.md              # Database design documentation
│
├── documentation/                      # Project Documentation
│   ├── SRS.md                          # Software Requirements Specification
│   ├── usecase-diagram.md              # Use case diagrams & descriptions
│   ├── ui-design.md                    # UI/UX design documentation
│   ├── api-documentation.md            # API endpoints documentation
│   └── deployment.md                   # Deployment guide
│
├── latex-template/                     # LaTeX Report (Springer-style)
│   ├── main.tex                        # Main LaTeX file
│   ├── preamble.tex                    # Package imports & settings
��   ├── sections/
│   │   ├── 01-introduction.tex
│   │   ├── 02-related-work.tex
│   │   ├── 03-methodology.tex
│   │   ├── 04-system-design.tex
│   │   ├── 05-implementation.tex
│   │   ├── 06-results.tex
│   │   ├── 07-conclusion.tex
│   │   └── 08-appendix.tex
│   ├── figures/                        # Diagrams & images
│   ├── references.bib                  # BibTeX references (Zotero)
│   └── README.tex                      # LaTeX compilation guide
│
├── week-3-checklist.md                 # Week 3 Deliverables Checklist
├── TEAM-ASSIGNMENTS.md                 # Team member assignments
├── SETUP-GUIDE.md                      # Setup & Installation guide
└── .gitignore
```

---

## ✅ Week 3 Deliverables

### 1. Frontend Repository ✓
- [ ] React 18+ project initialized
- [ ] Tailwind CSS configured
- [ ] Basic page structure (Home, Dashboard, Search, Booking, Analytics)
- [ ] Responsive design (Mobile + Desktop)
- [ ] Component library created

### 2. Backend Repository ✓
- [ ] Node.js + Express server setup
- [ ] Database connection configured
- [ ] Auth controllers implemented
- [ ] API routes structured
- [ ] Error handling middleware

### 3. Database Design ✓
- [ ] ERD diagram created
- [ ] MongoDB schema defined
- [ ] OR MySQL schema defined
- [ ] Relationships documented
- [ ] Sample data provided

### 4. SRS Update ✓
- [ ] ERD included
- [ ] Use case diagrams
- [ ] UI mockups/screenshots
- [ ] API documentation
- [ ] Business rules documented

### 5. LaTeX Template ✓
- [ ] Springer-style template created
- [ ] All sections prepared
- [ ] Bibliography setup
- [ ] Ready for Overleaf integration

### 6. Tools Setup ✓
- [ ] Overleaf project created
- [ ] Zotero library setup
- [ ] GitHub Classroom link submitted

---

## 🔗 Important Links & Tools

### Development Tools
- **GitHub Repository:** https://github.com/hdung201104/week3
- **GitHub Classroom:** [Submit via classroom link]
- **Overleaf:** https://www.overleaf.com/ (Create new project)
- **Zotero:** https://www.zotero.org/ (Create library)

### Database
- **MongoDB Atlas:** https://www.mongodb.com/cloud/atlas (Optional)
- **MySQL:** https://www.mysql.com/ (Local or RDS)

### Technologies
- **Frontend:** React 18+, Tailwind CSS 3+, Axios
- **Backend:** Node.js 18+, Express.js, JWT
- **Database:** MongoDB or MySQL
- **LaTeX:** Overleaf (web-based)

---

## 📊 Team Assignments

See [TEAM-ASSIGNMENTS.md](./TEAM-ASSIGNMENTS.md) for detailed role breakdown.

---

## 🚀 Quick Start

```bash
# Clone repository
git clone https://github.com/hdung201104/week3.git
cd week3

# Frontend setup
cd frontend
npm install
npm start

# Backend setup (in new terminal)
cd backend
npm install
npm run dev
```

See [SETUP-GUIDE.md](./SETUP-GUIDE.md) for detailed instructions.

---

## 📝 Documentation

All documentation is in the `documentation/` folder:
- [SRS.md](./documentation/SRS.md) - Complete requirements
- [ERD.md](./database/ERD.md) - Database schema
- [usecase-diagram.md](./documentation/usecase-diagram.md) - Use cases
- [ui-design.md](./documentation/ui-design.md) - UI mockups

---

## 📅 Timeline

- **Week 3:** Setup & design (Current)
- **Week 4:** Core development
- **Week 5:** Testing & refinement
- **Week 6:** Final deployment

---

**Last Updated:** June 1, 2026  
**Status:** Week 3 - Setup Phase ✓