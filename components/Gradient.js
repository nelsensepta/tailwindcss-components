import React from "react";

export default function Gradient() {
  return (
    <div className="bg-gray-200 antialiased min-h-screen items-center justify-center flex py-10">
      <div className="w-full lg:w-3/4 space-y-2">
        <div className="bg-white p-8  shadow-lg rounded-lg space-x-2 flex justify-between items-center">
          {/* Bottom */}
          <div className="bg-gradient-to-b from-blue-500 to-red-500 w-56 h-56"></div>

          {/* Bottom Left*/}
          <div className="bg-gradient-to-bl from-blue-500 to-red-500 w-56 h-56"></div>

          {/* Bottom Rigth */}
          <div className="bg-gradient-to-br from-blue-500 to-red-500 w-56 h-56"></div>
        </div>

        <div className="bg-white p-8  shadow-lg rounded-lg space-x-2 flex justify-between items-center">
          {/* Top */}
          <div className="bg-gradient-to-t from-blue-500 to-red-500 w-56 h-56"></div>

          {/* Top Left*/}
          <div className="bg-gradient-to-tl from-blue-500 to-red-500 w-56 h-56"></div>

          {/* Top Rigth */}
          <div className="bg-gradient-to-tr from-blue-500 to-red-500 w-56 h-56"></div>
        </div>

        <div className="bg-white p-8  shadow-lg rounded-lg space-x-2 flex justify-around items-center">
          {/* Left */}
          <div className="bg-gradient-to-l from-blue-500 to-red-500 w-56 h-56"></div>

          {/* Right */}
          <div className="bg-gradient-to-r from-blue-500 to-red-500 w-56 h-56"></div>
        </div>

        <div className="bg-white p-8  shadow-lg rounded-lg space-x-2 flex justify-between items-center">
          {/* Via Or Middle Color */}
          <div className="bg-gradient-to-t from-blue-500 via-green-500 to-red-500 w-56 h-56"></div>

          {/* Top Left*/}
          <div className="bg-gradient-to-l from-blue-500 via-green-500 to-red-500 w-56 h-56"></div>

          {/* Top Rigth */}
          <div className="bg-gradient-to-r from-blue-500 via-green-500 to-red-500 w-56 h-56"></div>
        </div>

        <div className="bg-white p-8  shadow-lg rounded-lg space-x-2 flex justify-center items-center">
          <div className="bg-gradient-to-br from-blue-500 via-red-500 to-light-blue-500 inline text-8xl text-transparent bg-clip-text font-black">
            Kucir
          </div>
        </div>
      </div>
    </div>
  );
}
