import './App.css';
import './css/colors-fonts.css';
import './css/layout.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import AppRouter from './routes/Approuter';

function App() {
  return (
    <BrowserRouter>
      <AppRouter/>
    </BrowserRouter>
  );
}

export default App;
