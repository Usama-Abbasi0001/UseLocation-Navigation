import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import NavBar from "./NavBar";

function Shop() {
  // Get the data from the location's state
  const location = useLocation();
  const { name, image, cast } = location.state || {};

  // State for opening the card message
  const [isOpenCard, setOpenCard] = useState(false);

  // Check if data is available (used instead of undefined 'side' variable)
  const dataAvailable = name && image && cast;

  return (
    <>
      <NavBar />
      <div className="p-6">
        <div className="text-black text-center text-[40px]">Usama Abbasi</div>
        {dataAvailable && (
          <div className="w-[400px] max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="flex flex-col items-center pb-10 mt-8">
              <img
                src={image}
                alt={name}
                className="w-[100px] rounded-[50%] h-[100px]"
              />
              <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                {name}
              </h5>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {cast}
              </span>
              <div className="flex mt-4 md:mt-6">
                <button
                  // onClick={() => alert("Add Card clicked")}
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Add Card
                </button>
                <button
                  onClick={() => setOpenCard(!isOpenCard)}
                  className="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                >
                  Message
                </button>
              </div>
            </div>

            {isOpenCard && (
              <div className="text-white text-[30px] p-4">
                <div>Hi Usama</div>
                <div>Khan</div>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
}

export default Shop;
