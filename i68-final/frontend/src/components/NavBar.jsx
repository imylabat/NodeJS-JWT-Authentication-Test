import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function NavBar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/"); // back to login
  };

  return (
    <nav
      className="w-full bg-gray-200 p-4 flex items-center justify-between"
      aria-label="Main navigation"
    >
      {/* Left Links */}
      <div className="flex gap-6">
        <Link className="underline hover:text-blue-600" to="/dashboard">
          Dashboard
        </Link>

        <Link className="underline hover:text-blue-600" to="/summary">
          Summary
        </Link>

        <Link className="underline hover:text-blue-600" to="/reports">
          Reports
        </Link>
      </div>

      {/* Logout Button */}
      <button
        onClick={handleLogout}
        className="bg-black text-white px-4 py-2 rounded"
      >
        Logout
      </button>
    </nav>
  );
}
