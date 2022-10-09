import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import { createTheme, NextUIProvider } from "@nextui-org/react"

import Navigation from './Navbar';
import Cardassets from './files/cardassets/cardassets';
import Home from './files/home';
import Dbfunc from './files/information/dbfunc';
import Assets from './files/extras/assets';
import Pboard from './files/information/potentialboard/pboard';
import Changelog from './changelog';
import Error404 from './404';

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
      <Changelog />
      <Routes>
        <Route id="home" path='/home' exact element={<Home/>} />
        <Route path="/extras">
          <Route path=":assets" element={<Assets />} />
        </Route>
        <Route path="/information">
          <Route path=":database-functions" element={<Dbfunc />} />
          <Route path=":potential-board" element={<Pboard />} />
        </Route>
        <Route id="cards" path="/cards" exact element={<Cardassets />} />
        <Route id="404" path="/404" exact element={<Error404 />} />
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/*" element={<Navigate to="/404" />} />
      </Routes>
    </NextUIProvider>
  );
}

root.render(
  <React.StrictMode>
      <Router basename='/wikinew'>
        <Root/>
      </Router>
  </React.StrictMode>
);

reportWebVitals();
