import React from 'react';
function Contact() {
    return ( 
        <div className="h-100 container-fluid">
  <div className="h-100 row d-flex align-items-stretch">
    <div className="col-12 col-md-7 col-lg-6 col-xl-5 d-flex align-items-start flex-column px-vw-5">
      <header className="mb-auto py-vh-2 col-12">
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
      </header>
      <main className="mb-auto col-12">
        <h1>Reach out to me</h1>
        <form className="row">
          <div className="col-12">
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control form-control-lg bg-gray-800 border-dark"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Email Address
              </label>
              <input
                type="email"
                className="form-control form-control-lg bg-gray-800 border-dark"
                id="exampleInputPassword1"
              />
            </div>
            
            <button type="submit" className="btn btn-white btn-xl mb-4">
              Submit
            </button>
          </div>
        </form>
      </main>
    </div>
    <div className="col-12 col-md-5 col-lg-6 col-xl-7 gradient" />
  </div>
</div>

     );
}

export default Contact;