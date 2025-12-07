# I68 - Final Project

## Backend
cd backend
copy .env.example to .env and set MONGODB_URI and JWT_SECRET
npm install
npm run seed
npm run start

## Frontend
cd frontend
npm install
npm run build
# copy build/ to server and configure nginx to serve it

## Login
username: isaac
password: isaac

## API endpoints
POST /api/login
GET /api/article (Authorization: Bearer <token>)
GET /api/chart/:id (Authorization: Bearer <token>)

