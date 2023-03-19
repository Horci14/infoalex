import React from "react";
import '../styles/Privacy.css';
import privacy from '../imgs/insurance.png';

const Privacy = () =>{
    return(
        <div id="privacy">
            <div className="header">
                <img src={privacy} width = '20%' />
                <h1>PRIVACY POLICY</h1>
            </div>
            <div className="space40"></div>
            <div className="space40"></div>
            <div className="text">
                <h3>INFORMAZIONI RELATIVE ALLA PRIVACY DEL SITO</h3>
                <p>1. In questa sezione sono contenute le informazioni relative alle modalità di gestione di www.infoalex.it in riferimento alle trattamento dei dati degli utenti di www.infoalex.it.</p>
                <p>2. La presente informativa ha valore anche ai fini dell’art. 13 del D.lgs. n. 196/2003, Codice in materia di protezione dei dati personali, e ai fini dell’art. 13 del Regolamento UE n. 2016/679, relativo alla protezione delle persone fisiche con riguardo al trattamento dei dati personali nonché alla libera circolazione di tali dati, per i soggetti che interagiscono con ww.infoalex.it ed è raggiungibile all’indirizzo corrispondente alla pagina iniziale: www.infoalex.it</p>

            </div>
        </div>
    )
}

export default Privacy;