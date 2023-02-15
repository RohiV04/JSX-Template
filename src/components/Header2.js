import React from "react";
function Header2() {
  return (
    <>
      <>
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
        <div className="bg-dark">
          <div className="container px-vw-5 py-vh-5">
            <div className="row d-flex align-items-center">
              <div
                className="col-12 col-lg-7 text-lg-end"
                data-aos="fade-right"
              >
                <span className="h5 text-secondary fw-lighter">What we do</span>
                <h2 className="display-4">
                <img
                  src="./../dev.jpeg"
                  width={716}
                  height={0}
                  alt="abstract image"
                  className="img-fluid position-relative rounded-5 shadow"
                  data-aos="fade-up"
                  data-aos-duration={3000}
                />
                </h2>
              </div>
              <div className="col-12 col-lg-5" data-aos="fade-left">
                <h3 className="pt-5">Product Design &amp; Strategy</h3>
                <p className="text-secondary">
                With my experience in both front-end and back-end development, I can bring your ideas to life.
                  <br />
                  <a href="#" className="link-fancy link-fancy-light me-2">
                    Tell me more
                  </a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    fill="currentColor"
                    className="bi bi-arrow-right-circle"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"
                    />
                  </svg>
                </p>
                <h3 className="border-top border-secondary pt-5 mt-5">
                  Development &amp; Engineering
                </h3>
                <p className="text-secondary">
                As a Full Stack Developer, I specialize in developing web applications with a focus on user experience and functionality. 
                  <br />
                  <a href="#" className="link-fancy link-fancy-light me-2">
                    Tell me more
                  </a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    fill="currentColor"
                    className="bi bi-arrow-right-circle"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"
                    />
                  </svg>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-black py-vh-3">
          <div className="container bg-black px-vw-5 py-vh-3 rounded-5 shadow">
            <div className="row gx-5">
              <div className="col-12 col-md-6">
                <div className="card bg-transparent mb-5" data-aos="zoom-in-up">
                  <div className="bg-dark shadow rounded-5 p-0">
                    <img
                      src="img/webp/abstract3.webp"
                      width={582}
                      height={327}
                      alt="abstract image"
                      className="img-fluid rounded-5 no-bottom-radius"
                      loading="lazy"
                    />
                    <div className="p-5">
                      <h2 className="fw-lighter">dev by dev</h2>
                      <p className="pb-4 text-secondary">
                      I create applications that are both visually appealing and fully functional.
                      </p>
                      <a href="#" className="link-fancy link-fancy-light">
                        Read more
                      </a>
                    </div>
                  </div>
                </div>
                <div className="card bg-transparent" data-aos="zoom-in-up">
                  <div className="bg-dark shadow rounded-5 p-0">
                    <img
                      src="img/webp/abstract2.webp"
                      width={582}
                      height={442}
                      alt="abstract image"
                      className="img-fluid rounded-5 no-bottom-radius"
                      loading="lazy"
                    />
                    <div className="p-5">
                      <h2 className="fw-lighter">Ipsum dolor est</h2>
                      <p className="pb-4 text-secondary">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore et
                        dolore magna aliquyam erat.
                      </p>
                      <a href="#" className="link-fancy link-fancy-light">
                        Read more
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="p-5 pt-0 mt-5" data-aos="fade">
                  <span className="h5 text-secondary fw-lighter">
                    Contribution
                  </span>
                  <h2 className="display-4  link-fancy-light">
                    My Projects
                  </h2>
                </div>
                <div
                  className="card bg-transparent mb-5 mt-5"
                  data-aos="zoom-in-up"
                >
                  <div className="bg-dark shadow rounded-5 p-0">
                    <img
                      src="img/webp/abstract17.webp"
                      width={582}
                      height={390}
                      alt="abstract image"
                      className="img-fluid rounded-5 no-bottom-radius"
                      loading="lazy"
                    />
                    <div className="p-5">
                      <h2 className="fw-lighter">Ipsum dolor est</h2>
                      <p className="pb-4 text-secondary">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore et
                        dolore magna aliquyam erat.
                      </p>
                      <a href="#" className="link-fancy link-fancy-light">
                        Read more
                      </a>
                    </div>
                  </div>
                </div>
                <div className="card bg-transparent" data-aos="zoom-in-up">
                  <div className="bg-dark shadow rounded-5 p-0">
                    <img
                      src="img/webp/abstract4.webp"
                      width={582}
                      height={327}
                      alt="abstract image"
                      className="img-fluid rounded-5 no-bottom-radius"
                      loading="lazy"
                    />
                    <div className="p-5">
                      <h2 className="fw-lighter">Ipsum dolor est</h2>
                      <p className="pb-4 text-secondary">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore et
                        dolore magna aliquyam erat.
                      </p>
                      <a href="#" className="link-fancy link-fancy-light">
                        Read more
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-dark position-relative">
          <div className="container px-vw-5 py-vh-5">
            <div className="row d-flex align-items-center">
              <div className="col-12 col-lg-7">
                <img
                  className="img-fluid rounded-5 mb-n5 shadow"
                  src="img/webp/person9.webp"
                  width={512}
                  height={512}
                  alt="a nice person"
                  loading="lazy"
                  data-aos="zoom-in-right"
                />
                <img
                  className="img-fluid rounded-5 ms-5 mb-n5 shadow"
                  src="img/webp/person11.webp"
                  width={512}
                  height={512}
                  alt="another nice person"
                  loading="lazy"
                  data-aos="zoom-in-up"
                />
              </div>
              <div
                className="col-12 col-lg-5 bg-dark rounded-5 py-5"
                data-aos="fade"
              >
                <span className="h5 text-secondary fw-lighter">
                  Do you like faces?
                </span>
                <h2 className="display-4">
                  We constantly adding new images to our website. Does it make
                  sense? No!
                </h2>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
}

export default Header2;
