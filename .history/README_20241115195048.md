# Social Media App (with Context API, Promises, Redux, MongoDB)

## Project Overview:
This social media platform allows users to interact by posting content, commenting, liking posts, following/unfollowing users, and engaging in real-time chat. The app is built with the MERN stack (MongoDB, Express, React, Node.js) and incorporates key technologies like Redux for state management, Context API for authentication, Promises for asynchronous operations, and WebSockets for real-time messaging.

## Key Concepts:
- **Context API**: Manages user authentication and sessions.
- **Redux**: Global state management for posts, comments, followers, likes, and chat messages.
- **Promises**: Asynchronous handling for API calls related to posts, comments, likes, and more.
- **MongoDB**: Stores users, posts, comments, likes, follow relations, and chat history.
- **WebSockets (Socket.io)**: Enables real-time chat and notifications.

## Features:

### 1. User Authentication (with JWT and Context API):
- **Sign up & Login**: Users can register and log in. Passwords are securely hashed using `bcrypt`, and authentication is handled via JSON Web Tokens (JWT).
- **Context API for Authentication**: Manages the current authenticated user across the app.
- **Protected Routes**: Only authenticated users can access certain features (e.g., creating posts or following others).

### 2. Post Creation, Commenting, and Likes (with Redux and MongoDB):
- **Post Creation**: Users can create text, image, or video posts, stored in MongoDB via REST APIs.
- **Commenting**: Users can comment on posts asynchronously using Promises.
- **Like Functionality**: Users can like posts, with the total number of likes updated dynamically.
- **Redux**: Manages global state for posts, likes, and comments.

### 3. Follow/Un follow System:
- **Follow/Un follow Users**: Users can follow or un follow others, with the data stored in MongoDB.
- **Email Notifications**: Users receive notifications via email (using NodeMailer or SendGrid) when followed or un followed.

### 4. Asynchronous Data Handling with Promises:
- **Loading Data**: Asynchronously fetch posts, comments, and likes using Promises, with loading states.
- **Error Handling**: Properly handle API errors and display messages to users.

### 5. REST API for Backend Logic:
- **CRUD Operations**: Supports Create, Read, Update, Delete (CRUD) operations for posts and comments.
- **Authentication Middleware**: Uses JWT middleware to protect routes.
- **Likes and Follow Endpoints**: Endpoints for liking posts and following/un following users, updating the MongoDB collections.

### 6. Email Notifications for Likes, Comments, and Follows:
- **Notifications**: Sends email notifications for:
  - New comments on a post.
  - When someone follows/un follows a user.
  - New likes on a post.

### 7. Real-time Chat (with WebSockets and Redux):
- **Real-time Messaging**: Users can chat in real-time using WebSockets (Socket.io).
- **Redux**: Manages chat state globally.
- **Chat History**: Stores chat history in MongoDB for future reference.

### 8. Notifications for Real-Time Interactions:
- **In-App Notifications**: Real-time notifications for new likes, comments, or follows using WebSockets.
- **Push Notifications** (Optional): Integrates Firebase Cloud Messaging for real-time notifications outside the app.

### 9. Profile Page and Post Feed:
- **User Profile**: Displays a user’s posts, followers, and following lists.
- **Global Feed**: Shows posts from all users or only from followed users.

## Database Structure (MongoDB):
- **Users Collection**:
  - Fields: `username`, `email`, `password`, `followers`, `following`, `posts`, etc.
- **Posts Collection**:
  - Fields: `postContent`, `userId`, `likes`, `comments`, `createdAt`, etc.
- **Comments Collection**:
  - Fields: `commentText`, `userId`, `postId`, `createdAt`, etc.
- **Chat Collection**:
  - Fields: `userId`, `message`, `createdAt`, etc.

## Tech Stack:

### Frontend:
- **React.js**: For building user interfaces.
- **Redux**: For managing global state (posts, comments, likes, chat).
- **Context API**: For managing user authentication.
- **Socket.io**: For enabling real-time messaging.

### Backend:
- **Node.js**: Server-side JavaScript runtime.
- **Express.js**: Web framework for building REST APIs.
- **MongoDB**: NoSQL database for storing users, posts, comments, etc.
- **JWT**: For user authentication and session management.
- **Socket.io**: WebSockets for real-time chat and notifications.

### Email Service:
- **NodeMailer**: Or **SendGrid** for sending email notifications.

## Installation

1. Clone the repository:
   git clone <repository-url>
   cd <project-directory>

Install dependencies:
npm install

Set up environment variables (create a .env file):
MongoDB URI
JWT Secret
Email service credentials

Run the backend:
npm run server

Run the frontend:
npm start

How to Use:
Sign up/Login: Register or log in to your account.
Create Posts: Post content in text, image, or video format.
Interact: Like, comment, and follow/un follow other users.
Real-time Chat: Chat with other users in real-time.

Challenges & Learnings:
State Management: Effectively managing the global state with Redux.
Real-Time Messaging: Implementing WebSockets for real-time chat.
Asynchronous Programming: Handling API calls with Promises.
Authentication & Authorization: Securing routes using JWT and Context API.

Future Improvements:
Implement push notifications using Firebase.
Improve chat UX/UI with emojis and file sharing.
Add more post filtering and search features.

This project provides hands-on experience with full-stack development, focusing on building a complete social media application with modern technologies.

Feel free to customize it further based on your specific implementation!


Thank you !!!!!! 





