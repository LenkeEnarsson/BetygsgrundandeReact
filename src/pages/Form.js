import React, { useState } from 'react'
import '../css/form.css'
import { postGroup } from "../services/APIService.js";

function Form() {
    const [name, setName] = useState('');
    const [errorName, setErrorName] = useState('');
    const [yob, setYoB] = useState(0);
    const [genre, setGenre] = useState(-1);
    const [feedback, setFeedback] = useState('');
    const namePattern = /^(?!.*[ -]{2})[\p{L}][\p{L}0-9 -]{0,31}[\p{L}0-9]$/u;
    const today = new Date().getFullYear();
    const startYear = 1599;
    const minGenreValue = 0;
    const maxGenreValue = 3;

    const onClickRegister = (e) => {
        e.preventDefault();

        const onRegister = async () => {
            try {
                const resp = await RegisterGroup({ name, yob, genre });
                setYoB(0); setName(''); setGenre(-1);
                setFeedback("Registreringen lyckades!");
            }
            catch (err) {
                setFeedback(`Registreringen misslyckades: ${err}`);
            }
        }
        const RegisterGroup = async ({ name, yob, genre }) => {
            const group = { name: name, establishedYear: yob, genre: genre };
            await postGroup(group);
        }

        let isValid = true;
        if (!((typeof (name) === "string" && name.length !== 0) && namePattern.test(name))) isValid = false;
        if (isNaN(yob) || !(yob > startYear && yob < today)) isValid = false;
        if (!(genre >= minGenreValue && genre <= maxGenreValue)) isValid = false;
        if (!isValid) {
            setFeedback("Informationen är inte korrekt, försök igen.\n");
            return;
        }
        onRegister();
    }

    return (
        <>
            <form className="formContainer" id="AddGroup" >
                <fieldset>
                    <div className="formIntroContainer">
                        <div>
                            <h1>Registrera musikgrupp</h1>
                        </div>
                        <b>Notera: en asterisk (*) indikerar obligatoriska fält</b>
                    </div>
                    <fieldset className="formBand Field2nd">
                        <div className="formInputContainer">
                            <label htmlFor="bandName">Musikgruppens namn:*</label>
                            <input onChange={(e) => setName(e.target.value)} type="text" placeholder="ex. Sonata Arctica" required />
                        </div>

                        <div className="formInputContainer">
                            <label htmlFor="bandYoB">År musikgruppen etablerades:*</label>
                            <input onChange={(e) => setYoB(e.target.value)} type="number" min={startYear} max={today} required />
                        </div>
                        <div className="formInputContainer">
                            <label htmlFor="bandGenre">Musikgruppens genre:*</label>
                            <div className="buttonContainer">
                                <label><input type="radio" name="genre" value="0" onChange={e => setGenre(Number(e.target.value))} />Rock</label>
                                <label><input type="radio" name="genre" value="1" onChange={e => setGenre(Number(e.target.value))} />Blues</label>
                                <label><input type="radio" name="genre" value="2" onChange={e => setGenre(Number(e.target.value))} />Jazz</label>
                                <label><input type="radio" name="genre" value="3" onChange={e => setGenre(Number(e.target.value))} />Metal</label>
                            </div>
                        </div>
                    </fieldset>

                </fieldset>
                <div className="ButtonDiv">
                    <button className="Button ButtonText buttonCentered" onClick={onClickRegister}>Registrera</button>
                </div>
                <div className="FeedbackText">{feedback}<p id="Feedback"></p></div>
            </form>
        </>
    )
}

export default Form