import React from 'react'
import Cards from '../components/Cards';
import mypic from "../components/images/usama.jpg";
import huzaifa from "../components/images/huzaifa.jpg";
import raes from "../components/images/raes.jpg";
import NavBar from '../components/NavBar';
function MainCards() {
  return (
    <div>
        <NavBar/>
      <div className="lg:w-[1170px] md:w-[700px] mt-[8rem] mx-auto w-full flex flex-wrap justify-center gap-3">
        <Cards name="Muhammad Usama" cast="Abbasi" image={mypic} />
        <Cards name="Muhammad Huzaifa" cast="KhanZada" image={huzaifa} />
        <Cards name="Rae`s Hanzala" cast="Kaim Khani" image={raes} />
      </div>
    </div>
  );
}

export default MainCards
