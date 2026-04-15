import React from 'react'
import '../css/form.css'
import { postGroup } from "../services/APIService.js";

const feedBack = document.querySelector('#Feedback');

const formGroup = document.querySelector("#AddGroup");

/*
onClickRegister("submit", async(e) => {e.preventDefault(); 
    try{
    await RegisterGroup(); 
    feedBack.innerHTML = "Registreringen lyckades!";
    formGroup.reset();
    }
    catch (err){
        feedBack.innerHTML = `Registreringen misslyckades: ${err}`
    }
});
*/
async function RegisterGroup() {

    const nameInput = document.querySelector("#bandName").value;
    const namePattern = /[a-zA-Z][a-zA-Z0-9-]{1,32}/;

    const yob = Number(document.querySelector("#bandYoB").value);

    const radioBtn = document.querySelector('input[name="genre"]:checked');
    const genreInput = radioBtn.value;

    let isValid = true;
    if (!(typeof (nameInput) === "string" && nameInput.length !== 0) && nameInput.match(namePattern)) isValid = false;
    if (isNaN(yob) || !(yob > 1899 && yob < 2027)) isValid = false;
    if (!(genreInput > -1 && genreInput < 4)) isValid = false;
    if (!isValid) {
        alert("Informationen är inte korrekt, försök igen.\n");
        return;
    }
    const group = { name: nameInput, establishedYear: yob, genre: genreInput };

    await postGroup(group);
}


function Form() {


    const onClickRegister = e => {
        console.log('Registry button clicked, notImplementedYet')
    };
    /*
    {() => async(e) => {e.preventDefault(); 
    try{
    await RegisterGroup(); 
    feedBack.innerHTML = "Registreringen lyckades!";
    formGroup.reset();
    }
    catch (err){
        feedBack.innerHTML = `Registreringen misslyckades: ${err}`
    }
});}
*/

    return (
        <>
            <form className="formContainer" id="AddGroup">
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
                            <input id="bandName" type="text" placeholder="ex. Sonata Arctica" required />
                        </div>

                        <div className="formInputContainer">
                            <label htmlFor="bandYoB">År musikgruppen etablerades:*</label>
                            <input id="bandYoB" name="bandYoB" type="number" min="1900" max="2026" required />
                        </div>
                        <div className="formInputContainer">
                            <label htmlFor="bandGenre">Musikgruppens genre:*</label>
                            <div className="buttonContainer">
                                <label><input type="radio" name="genre" value="0" />Rock</label>
                                <label><input type="radio" name="genre" value="1" />Blues</label>
                                <label><input type="radio" name="genre" value="2" />Jazz</label>
                                <label><input type="radio" name="genre" value="3" />Metal</label>
                            </div>
                        </div>
                    </fieldset>

                    <div className="ButtonDiv">
                        <button className="Button ButtonText buttonCentered" onClick={onClickRegister}>Registrera</button>
                    </div>
                    <div className="FeedbackText"><p id="Feedback"></p></div>
                </fieldset>
            </form>
        </>
    )
}

export default Form