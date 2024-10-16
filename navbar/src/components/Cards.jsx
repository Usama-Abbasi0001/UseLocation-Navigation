import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Cards({ image, name, cast }) {
  const [isOpenCard, setOpenCard] = useState(false);
  const navigate = useNavigate();

  // Navigate to the shopping page with the state passed
  function gotoShopping() {
    navigate("/shoping", {
      state: { image, name, cast },
    });
  }

  return (
    <div className="p-4">
      <div className="w-[400px] max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="flex flex-col items-center pb-10 mt-8">
          <img
            src={image}
            alt={name}
            className="w-[100px] rounded-full h-[100px]"
          />
          <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
            {name}
          </h5>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {cast}
          </span>
          <div className="flex mt-4">
            <button
              onClick={gotoShopping}
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
    </div>
  );
}

export default Cards;
