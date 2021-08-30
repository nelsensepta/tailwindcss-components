import React from "react";

export default function Responsive() {
  return (
    <div className="flex justify-center items-center w-1/2 h-1/2 bg-blue-300 py-10 px-5">
      <div className="grid grid-cols-4 gap-6">
        <div className="bg-gray-400 w-10 h-10"></div>
        <div className="bg-gray-500 w-10 h-10"></div>
        <div className="bg-gray-600 w-10 h-10"></div>
        <div className="bg-gray-700 w-10 h-10"></div>
        <div className="bg-gray-800 w-10 h-10"></div>
        <div className="bg-gray-900 w-10 h-10"></div>
      </div>
    </div>
  );
}
