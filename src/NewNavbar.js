import React, { useState , useEffect } from 'react'
import "./NewNavbar.css"
import netfliximggg from "./netfliximg1.png"
import avtar from "./avtar.jpeg"


function NewNavbar(){
    const[show , handleShow] =  useState(false);

    const transitionNavbar = () => {
        if(window.scrollY > 100){
            handleShow(true);
        }else{
            handleShow(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", transitionNavbar);
        return () => window.removeEventListener("scroll", transitionNavbar);
    }, []);
    
    return(
        <div className = {`NewNavbar ${show && 'nav_black'}`}>
            <div className = "NewNav_content">

            <img  
            className = "netflix_logo" 
            src={netfliximggg} alt = "netflix_image"
            />
           
            <img
            className = "avtar_logo"
            src = {avtar} alt ="avtar-logo"
            />

            </div>
        </div>
    );
}
export default NewNavbar;