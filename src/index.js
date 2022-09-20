import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import { createTheme, NextUIProvider } from "@nextui-org/react"
import Navigation from './Navbar';
import Cardassets from './cardassets';

import Dbfunc from './files/information/dbfunc';

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
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <NextUIProvider theme={darkTheme}>
        <Navigation />
        <Routes>
          <Route id="home" path="/home" exact element={<App />} />
          <Route path="/extras">
            <Route path=":assets" element={<App/>}/>
          </Route>
          <Route path="/information">
            <Route path=":dbfunctions" element={<Dbfunc/>}/>
          </Route>
          <Route id="home" path="/cards" exact element={<Cardassets />} />

        </Routes>
      </NextUIProvider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
