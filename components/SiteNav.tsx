"use client";

import { useState } from "react";

export default function SiteNav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [researchOpen, setResearchOpen] = useState(false);
  const [photographyOpen, setPhotographyOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
    setResearchOpen(false);
    setPhotographyOpen(false);
  };

  return (
    <>
      {/* =====================================================
          DESKTOP / MAIN NAVIGATION
          ===================================================== */}

      <nav className="nav">

        {/* Logo */}

        <a
          href="/"
          className="nav-logo"
          onClick={closeMenu}
        >
          SHANKAR<span>.</span>
        </a>


        {/* Desktop navigation */}

        <div className="nav-links">

          <a href="/about">
            About
          </a>


          {/* -----------------------------------------------
              RESEARCH
              ----------------------------------------------- */}

          <div className="nav-dropdown">

            <a
              href="/research"
              className="nav-dropdown-trigger"
            >
              Research <span>↓</span>
            </a>

            <div className="dropdown-menu">

              <a href="/research/overview">
                Overview
              </a>

              <a href="/research/publications">
                Publications
              </a>

            </div>

          </div>


          {/* -----------------------------------------------
              PHOTOGRAPHY
              ----------------------------------------------- */}

          <div className="nav-dropdown">

            <a
              href="/photography"
              className="nav-dropdown-trigger"
            >
              Photography <span>↓</span>
            </a>

            <div className="dropdown-menu">

              <a href="/photography/astrophotography">
                Astrophotography
              </a>

              <a href="/photography/aviation">
                Aviation
              </a>

            </div>

          </div>


          {/* -----------------------------------------------
              OTHER PAGES
              ----------------------------------------------- */}

          {/* <a href="/talks">
            Talks & Workshops
          </a>

          <a href="/outreach">
            Outreach / Teaching
          </a> */}

        </div>


        {/* Get in touch */}

        <a
          href="/contact"
          className="nav-button"
        >
          Get in touch
        </a>


        {/* Mobile menu button */}

        <button
          className="mobile-menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? "×" : "☰"}
        </button>

      </nav>


      {/* =====================================================
          MOBILE NAVIGATION
          ===================================================== */}

      <div
        className={`mobile-menu ${
          menuOpen ? "open" : ""
        }`}
      >

        {/* About */}

        <a
          href="/about"
          onClick={closeMenu}
        >
          About
        </a>


        {/* =================================================
            RESEARCH
            ================================================= */}

        <div className="mobile-nav-group">

          <button
            className="mobile-nav-parent"
            onClick={() =>
              setResearchOpen(!researchOpen)
            }
            aria-expanded={researchOpen}
          >
            <span>
              Research
            </span>

            <span>
              {researchOpen ? "−" : "+"}
            </span>
          </button>


          <div
            className={`mobile-submenu ${
              researchOpen
                ? "mobile-submenu-open"
                : ""
            }`}
          >

            <a
              href="/research/overview"
              onClick={closeMenu}
            >
              Overview
            </a>

            <a
              href="/research/publications"
              onClick={closeMenu}
            >
              Publications
            </a>

          </div>

        </div>


        {/* =================================================
            PHOTOGRAPHY
            ================================================= */}

        <div className="mobile-nav-group">

          <button
            className="mobile-nav-parent"
            onClick={() =>
              setPhotographyOpen(
                !photographyOpen
              )
            }
            aria-expanded={photographyOpen}
          >
            <span>
              Photography
            </span>

            <span>
              {photographyOpen ? "−" : "+"}
            </span>
          </button>


          <div
            className={`mobile-submenu ${
              photographyOpen
                ? "mobile-submenu-open"
                : ""
            }`}
          >

            <a
              href="/photography/astrophotography"
              onClick={closeMenu}
            >
              Astrophotography
            </a>

            <a
              href="/photography/aviation"
              onClick={closeMenu}
            >
              Aviation
            </a>

          </div>

        </div>


        {/* =================================================
            OTHER PAGES
            ================================================= */}

        {/* <a
          href="/talks"
          onClick={closeMenu}
        >
          Talks & Workshops
        </a>

        <a
          href="/outreach"
          onClick={closeMenu}
        >
          Outreach / Teaching
        </a> */}

        <a
          href="/contact"
          onClick={closeMenu}
        >
          Contact
        </a>

      </div>
    </>
  );
}