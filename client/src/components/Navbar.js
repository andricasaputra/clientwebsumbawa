import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../App";

const Navbar = () => {

  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <>
      <div className="preloader">
        <div className="preloader-inner">
          <div className="preloader-icon">
            <span></span>
            <span></span>
          </div>
        </div>
      </div>

      <nav
        id="navbar-top"
        className="navbar navbar-expand-lg navbar-light fixed-top py-3 navbar-area"
      >
        <div className="container">
          <a
            className="navbar-brand d-flex align-items-center fw-bold fs-2"
            href="index.html"
          >
            <div className="text-warning">SKP &nbsp;</div>
            <div className="text-1000">Sumbawa Besar</div>
          </a>
          <button
            className="navbar-toggler collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse border-top border-lg-0 mt-4 mt-lg-0"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ms-auto pt-2 pt-lg-0">
              <li className="nav-item" data-anchor="data-anchor">
                <Link
                  className="nav-link fw-medium active"
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>

              <li className="nav-item dropdown" >
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Tentang Kami
                  </a>
                  <ul  className="dropdown-menu animate slideIn" aria-labelledby="navbarDropdown">
                    <li><Link className="dropdown-item" to="about/profile">Profil</Link></li>
                    <li><Link className="dropdown-item" to="about/visi">Visi & Misi</Link></li>
                    <li><Link className="dropdown-item" to="about/tupoksi">Tugas Pokok & Fungsi</Link></li>
                    <li><Link className="dropdown-item" to="about/pimpinan">Profil Pimpinan</Link></li>
                    <li><Link className="dropdown-item" to="about/layanan">Wilayah Layanan</Link></li>
                  </ul>
                </li>

                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Layanan Karantina
                  </a>
                  <ul className="dropdown-menu animate slideIn" aria-labelledby="navbarDropdown">
                    <li><a className="dropdown-item" href="#">Karantina Hewan</a></li>
                    <li><a className="dropdown-item" href="#">Karantina Tumbuhan</a></li>
                    <li><a className="dropdown-item" href="#">Alur Layanan</a></li>
                    <li><a className="dropdown-item" href="#">Regulaso Karantina</a></li>
                    <li><a className="dropdown-item" href="#faq">FAQ</a></li>
                  </ul>
                </li>

                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Informasi Publik
                  </a>
                  <ul className="dropdown-menu animate slideIn" aria-labelledby="navbarDropdown">
                    <li><a className="dropdown-item" href="#">PPID</a></li>
                    <li><Link className="dropdown-item" to="spp">Standar Pelayanan Publik</Link></li>
                    <li><a className="dropdown-item" href="#">Laporan</a></li>
                    <li><a className="dropdown-item" href="#">Kinerja</a></li>
                    <li><a className="dropdown-item" href="#">Keuangan</a></li>
                  </ul>
                </li>
            </ul>
            <form className="ps-lg-5">
              <button
                className="btn btn-lg btn-primary rounded-pill"
                type="submit"
              >
               <i className="fa-solid fa-magnifying-glass"></i> Cari
              </button>
            </form>
          </div>

          <div className="switch form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              id="flexSwitchCheckChecked"
              onChange={toggleTheme}
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckChecked"
            >
              {" "}
              {theme == "dark" ? (
                <img className="light-moon" src="/assets/img/night.png" />
              ) : (
                <img src="/assets/img/moon-light.png" />
              )}
            </label>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
