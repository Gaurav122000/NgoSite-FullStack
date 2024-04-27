import React from 'react'
import Button from './Button'
import "./Header.css"
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="header-2">
          <div className="header-2-1">
           <Link to={"/"}><img src="./images/logo.png" alt="logo" height={55} /></Link>
            <div className="header-2-2">
              <Button props={"Home"} fnt={"#686968"} link={"/"} />
              <Button props={"Services"} fnt={"#686968"} link={"/Services"} />
              <Button props={"Gallery"} fnt={"#686968"} link={"/Gallery"} />
              <Button props={"Blog"} fnt={"#686968"} link={"/Blog"} />
              <Button props={"About Us"} fnt={"#686968"} link={"/About"} />
              </div>
              <div className="header-2-3">
              <Link to={"/DonationForm"}><button id='donate'>Donate</button></Link>
              <Link to={"/VolunteerForm"}><button id='donate'>Volunteer</button></Link>
              </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header