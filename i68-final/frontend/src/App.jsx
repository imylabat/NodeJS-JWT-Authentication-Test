// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Summary from "./pages/Summary";
import Reports from "./pages/Reports";
import ProtectedRoute from "./components/ProtectedRoute";





export default function App() {
return (
<Router>
<Routes>
<Route path="/login" element={<Login />} />
<Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>}/>
<Route path="*" element={<Navigate to="/login" />} />
<Route path="/summary" element={<ProtectedRoute><Summary /></ProtectedRoute>}/>
<Route path="/reports" element={<ProtectedRoute><Reports /></ProtectedRoute>}/>
</Routes>
</Router>
);
}