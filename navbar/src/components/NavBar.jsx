import React, { useState } from 'react'
import { Bars, Shopping } from './icons/Icon';
import { useNavigate } from 'react-router-dom';

function NavBar() {
  const navigate = useNavigate();
  function gotohome(){
    navigate('/home')
  }

  function gotonav(){
    navigate('/')
  }
    function gotoshoping() {
      navigate("/shoping");
    }
    const [IsMenuOpen, setIsMenuOpen]= useState(false)
  return (
    <div>
      <div className="lg:w-[1200px] md:w-[700px]   w-full mt-4 md:mx-auto px-4 flex justify-between items-center">
        <div
          onClick={gotonav}
          className="text-[30px] font-bold text-red-500 cursor-pointer"
        >
          logo
        </div>
        <div>
          <ul className="lg:flex space-x-3 text-[18px] font-bold hidden">
            <li onClick={gotohome} className="flex cursor-pointer">
              Home
            </li>
            <li>About</li>
            <li>Prodect</li>
            <li>Gallary</li>
            <li>About Us</li>
            <li onClick={gotoshoping} className="flex cursor-pointer">
              <Shopping />
            </li>
          </ul>
        </div>
        <div className="lg:flex space-x-2 hidden ">
          <input
            className="border-2 rounded-[6px] ps-2 border-black border-double"
            type="search"
            name=""
            id=""
            placeholder="Search"
          />
          <button className="p-2 bg-green-300 rounded-[6px] text-black">
            Contact
          </button>
        </div>
        <div
          className="lg:hidden flex"
          onClick={() => setIsMenuOpen(!IsMenuOpen)}
        >
          <Bars />
        </div>
      </div>

      {IsMenuOpen && (
        <div>
          <ul className="lg:hidden flex flex-col space-x-3 text-[18px] font-bold ps-7 ">
            <li className="ps-6">Home</li>
            <li>About</li>
            <li>Prodect</li>
            <li>Gallary</li>
            <li>About Us</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default NavBar;
