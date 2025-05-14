"use client";
import { useState } from "react";
import Navbar from "./navbar/navbar";
import Viewport from "./reactflow/viewport";
import { DrawerDemo } from "./reactflow/drawer";
import "./style.css";

export default function Home() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  return (
    <div className="max-h-screen grid grid-cols-1 md:grid-cols-5">
      {/* Mobile Top Bar with Toggle */}
      <div className="md:hidden flex justify-between items-center p-4 bg-gray-800 text-white">
        <h1 className="text-lg font-semibold">Polymath</h1>
        <button
          onClick={() => setIsNavbarOpen(!isNavbarOpen)}
          className="text-xl focus:outline-none"
        >
          ☰
        </button>
      </div>

      {/* Mobile Navbar */}
      {isNavbarOpen && (
        <div className="md:hidden bg-gray-100 p-4">
          <Navbar />
        </div>
      )}

      {/* Desktop Navbar */}
      <div className="hidden md:block md:col-span-1 bg-gray-100 min-h-screen">
        <Navbar />
      </div>

      {/* Main Content */}
      <div className="min-h-screen col-span-1 md:col-span-4 p-4">
        <Viewport />
        <DrawerDemo />
      </div>
    </div>
  );
}
