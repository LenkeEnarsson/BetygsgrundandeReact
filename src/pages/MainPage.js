import React from 'react';

import Mainmenu  from '../components/MainMenu';
import Footer  from '../components/Footer';
import { Outlet } from 'react-router-dom';


function Mainpage() {

    return (
        <>
            <div className="GridLayout">
                <Mainmenu/>
                <div className="GridContent">
                    <div className="Scrollview">
                        <Outlet/>
                    </div>
                </div>
                <Footer/>
            </div>
        </>
    )
}

export default Mainpage