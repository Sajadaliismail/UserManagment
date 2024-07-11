User Management System
Project Overview
This project is a user management system built using the MERN stack (MongoDB, Express.js, React.js, Node.js). It includes features such as displaying user information in a table, search functionality with suggestions, adding new users via a form, and database integration.

Technologies Used
Frontend: React.js with MDB UI for UI components and MUI table for displaying user data.
Backend: Node.js with Express.js for REST APIs, MongoDB for database storage.
Deployment: Backend deployed on Render, Frontend deployed on Vercel.
Other Tools: CORS for connecting backend and frontend.
Project Structure
Backend (/server):

Express.js server handling API requests (/server/index.js).
MongoDB for storing user data (/server/models/User.js).
REST APIs for CRUD operations (GET, POST, DELETE, PUT).
Frontend (/client):

React.js frontend with components structured in /client/src/components.
User Table component (UserTable.js) using MUI table for displaying users.
New User Form component (AddUserForm.js) for adding new users.
Features Implemented
User Table:

Displays user information fetched from the backend MongoDB.
Utilizes MUI table for sorting, pagination, and displaying data.
Search Functionality:

Search bar above the table with autocomplete suggestions.
Filters users based on first name, last name, or email.
New User Form:

Modal form with MDB UI components for adding new users.
Validates input fields for required information.
Database Integration:

MongoDB used for storing user data.
Implemented CRUD operations (Create, Read, Update, Delete) via REST APIs.
Deployment:

Backend deployed on Render for server hosting.
Frontend deployed on Vercel for client-side hosting.
Additional Features (Optional)
Pagination for the user table to handle large datasets.
Sorting functionality to sort users by different criteria.
Setup Instructions
Backend Setup:

Clone the repository and navigate to /server.
Install dependencies using npm install.
Set up MongoDB and update connection details in /server/index.js.
Start the server using npm start.
Frontend Setup:

Navigate to /client and install dependencies using npm install.
Update backend URL in /client/src/api/index.js for API calls.
Start the React development server using npm start.
Deployment:

Deploy the backend on Render following Render's deployment instructions.
Deploy the frontend on Vercel following Vercel's deployment instructions.
Update CORS settings on the backend to allow requests from the deployed frontend URL.

user-managment-dun.vercel.app