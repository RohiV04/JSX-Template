import React from "react";
import {Link} from "react-router-dom";
function Footer() {
  return (
    <>
      <footer className="bg-black border-top border-dark">
        <div className="container py-vh-4 text-secondary fw-lighter">
          <div className="row">
            <div className="col-12 col-lg-5 py-4 text-center text-lg-start">
              <a
                className="navbar-brand pe-md-4 fs-4 col-12 col-md-auto text-center"
                href="index.html"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  fill="currentColor"
                  className="bi bi-stack"
                  viewBox="0 0 16 16"
                >
                  <path d="m14.12 10.163 1.715.858c.22.11.22.424 0 .534L8.267 15.34a.598.598 0 0 1-.534 0L.165 11.555a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0l5.317-2.66zM7.733.063a.598.598 0 0 1 .534 0l7.568 3.784a.3.3 0 0 1 0 .535L8.267 8.165a.598.598 0 0 1-.534 0L.165 4.382a.299.299 0 0 1 0-.535L7.733.063z" />
                  <path d="m14.12 6.576 1.715.858c.22.11.22.424 0 .534l-7.568 3.784a.598.598 0 0 1-.534 0L.165 7.968a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0l5.317-2.659z" />
                </svg>
                <span className="ms-md-1 mt-1 fw-bolder me-md-5">Rohith</span>
              </a>
            </div>
            <div className="col border-end border-dark">
              
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0 list-group list-group-horizontal">
                <li className="nav-item px-4">
                  <Link to='/about'>
                  <a href="#" className="link-fancy link-fancy-light">
                    About 
                  </a>
                  </Link>
                </li>
                
                <li className="nav-item px-4">
                  <Link to='/skills'>
                  <a href="#" className="link-fancy link-fancy-light">
                    Skills
                  </a>
                  </Link>
                </li>
                
                <li className="nav-item px-4">
                <Link to='/contact'>
                  <a href="#" className="link-fancy link-fancy-light">
                    Contact 
                  </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
