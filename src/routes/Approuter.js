import React from 'react'
import { Routes, Route } from 'react-router'

import Mainpage from '../pages/MainPage';
import About from '../pages/About';
import Groups from '../pages/Groups';
import Profileinfo from '../pages/ProfileInfo';
import Form from '../pages/Form';

import Error from '../pages/Error';


function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<Mainpage />}>
                <Route index element={<About />} />
                <Route path="groups" element={<Groups />} />
                <Route path="profileinfo" element={<Profileinfo />} />
                <Route path="form" element={<Form />} />
                <Route path="*" element={<Error details= "Page not found"/>}/>
            </Route>
        </Routes>

    );
}

export default AppRouter