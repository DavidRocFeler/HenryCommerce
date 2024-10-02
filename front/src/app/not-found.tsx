import React from "react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#F6F6F6] text-gray-800">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="mb-8">Oops! The page you are looking for does not available.</p>
      <Link href="/"
        className="px-4 py-2 bg-[#FFEE58] font-bold text-black rounded hover:bg-[#ffe600d3] transition"
      >
        Go back to Home
      </Link>
    </div>
  );
}
