import React from 'react'
import '../css/profileinfo.css'
import '../css/about.css'

function About() {
    return (
        <>
            <div className="AboutInfo ProfileText">
                <p>
                    <strong>Tai Lenke Enarsson, Teknikhögskolan, Webbutveckling frontend React, Individuell
                        Inlämnigsuppgift</strong>
                </p>
                <fieldset>
                    <legend><strong>React</strong></legend>
                        Obs: Sök-filtret i API är buggigt utifrån uppgiftens krav. (Sök exempelvis på "Rock")
                </fieldset>
                <fieldset>
                    <legend><strong>JavaScript</strong></legend>
                    <fieldset className="Field2nd">
                        <legend className="Field2nd">G-nivå</legend>
                        <p>
                            En Webbapplikation i HTML-CSS-Javascript ska ha nedan innehåll
                            - <s>En meny för att välja nedan två sidor</s>
                            - <s>En hemma sida som presenterar namnet på applikationen och ditt namn som
                                utvecklare.</s>
                            - <s>En list sida som listar musikgrupperna i wepapi;n. Listan ska vara indelad i
                                listsidor
                                (pagination), där varje listsida ska visa 10 rader. Varje rad i listan ska
                                presentera en
                                musikgrupp med dess namn, genre, etableringsår, och antal släppta album samt en
                                knapp som visar detaljer.</s>
                            - <s>Man ska kunna klicka sig fram och tillbaka i listsidorna.</s>
                            - <s>En sida som presenterar den valda musikgruppen med namn, genre, etableringsår,
                                lista
                                på artister i gruppen och en lista på album som gruppen släppt.</s>
                        </p>
                    </fieldset>
                    <fieldset className="Field2nd">
                        <legend className="Field2nd">VG-nivå</legend>
                        <p>
                            <s>Inlämningsuppgift enligt G nivå.</s>
                            <s>
                                - Sidan som listar musikgrupper även innehålla ett sökord med en sökknapp. Om man t
                                ex. skriver in ” Led” så ska list sidan med dess listsidor enbart presentera
                                musikgrupper vars namn innehåller order ”Led”. Totala antalet musikgrupper som
                                matchar sökvillkoret
                                ska också visas på sidan. Genom att klicka sig igenom listsidorna så ska man kunna
                                se
                                alla musikgrupper som matchar resultatet.
                                - Varje rad i listan ska innehålla en knapp som om man klickar på öppnar en detalj
                                sida.
                                - Detalj sidan ska presentera musikgruppen med dess namn, genre, etableringsår, lista
                                på
                                artister i gruppen och en lista på album som gruppen släppt.
                                - En sida med formulär lägger till en ny musikgrupp genom att ange dess namn, genre,
                                etableringsår. Sidan ska ha inputvalidering.
                            </s>
                        </p>
                    </fieldset>
                </fieldset>

                <fieldset>
                    <legend><strong>Html/Css</strong></legend>
                    <fieldset className="Field2nd">
                        <legend className="Field2nd">G-nivå</legend>
                        <p><s>
                            - En meny för att välja nedan två sidor
                            - En hemma sida som presenterar namnet på applikationen och ditt namn som
                            utvecklare.
                            - En sida som listar musikgrupper med bild, namn, genre, etableringsår, och antal
                            släppta
                            album samt en knapp som visar detaljer.
                            Sidan ska lista 10 rader ska vara förberedd för bläddring, genom knappar
                            - En sida som presentera musikgruppen med bild, namn, genre, etableringsår, lista på
                            artister i gruppen och en lista på album som gruppen släppt.
                        </s></p>
                    </fieldset>
                    <fieldset className="Field2nd">
                        <legend className="Field2nd">VG-nivå</legend>
                        <p><s>
                            - Projektet enligt G nivå.
                            - Sidan som listar musikgrupper även innehålla ett sökord med en sökknapp. Man ska t
                            ex
                            kunna skriva in ett sökord ”Led”. OBS, i detta projektet är inte sökfunktionen
                            implementerad, det sker i nästa projekt.
                            - En sida med formulär som man kan lägga till en ny musikgrupp genom att ange dess
                            namn, genre, etableringsår.
                        </s></p>
                    </fieldset>
                </fieldset>
            </div>
        </>
    )
}

export default About