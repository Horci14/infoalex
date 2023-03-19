import React from "react";
import Nav from './Nav.js';
import Who from './Who.js';
import Banner from './Banner.js';
import Contact from './Contact.js';
import Landing from'./Landing.js';

const Home = () => {
    return(
        <div className="Home">
            <Nav/>
            <Landing/>
            <Who/>
            <Banner/>
            <Contact/>
        </div>
    )
}

export default Home;
