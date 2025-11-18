import React from 'react'
import "../style/rocks.css";
import rock1 from "../assets/images/rocks/rock1.png";
import rock2 from "../assets/images/rocks/rock2.png";
import rock3 from "../assets/images/rocks/rock3.png";
import rock4 from "../assets/images/rocks/rock4.png";
import rock5 from "../assets/images/rocks/rock5.png";
import vi from "../assets/images/rocks/vi.png";

function Rocks() {
  return (
    <div className='all-rocks'>
      <div className='container-rock1'>
        <img src={rock1} className='rock1' alt="rock1" />
        <img src={vi} className='vi1' alt="vi" />
      </div>
      <div className='container-rock2'>
      <img src={rock2} className='rock2' alt="rock2" />
      <img src={vi} className='vi2' alt="vi" />
        </div>
        <div className='container-rock3'>
        <img src={rock3} className='rock3' alt="rock3" />
        <img src={vi} className='vi3' alt="vi" />
        </div>
        <div className='container-rock4'>
        <img src={rock4} className='rock4' alt="rock4" />
        <img src={vi} className='vi4' alt="vi" />
        </div>
        <div className='container-rock5'>
        <img src={rock5} className='rock5' alt="rock5" />
        <img src={vi} className='vi5' alt="vi" />
        </div>
    </div>
  )
}

export default Rocks
