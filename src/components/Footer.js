import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {

    return(
        <div id='footer'>
            <div>Creato da ALEXANDRU HORCEAG</div>
            <div><Link to='/infoalex/privacy'>PRIVACY POLICY</Link></div>
            <div><Link to='/infoalex'>HOME</Link></div>
        </div>
    )
}

export default Footer;