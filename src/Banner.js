import React from "react"
import "./Banner.css"
import net from "./net.jpg"
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

function Banner() {
    return (
        <div className="Banner_main">
            <div>
                <img className="netflix_img" src={net}></img>
            </div>
            <div className="Banner_head">
                <h1 className="heading">Unlimited movies, TV shows and more.</h1>
                <h3 className="subheading">Watch anywhere. Cancel anytime.</h3>

                <h4 className="subheading_g">Ready to watch? Enter your email to create or restart your membership.</h4>
                
                <div className = "motu_laponda">
                <input className="email" type="text" placeholder = "Email address"  id = "email"></input>
                <div className = "motu_padoda">
                 <div className = "laponda"><button className="btn" type="button">Get Started</button></div>
                 <div className = "lapondi"><ArrowForwardIosIcon style={{width:'20px' , height: "20px"}}/></div>
                
                </div>
                </div>
                
            </div>

        </div>
    )
}
export default Banner