💬 PingMe

PingMe is a real-time chat web application that enables users to send and receive messages instantly. It provides a smooth, modern, and interactive chatting experience with secure authentication, live updates, and responsive UI.

🚀 Features
⚡ Real-time Messaging – Instant message delivery using WebSocket.
🔐 User Authentication – Secure login and registration with JWT.
🧠 State Management – Efficient and lightweight management with Zustand.
🛡️ Rate Limiting – Arcjet integration to prevent request abuse.
🎨 Modern UI – Built with React, Tailwind CSS, and DaisyUI for a clean, responsive design.
💬 Live Updates – Messages, online users, and statuses update in real time.

🏗️ Tech Stack

Frontend:
React
Tailwind CSS
DaisyUI
Zustand

Backend:
Node.js
Express.js
WebSocket
JWT (Authentication)
Arcjet (Rate Limiting)

⚙️ Installation & Setup
1️⃣ Clone the repository
git clone https://github.com/your-username/pingme.git

cd pingme

2️⃣ Install dependencies
For frontend:

cd client

npm install


For backend:

cd server

npm install

3️⃣ Set up environment variables

Create a .env file in the server directory and add:

PORT=5000

JWT_SECRET=your_secret_key

ARCJET_API_KEY=your_arcjet_api_key

4️⃣ Run the application

In one terminal (for backend):

cd server
npm start


In another terminal (for frontend):

cd client
npm start


Then open http://localhost:3000
 in your browser.
