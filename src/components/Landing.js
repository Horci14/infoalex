import React from "react";
import "../styles/Landing.css";
import Computer from "../imgs/computer-772.png";

const Landing = () =>{
    const scrollDown = () => {
        window.scroll(0, window.outerHeight - 200)
    }
    return(
        <div className="landing">
            <div className="title">
                <h2>problemi con</h2>
                <h1>informatica <h1 className="question">?</h1></h1>
                <div className="ArrowBox" onClick = {scrollDown}>
                    <div className="ArrowDown">
                        <div>&#8595;</div>
                    </div>
                </div>
                
            </div>
            <img className="ComputerPNG" src = {Computer} alt="computer"/>
            
        </div>
    );
}

export default Landing;