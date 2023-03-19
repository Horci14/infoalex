import React from 'react';
import '../styles/Who.css';
import profile from '../imgs/boy.png';
import {Link} from 'react-router-dom';

const Who = () => {
    return(
        <div className='Who'>
            <div className='profile'>
                <img className='imgProfile' src={profile}/>
            </div>
            <div className='profileSide'>
                <div className='copy'>
                    <p>
                        Ciao sono <font className='orange'>&nbsp;Alex&nbsp;</font> della <font className='orange'> &nbsp;5BSA.</font> <br/>
                    </p>
                    <p>
                        Hai bisogno di rivedere alcuni aspetti di <font color = 'orange'>INFORMATICA</font> o <span className='orange'> &nbsp;MATEMATICA</span>?
                    </p>
                </div>
                <div className='buttonBox'>
                    <a href = "#contact" className='button'>contattami</a>
                </div>
                
            </div>
            
        </div>
    );
}

export default Who;