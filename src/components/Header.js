import React from "react";
function Header() {
  return (
    <>
      <div
        className="w-100 overflow-hidden position-relative bg-black text-white"
        data-aos="fade"
      >
        <div className="position-absolute w-100 h-100 bg-black opacity-75 top-0 start-0" />
        <div className="container py-vh-4 position-relative mt-5 px-vw-5 text-center">
          <div className="row d-flex align-items-center justify-content-center py-vh-5">
            <div className="col-12 col-xl-10">
              <span className="h5 text-secondary fw-lighter">
                Rohith Vangapandu
              </span>
              <h1 className="display-huge mt-3 mb-3 lh-1">
                Welcome to my portfolio!
              </h1>
            </div>
            <div className="col-12 col-xl-8">
              <p className="lead text-secondary">As a Full Stack Developer</p>
            </div>
            <div className="col-12 text-center">
              <a href="#" className="btn btn-xl btn-light">
                Contact Me
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  className="bi bi-arrow-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="w-100 position-relative bg-black text-white bg-cover d-flex align-items-center">
        <div className="container-fluid px-vw-5">
          <div className="position-absolute w-100 h-50 bg-dark bottom-0 start-0" />
          <div className="row d-flex align-items-center position-relative justify-content-center px-0 g-5">
            <div className="col-12 col-lg-6">
              <img
                src="img/webp/abstract18.webp"
                width={2280}
                height={1732}
                alt="abstract image"
                className="img-fluid position-relative rounded-5 shadow"
                data-aos="fade-up"
              />
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <img
                src="img/webp/abstract6.webp"
                width={1116}
                height={1578}
                alt="abstract image"
                className="img-fluid position-relative rounded-5 shadow"
                data-aos="fade-up"
                data-aos-duration={2000}
              />
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <img
                src="img/webp/abstract9.webp"
                width={1116}
                height={848}
                alt="abstract image"
                className="img-fluid position-relative rounded-5 shadow"
                data-aos="fade-up"
                data-aos-duration={3000}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
