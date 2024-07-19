# 📹 VIDEO CHATTING WEBSITE 💬

![React](https://img.shields.io/badge/React-JS-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-UI-orange)
![Node.js](https://img.shields.io/badge/Node.js-Backend-green)
![Express.js](https://img.shields.io/badge/Express.js-Framework-yellow)
![Socket.io](https://img.shields.io/badge/Socket.io-Real_Time-black)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-brightgreen)
![GraphQL](https://img.shields.io/badge/GraphQL-API-pink)
![WebRTC](https://img.shields.io/badge/WebRTC-Video_Chat-red)

## 📜 Overview

- This is a **Video Chatting Website** using **React**, **Tailwind CSS**, **Node.js/Express**, **Socket.io**, **MongoDB**, and **GraphQL**.
- Engineered a dynamic signaling server in **Node.js** and **Socket.io**, ensuring reliable connections across diverse network configurations. Integrated **MongoDB** for efficient data management, **GraphQL** for flexible API operations.
- Prepared advanced features leveraging **WebRTC**, including enhanced ICE traversal, dynamic bandwidth allocation, and intelligent codec selection for optimal audio and video quality.

## 🛠️ Tech Stack

- **React**
- **Tailwind CSS**
- **Node.js**
- **Express.js**
- **Socket.io**
- **MongoDB**
- **GraphQL**

## 🧩 Features

- **Real-Time Communication**: Video chat with real-time audio and video.
- **Signaling Server**: Robust signaling server using Node.js and Socket.io for reliable connections.
- **Data Management**: Efficient data management with MongoDB.
- **Flexible API**: GraphQL for flexible API operations.
- **Advanced WebRTC Features**: Enhanced ICE traversal, dynamic bandwidth allocation, and intelligent codec selection for optimal quality.

## 🚀 Getting Started

1. **Clone the Repository**:
    ```sh
    git clone https://github.com/Vignesh-2109/Video-Chatting-Website
    cd Video-Chatting-Website
    ```

2. **Install Dependencies**:
    ```sh
    cd backend
    npm install
    cd ../frontend
    npm install
    ```

3. **Set Up Environment Variables**:
    - Create a `.env` file in the `backend` directory with the following contents:
    ```env
    MONGO_URI=your_mongodb_uri
    JWT_SECRET=your_jwt_secret
    ```

4. **Run the Application**:
    - Start the backend server:
    ```sh
    cd backend
    npm start
    ```
    - Start the frontend development server:
    ```sh
    cd ../frontend
    npm start
    ```

## 📂 Project Structure
```
.
├── backend # Node.js/Express server
│ ├── models # MongoDB models
│ ├── routes # Express routes
│ ├── schema # GraphQL schema
│ ├── controllers # Express controllers
│ ├── utils # Utility functions
│ ├── config # Configuration files
│ ├── server.js # Entry point for the server
│ └── package.json # Backend dependencies
├── frontend # React application
│ ├── public # Public assets
│ ├── src # React components and pages
│ │ ├── components # Reusable components
│ │ ├── pages # Application pages
│ │ ├── services # API services
│ │ ├── styles # CSS/SCSS files
│ │ ├── App.js # Main App component
│ │ ├── index.js # Entry point for React
│ │ └── package.json # Frontend dependencies
├── .gitignore # Git ignore file
├── README.md # Project README file
```


## 📚 Documentation

- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Node.js Documentation](https://nodejs.org/en/docs/)
- [Express.js Documentation](https://expressjs.com/en/starter/installing.html)
- [Socket.io Documentation](https://socket.io/docs/)
- [MongoDB Documentation](https://docs.mongodb.com/)
- [GraphQL Documentation](https://graphql.org/learn/)

## 🤝 Contributing

Contributions are welcome! Please open an issue or submit a pull request.



Developed with ❤️ by Vignesh Maram



