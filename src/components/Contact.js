import React, {useRef}from 'react';
import '../styles/Contact.css';
import emailjs from '@emailjs/browser';
import click from '../imgs/click.png';
import {Link} from 'react-router-dom';

const Contact = () =>{

    const form = useRef();

    var checked = false;

    const handleChange = (e) =>{
        checked = !checked
    }

    const sendEmail = (e) => {
        e.preventDefault();
    
        if (checked){
            emailjs.sendForm('service_bt8zg0l', 'template_ti0cgr4', form.current, 'eKL_BI9MqX7m6hIw4')
                .then((result) => {
                    alert('EMAIL INVIATA');
                }, (error) => {
                    alert(error.text);
                });
        }else{
            alert('Accettare la privacy policy');
        }
    
    }

    return(
        <div id="contact">
            <form ref = {form}onSubmit={sendEmail}>
                <div className="formTitle">CONTATTAMI</div>
                <input type="text" placeholder='Nome e (Cognome)' id="name" name='name'/>
                <input type="text" placeholder='Classe ("fuori" se da fuori)' id="class" name='class'/>
                <input type='email' placeholder='Email' id="email" name='email'/>
                <input type='number' placeholder='Cellulare' id="cell" name='cell'/>
                <textarea placeholder='Richiesta (argomento, giorno, ora...)' id="question" name='message'/>
                <div className='submit'>
                    <div className='check'>
                        <input type="checkbox" id="check" onChange={handleChange}/>
                        <p style={{'font-size': '14px'}}>Ho letto e accettato la <Link to="/privacy">PRIVACY POLICY</Link></p> 
                    </div>
                    
                    <input type="submit" value="INVIA" className='submitButton'/>
                </div>
            </form>
            <div className="whatsapp">
                <h2>Oppure scrivimi su whatsapp al <br /><br /></h2>
                <div>
                    <a href="tel:+393319778476">331 977 8476</a>
                    <img src={click} alt="" width='10%' />
                </div>
                
            </div>
        </div>    
    )
}

export default Contact;