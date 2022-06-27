import React, { createContext, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

import "./styles/App.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

import ScrollToTop from './ScrollToTop';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Error404 from "./components/Error404";
import Home from "./views/Home";
import Profile from './views/about/Profile';
import Visi from './views/about/Visi';
import Tupoksi from './views/about/Tupoksi';
import Pimpinan from './views/about/Pimpinan';
import Layanan from './views/about/Layanan';
import SppDetail from './views/spp/SppDetail';

import ArticleListDetail from './views/articles/ArticleListDetail';
import ArticleDetail from './views/articles/ArticleDetail';

import HomeSpp from './views/spp/Home';

library.add(fab, faArrowUp);

export const ThemeContext = createContext(null);

const App = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((current) => (current === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="app" id={theme}>
        <main className="main" id="top">
          <BrowserRouter>
            <ScrollToTop />
            <Navbar />
            <Routes>
              <Route path="/" excact element={<Home />} />
              <Route path="about/profile" element={<Profile />} />
              <Route path="about/visi" element={<Visi />} />
              <Route path="about/tupoksi" element={<Tupoksi />} />
              <Route path="about/pimpinan" element={<Pimpinan />} />
              <Route path="about/layanan" element={<Layanan />} />
              <Route path="articles" element={<ArticleListDetail />} />
              <Route path="articles/:articleId" element={<ArticleDetail />} />
              <Route path="spp" excact element={<HomeSpp />} />
              <Route path="spp/:pageName" element={<SppDetail />} />
              <Route path="*" element={<Error404 />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </main>
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
