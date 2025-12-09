import React from "react";
import { FaTasks } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="w-full bg-gray-900 text-white px-6 py-4 flex items-center gap-3 shadow-lg">
      <FaTasks size={28} className="text-blue-400" />
      <h1 className="text-2xl font-semibold">Smart Task Dashboard</h1>
    </nav>
  );
}
