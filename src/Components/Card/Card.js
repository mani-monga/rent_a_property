import React from 'react';
import './Card.css';

function Card({ Name, Cost, Address, Beds, Bathroom, Area, img }) {
  return (

    <div className='CardContainer'>
      <div className="imgcontainer">
        <img src={img ? img : "https://cdn.dribbble.com/users/1554526/screenshots/3399669/no_results_found.png"} alt="" />
      </div>

      <span className='pop'>Popular</span>
      <div className="content">
        <span className="cost">${Cost} <p>/month</p></span>
        <h3 className="name">{Name}</h3>
        <p className='Address' >{Address}</p>


        <div className="brief">
          <div><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M304,320a16,16,0,1,0,16,16A16,16,0,0,0,304,320Zm32-96a16,16,0,1,0,16,16A16,16,0,0,0,336,224Zm32,64a16,16,0,1,0-16-16A16,16,0,0,0,368,288Zm-32,32a16,16,0,1,0-16-16A16,16,0,0,0,336,320Zm-32-64a16,16,0,1,0,16,16A16,16,0,0,0,304,256Zm128-32a16,16,0,1,0-16-16A16,16,0,0,0,432,224Zm-48,16a16,16,0,1,0,16-16A16,16,0,0,0,384,240Zm-16-48a16,16,0,1,0,16,16A16,16,0,0,0,368,192Zm96,32a16,16,0,1,0,16,16A16,16,0,0,0,464,224Zm32-32a16,16,0,1,0,16,16A16,16,0,0,0,496,192Zm-64,64a16,16,0,1,0,16,16A16,16,0,0,0,432,256Zm-32,32a16,16,0,1,0,16,16A16,16,0,0,0,400,288Zm-64,64a16,16,0,1,0,16,16A16,16,0,0,0,336,352Zm-32,32a16,16,0,1,0,16,16A16,16,0,0,0,304,384Zm64-64a16,16,0,1,0,16,16A16,16,0,0,0,368,320Zm21.65-218.35-11.3-11.31a16,16,0,0,0-22.63,0L350.05,96A111.19,111.19,0,0,0,272,64c-19.24,0-37.08,5.3-52.9,13.85l-10-10A121.72,121.72,0,0,0,123.44,32C55.49,31.5,0,92.91,0,160.85V464a16,16,0,0,0,16,16H48a16,16,0,0,0,16-16V158.4c0-30.15,21-58.2,51-61.93a58.38,58.38,0,0,1,48.93,16.67l10,10C165.3,138.92,160,156.76,160,176a111.23,111.23,0,0,0,32,78.05l-5.66,5.67a16,16,0,0,0,0,22.62l11.3,11.31a16,16,0,0,0,22.63,0L389.65,124.28A16,16,0,0,0,389.65,101.65Z"></path></svg>
            <p>{Bathroom} Bathroom</p></div>

          <div><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M13.771 9.123L12.372 7.725 8.503 11.589 8.503 12.987 9.901 12.987z"></path><path transform="rotate(45.001 14.264 7.232)" d="M13.275 6.478H15.253V7.987H13.275z"></path><path d="M20,2H4C2.897,2,2,2.897,2,4v18l5.333-4H20c1.103,0,2-0.897,2-2V4C22,2.897,21.103,2,20,2z M20,16H6.667L4,18V4h16V16z"></path></svg>
            <p>{Beds} Bedroom</p></div>

          <div><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M3,5v14c0,1.103,0.897,2,2,2h14c1.103,0,2-0.897,2-2V5c0-1.103-0.897-2-2-2H5C3.897,3,3,3.897,3,5z M19.002,19H5V5h14 L19.002,19z"></path><path d="M15 12L17 12 17 7 12 7 12 9 15 9zM12 15L9 15 9 12 7 12 7 17 12 17z"></path></svg>
            <p>{Area} &#13217;</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Card