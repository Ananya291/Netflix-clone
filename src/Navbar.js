import React from "react"
import "./Navbar.css"
import netfliximg1 from "./netfliximg1.png"

function Navbar(){
    return(
        <div className = "Nav nav_main">
            <div className = "Netflix_logo">
                <img  className = "net_logo" src={netfliximg1} alt = "netflix_image"></img>
            </div>

            <div className = "Btn_left">
                <button className="signin_btn" type = "button">Sign In</button>
            </div>

        </div>
    )
}
export default Navbar