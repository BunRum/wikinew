import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import { createTheme, NextUIProvider } from "@nextui-org/react"

import Navigation from './Navbar';
import Cardassets from './files/cardassets/cardassets';
import Home from './files/home';
import Dbfunc from './files/information/dbfunc';
import Assets from './files/extras/assets';
import Pboard from './files/information/potentialboard/pboard';

const darkTheme = createTheme({
  type: "dark", // it could be "light" or "dark"
  theme: {
    colors: {
      // link: '#58a6ff',
    },
    space: {},
    fonts: {}
  }
})
// const { type, isDark } = useTheme();
const root = ReactDOM.createRoot(document.getElementById('root'));
document.body.style.zoom = '110%';

function Root() {
  return (
    <NextUIProvider theme={darkTheme}>
      <Navigation />
      <Routes>
        <Route id="home" path='/home' exact element={<Home/>} />
        <Route path="/extras">
          <Route path=":assets" element={<Assets />} />
        </Route>
        <Route path="/information">
          <Route path=":dbfunctions" element={<Dbfunc />} />
          <Route path=":potential-board" element={<Pboard />} />
        </Route>
        <Route id="home" path="/cards" exact element={<Cardassets />} />
        <Route path="/" element={<Navigate to="/home" />} />
      </Routes>
    </NextUIProvider>
  );
}

root.render(
  <React.StrictMode>
      <HashRouter>
        <Root/>
      </HashRouter>
  </React.StrictMode>
);

reportWebVitals();
