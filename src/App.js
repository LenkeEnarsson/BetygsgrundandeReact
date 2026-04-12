import './App.css';
import './css/colors-fonts.css';
import './css/layout.css';
import Mainpage from './pages/MainPage';
import About from './pages/About';
import Groups from './pages/Groups';
import Profileinfo from './pages/ProfileInfo';
import Form from './pages/Form';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './css/ProfileInfo.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Mainpage />}>
          <Route index element={<About />} />
          <Route path="groups" element={<Groups />} />
          <Route path="profileinfo" element={<Profileinfo />} />
          <Route path="form" element={<Form />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
