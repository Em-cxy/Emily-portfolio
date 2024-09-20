import React from "react";

const Certificate = () => {
  return (
    <div className="flex flex-col space-y-4 w-full">
      <div className="flex justify-between items-center bg-white p-5 rounded-xl shadow-md">
        <div className="flex items-center space-x-4">
          <div className="bg-purple-500 text-white p-2 rounded-full">A</div>
          <div className="flex flex-col">
            <span className="font-bold text-lg">Ruben Freitas</span>
            <span>Social Media Specialist</span>
            <span className="text-gray-500">Spring 2023</span>
          </div>
        </div>
        <div className="flex flex-col items-end">
          <a href="#" className="text-blue-500">
            https://developers.google.com/profile/badges/profile/created-profile
          </a>
          <div className="flex justify-between items-center space-x-3 mt-2">
            <button className="bg-blue-500 text-white px-3 py-1 rounded">
              Download
            </button>
            <button className="bg-gray-200 text-gray-700 px-3 py-1 rounded">
              Copy Link
            </button>
            <button className="bg-gray-200 text-gray-700 px-3 py-1 rounded">
              Share
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificate;
