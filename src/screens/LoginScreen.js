import React, {useState} from 'react';
import "./LoginScreen.css";
import netflixlogo from "../netfliximg1.png";
import SignupScreen from './SignupScreen';

function LoginScreen() {
    const [signIn, setSignIn] = useState(false);

    return (
        <div className="LoginScreen">
            <div className="loginScreen__background">
                <img
                    className="LoginScreen_logo"
                    src={netflixlogo} 
                    alt=" "
                />
                <button onClick={() => setSignIn(true)}
                    className="LoginScreen_button">Sign In</button>
                <div className="LoginScreen_gradient" />
            </div>
            <div className="LoginScreen_body">
                {signIn ? (
                    <SignupScreen/>
                ):(
                    <>
                    <h1>Unlimited movies, TV <br></br>
                    shows and more.</h1>
                    <h2>Watch anywhere. Cancel anytime.</h2>
                    <h3>
                        Ready to watch? Enter your email to create or
                        restart your membership.
                    </h3>

                    <div className="LoginScreen_input">
                        <form>
                            <input type="email" placeholder="Email 
                            Address"/>
                            <button className="LoginScreen_getStarted">Get Started</button>
                        </form>

                    </div>
                </>
                )}
            </div>
        </div>
    );
}

export default LoginScreen;
