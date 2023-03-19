import React from 'react';
import '../styles/Banner.css';

const Banner = () => {
    return (
        <div className='Banner'>
            <div className="bannerT">
                <div className="top">
                    <p className="left">
                        a <font color="orange">&nbsp;CASTELFRANCO&nbsp;</font>
                    </p>
                    <p className="right">
                        Venerdì dalle <font color="orange">&nbsp;14&nbsp;</font> alle <font color="orange">&nbsp;16&nbsp;</font>
                    </p>
                </div>
                <div className="bottom">
                    <p className="left">
                        anche <font color="orange">&nbsp;ONLINE&nbsp;</font>
                    </p>
                    <p className="right">
                        Mercoledì dalle <font color="orange">&nbsp;15&nbsp;</font> alle <font color="orange">&nbsp;17&nbsp;</font>
                    </p>
                </div>
            </div>
            <p style={{'margin-top': '20px', 'font-size': '18px'}}>orari e giorni sono <font color="orange">&nbsp;flessibili&nbsp;</font></p>
            <div className='space40'></div>
            <hr />
            <div className='space40'></div>
            <div className='prezzo'>
                <h2>A quanto?</h2>
                <ul className='prezzi'>
                    <li><h1>10€/ora</h1> <p>Lezione <font color="orange">&nbsp;singola&nbsp;</font></p></li>
                    <li><h1>15€/ora</h1> <p>Lezione <font color="orange">&nbsp;in coppia&nbsp;</font></p></li>
                    <li><h1>20€/ora</h1> <p>Lezione <font color="orange">&nbsp;in tre&nbsp;</font></p></li>
                </ul>
            </div>
        </div>
    );
}

export default Banner;