import React from 'react'
import { NavLink } from 'react-router-dom'

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
                    <NavLink to="/" className="MenuItem">About</NavLink>
                    <NavLink to="/groups" className="MenuItem">Grupper</NavLink>
                    <NavLink to="/form" className="MenuItem">Form</NavLink>
                </div>
            </div>
        </>
    )
}

export default Mainmenu

