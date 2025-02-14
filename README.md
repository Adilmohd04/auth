## **User Authentication API** 🚀  
A simple **user authentication system** using **Express.js, MongoDB, and JWT**.  

### **Features**  
- **User Registration** (`POST /api/auth/register`)  
- **User Login** (`POST /api/auth/login`)  
- **Search User** (`GET /api/auth/search?query=username_or_email`)  
- **JWT Authentication** for security  
- **Data validation & password hashing**  

### **Tech Stack**  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB (Mongoose ODM)  
- **Authentication:** JWT, bcrypt.js  
- **Testing:** Postman  

### **Installation & Setup**  
```bash
# Clone the repo
git clone https://github.com/Adilmohd04/auth.git
cd auth

# Install dependencies
npm install

# Create .env file and add:
JWT_SECRET=your_secret_key
MONGO_URI=your_mongodb_uri

# Start the server
npm run dev
```

### **API Endpoints & Testing**  
Use **Postman** to test:  
- **Register:** `POST /api/auth/register`  
- **Login:** `POST /api/auth/login`  
- **Search:** `GET /api/auth/search?query=username_or_email`  

