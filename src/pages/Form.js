import React from 'react'
import '../css/form.css'

function Form() {
    return (
        <>
            <form className="formContainer" id="AddGroup">
                <div className="formIntroContainer">
                    <div>
                        <h1>Registrera musikgrupp</h1>
                    </div>
                    <b>Notera: en asterisk (*) indikerar obligatoriska fält</b>
                </div>
                <fieldset className="formBand">
                    <div className="formInputContainer">
                        <label for="bandName">Musikgruppens namn:*</label>
                        <input id="bandName" type="text" placeholder="ex. Sonata Arctica" required />
                    </div>

                    <div className="formInputContainer">
                        <label for="bandYoB">År musikgruppen etablerades:*</label>
                        <input id="bandYoB" name="bandYoB" type="number" min="1900" max="2026" required />
                    </div>
                    <div className="formInputContainer">
                        <label for="bandGenre">Musikgruppens genre:*</label>
                        <div className="buttonContainer">
                            <label><input type="radio" name="genre" value="0" />Rock</label>
                            <label><input type="radio" name="genre" value="1" />Blues</label>
                            <label><input type="radio" name="genre" value="2" />Jazz</label>
                            <label><input type="radio" name="genre" value="3" />Metal</label>
                        </div>
                    </div>
                </fieldset>

                <div className="ButtonDiv">
                    <button type="submit" className="Button ButtonText buttonCentered" id="submitButton">Registrera</button>
                </div>
                <div className="FeedbackText"><p id="Feedback"></p></div>
            </form>
        </>
    )
}

export default Form