# 🧾 Resume Generator Web Application  

A full-stack **Resume Generator Web App** building with the **MERN (MongoDB, Express, React, Node.js)** stack.  
This application allows users to easily create, preview, and download professional resumes by filling in their details through an interactive web interface.  

---

## 🚀 Features

✅ **Interactive Resume Builder** – Step-by-step input for personal, educational, and experience details.  
✅ **Live Preview** – Instantly view how your resume looks while editing.  
✅ **Multiple Templates** – Choose from various modern templates.  
✅ **Download as PDF** – Generate and download resume instantly.  
✅ **User Accounts** – Sign up and log in to save and manage resumes.  
✅ **Responsive UI** – Fully optimized for all screen sizes.  

---

## 🧠 Tech Stack  

| Layer | Technology |
|--------|-------------|
| **Frontend** | React.js, HTML, CSS |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB |
| **PDF Generation** | jsPDF / html2canvas |
| **Authentication** | JWT (JSON Web Token) |
| **Version Control** | Git & GitHub |

---

## 🗂 Folder Structure (Tentative ⚒️)  

```pgsql  
resume_generator_app/
├── frontend/                # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── PersonalDetails.jsx
│   │   │   ├── Education.jsx
│   │   │   ├── Experience.jsx
│   │   │   ├── TemplateSelector.jsx
│   │   │   └── ResumePreview.jsx
│   │   ├── App.js
│   │   ├── index.js
│   │   └── styles/
│   └── package.json
│
├── backend/                # Node.js backend
│   ├── models/
│   │   └── User.js
│   │   └── Resume.js
│   ├── routes/
│   │   └── authRoutes.js
│   │   └── resumeRoutes.js
│   ├── controllers/
│   │   └── authController.js
│   │   └── resumeController.js
│   ├── server.js
│   ├── .env
│   └── package.json
│
├── README.md
└── .gitignore
```

---

## ⚙️ Installation and Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/M-Aditya-11/resume_generator_app.git
```

### 2️⃣ Navigate to project folder

```bash
cd resume_generator_app
```

---

### 3️⃣ Install dependencies for both frontend and backend

```bash
cd frontend
npm install
cd ../backend
npm install
```

### 4️⃣ Set up environment variables

Create a `.env` file inside the `server/` folder and add:

```ini
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### 5️⃣ Run the development servers

 - For frontend :
```bash
cd frontend
npm run dev
```

 - For backend :
```bash
cd backend
npm start
```

The app will be available at

👉 **Frontend**: `http://localhost:5137`

👉 **Backend**: `http://localhost:5000`

---

## 🧾 Usage

 1. Register or log in to create an account.
 2. Enter your personal, education, and experience details.
 3. Choose a resume template.
 4. Preview your resume in real time.
 5. Download the resume as PDF or save it to your account.

---

## 🧩 API Endpoints (Backend Overview)

| Method | Endpoint              | Description               |
| ------ | --------------------- | ------------------------- |
| `POST` | `/api/auth/register`  | Register a new user       |
| `POST` | `/api/auth/login`     | Authenticate user         |
| `POST` | `/api/resume`         | Create or update a resume |
| `GET`  | `/api/resume/:userId` | Get user’s saved resume   |

---

## 🔮 Future Enhancements

- 🧑‍💼 AI-based resume content suggestions.

- 🎨 Add customizable color and font options.

- ☁️ Cloud resume storage and sharing links.

- 💌 Direct email export and LinkedIn integration.

- 📱 Mobile app version (React Native).

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repo

2. Create a new branch `(git checkout -b feature-name)`

3. Commit your changes `(git commit -m 'Add feature')`

4. Push to main branch `(git push origin feature-name)`

5. Create a Pull Request

---

## 📜 License

This project is licensed under the MIT License – feel free to use, modify, and distribute.

---

## 👨‍💻 Author

💡 Tech enthusiast | Full-Stack Developer  
📧 [adityamandavkar11@outlook.com]  
🌐 [www.linkedin.com/in/adityamandavkar11] | [[M-Aditya-11](https://github.com/M-Aditya-11)]  
