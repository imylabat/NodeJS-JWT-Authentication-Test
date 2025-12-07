// src/pages/Login.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export default function Login() {
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');
const navigate = useNavigate();


const handleSubmit = async (e) => {
e.preventDefault();
try {
const res = await axios.post('/api/login', { username, password });
localStorage.setItem('token', res.data.token);
navigate('/dashboard');
} catch (err) {
alert('Invalid credentials');
}
};


return (
<div className="p-8 max-w-md mx-auto">
<h1 className="text-2xl mb-4">Login</h1>
<form onSubmit={handleSubmit} className="flex flex-col gap-4">
<input
className="border p-2"
placeholder="Username"
value={username}
onChange={(e) => setUsername(e.target.value)}
/>
<input
className="border p-2"
placeholder="Password"
type="password"
value={password}
onChange={(e) => setPassword(e.target.value)}
/>
<button className="bg-black text-white p-2" type="submit">Login</button>
</form>
</div>
);
}