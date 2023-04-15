import React from "react";

function Skills() {
  return (
    <>
      <main>
        <div className="container">
          <div className="row d-flex justify-content-center py-vh-5 pb-0">
            <div className="col-12 col-lg-10 col-xl-8">
              <div className="row">
                <div className="col-12">
                  <h1 className="display-1 fw-bold">
                    Skills
                    <span className="fs-4"></span>
                    <br />I Acquire
                  </h1>
                  <p className="lead border-top pt-5 mt-5" data-aos="fade-up">
                    I am a Full Stack Developer with experience in creating web
                    applications using HTML, CSS, and JavaScript. I am
                    proficient in various frameworks such as React and Node.js.
                    I also have experience working with databases like MySQL and
                    MongoDB. Throughout my career, I have worked on a variety of
                    projects, from building e-commerce platforms to developing
                    custom content management systems. I am passionate about
                    staying up-to-date with the latest technologies and am
                    committed to providing the best solutions to clients.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 py-vh-2">
                <img
                  src="img/webp/abstract18.webp"
                  width={1446}
                  height={982}
                  alt="abstract image"
                  className="img-fluid position-relative rounded-5 shadow"
                  data-aos="zoom-up"
                />
              </div>
            </div>
            <div className="col-12 col-lg-10 col-xl-8">
              <div
                className="row d-flex align-items-start"
                data-aos="fade-right"
              >
                <div className="col-12 col-lg-7">
                  <h2 className="h3 mt-5 border-top pt-5">01. Front End</h2>
                  <p className="text-secondary">
                    Proficiency in HTML, CSS, and JavaScript: These are the core
                    building blocks of any front-end developer's toolkit.
                  </p>
                </div>
                <div className="col-12 col-lg-4 offset-lg-1 bg-gray-900 p-5 mt-5">
                  <h3 className="h6 link-fancy link-light me-2 ">
                    React
                  </h3>
                  <p className="text-secondary">
                    Familiarity with front-end frameworks and libraries: Popular
                    front-end frameworks and libraries like React
                  </p>
                </div>
              </div>
              <div
                className="row d-flex align-items-start"
                data-aos="fade-right"
              >
                <div className="col-12 col-lg-7">
                  <h2 className="h3 mt-5 border-top pt-5">
                    02. Understanding of web design principles
                  </h2>
                  <p className="text-secondary">
                    Front-end developers need to understand the principles of
                    user interface and user experience design. This includes an
                    eye for design and attention to detail, as well as an
                    understanding of how to create responsive, mobile-friendly
                    designs.
                  </p>
                </div>
                <div className="col-12 col-lg-4 offset-lg-1 bg-gray-900 p-5 mt-5">
                  <h3 className="h6 link-fancy link-fancy-light me-2">Figma</h3>
                  <p className="text-secondary">
                    Figma is a web-based design tool that enables users to
                    create interactive, collaborative designs.
                  </p>
                </div>
              </div>
              <div
                className="row d-flex align-items-start"
                data-aos="fade-right"
              >
                <div className="col-12 col-lg-7">
                  <h2 className="h3 mt-5 border-top pt-5">
                    03. Knowledge of cross-browser compatibility
                  </h2>
                  <p className="text-secondary">
                    Front-end developers need to ensure that their web
                    applications are compatible with a range of different
                    browsers and devices. This requires an understanding of the
                    quirks and differences between different browsers and the
                    ability to write code that is flexible and adaptable.
                  </p>
                </div>
                <div className="col-12 col-lg-4 offset-lg-1 bg-gray-900 p-5 mt-5">
                  <h3 className="h6 link-fancy link-light me-2">
                    React Native
                  </h3>
                  <p className="text-secondary">
                    React Native lets you create truly native apps and doesn't
                    compromise your users' experiences. It provides a core set
                    of platform agnostic native components
                  </p>
                </div>
              </div>
              <div
                className="row d-flex align-items-start"
                data-aos="fade-right"
              >
                <div className="col-12 col-lg-7">
                  <h2 className="h3 mt-5 border-top pt-5">
                    04. Experience with version control
                  </h2>
                  <p className="text-secondary">
                    Front-end developers need to be proficient in using version
                    control systems like Git to manage and track changes to
                    their codebase. This allows developers to collaborate more
                    effectively and makes it easier to manage complex projects.
                  </p>
                </div>
                <div className="col-12 col-lg-4 offset-lg-1 bg-gray-900 p-5 mt-5">
                  <h3 className="h6 link-fancy link-fancy-light me-2">
                    Git & Github
                  </h3>
                  <p className="text-secondary">
                    GitHub, Inc is an Internet hosting service for software
                    development and version control using Git. It provides the
                    distributed version control of Git plus
                  </p>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Skills;
