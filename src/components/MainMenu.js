import React from 'react'
import { Link } from 'react-router-dom'

function Mainmenu() {
    return (
        <>
            <div className="GridHeader">
                <p className="felipa-regular HeaderTitle">
                    Musikgrupper
                </p>
            </div>
            <div className="GridMenu">
                <div className="MenuWrap">
                    <Link to="../" className="MenuItem">Om</Link>
                    <Link to="../groups" className="MenuItem">Grupper</Link>
                    <Link to="../form" className="MenuItem">Formulär</Link>
                </div>
            </div>
        </>
    )
}

export default Mainmenu

