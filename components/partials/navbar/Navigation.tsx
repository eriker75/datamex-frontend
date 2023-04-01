/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navigation = () => {
  return (
    <>
      {/*<!-- Navbar (Floating light)--> */}
      {/*<!-- Remove "navbar-sticky" className to make navigation bar scrollable with the page.-->*/}
      <header
        className="header navbar navbar-expand-lg navbar-light navbar-floating navbar-sticky"
        data-scroll-header
        data-fixed-element
      >
        <div className="container px-0 px-xl-3">
          <button
            className="navbar-toggler ms-n2 me-2"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#primaryMenu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <Link
            className="navbar-brand flex-shrink-0 order-lg-1 mx-auto ms-lg-0 pe-lg-2 me-lg-4"
            href="/"
          >
            <img
              className="d-none d-lg-block"
              src="img/logo/logo-dark.png"
              alt="Around"
              width="153"
            />
            <img
              className="d-lg-none"
              src="img/logo/logo-icon.png"
              alt="Around"
              width="58"
            />
          </Link>
          <div className="d-flex align-items-center order-lg-3 ms-lg-auto">
            <a
              className="nav-link-style fs-sm text-nowrap"
              href="#modal-signin"
              data-bs-toggle="modal"
              data-view="#modal-signin-view"
            >
              <i className="ai-user fs-xl me-2 align-middle"></i>Sign in
            </a>
            <a
              className="btn btn-primary ms-grid-gutter d-none d-lg-inline-block"
              href="#modal-signin"
              data-bs-toggle="modal"
              data-view="#modal-signup-view"
            >
              Sign up
            </a>
          </div>
          <div
            className="offcanvas offcanvas-collapse order-lg-2"
            id="primaryMenu"
          >
            <div className="offcanvas-header navbar-shadow">
              <h5 className="mt-1 mb-0">Menu</h5>
              <button
                className="btn-close lead"
                type="button"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              {/* <!-- Menu--> */}
              <ul className="navbar-nav">
                <li className="nav-item dropdown dropdown-mega">
                  <Link className="nav-link" href="/">
                    Inicio
                  </Link>
                </li>
                <li className="nav-item dropdown dropdown-mega">
                  <Link className="nav-link" href="/">
                    Acerca De
                  </Link>
                </li>
                <li className="nav-item dropdown active">
                  <Link className="nav-link" href="/">
                    Precios
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <Link className="nav-link" href="/">
                    Como Funciona
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <Link className="nav-link" href="/">
                    Contactanos
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      <div style={{ height: "100px" }}></div>
      {/*<!-- Page content--> */}
      {/*<!-- Slanted background-->*/}
    </>
  );
};

export { Navigation };
