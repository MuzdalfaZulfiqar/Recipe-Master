import React  from "react";
import NavBar from "./NavBar";
import headerImage from '../Images/plate-with-grilled-chicken-skewers-with-copy-space.jpg'

export default function Header(){
    return (
        <div className="header_Class">
        <img
          src={headerImage}
          alt=""
        />
        <NavBar/>
        <div className="catchyLines">
          <p className="catchyLinesOne">Life's too short for boring meals</p>
          <p className="catchyLinesTwo">Spice it up!</p>
          <p className="catchyLinesThree">
            We offer a vibrant collection of recipes to ignite your taste buds
            and elevate your everyday cooking.
          </p>
          <div className="explore">
            <button className="exploreButton">Explore Our Recipes</button>
          </div>
        </div>
      </div>
    )
}