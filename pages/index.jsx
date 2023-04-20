import { useEffect } from 'react';

/* eslint-disable @next/next/no-img-element */
export default function Home() {
  useEffect(() => {
    setTimeout(() => {
      document.getElementById('spinner').classList.remove('show');
    }, 1000);
  }, []);

  return (
    <>
      {/* Header */}
      <div className="container-fluid hero-header bg-light pt-3 pb-5 mb-5">
        <div className="container py-5">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <p className="text-primary text-uppercase mb-2 animated slideInDown">
                Welcome To Photozone
              </p>
              <h1 className="display-4 mb-3 animated slideInDown">
                Wedding And Portrait Studio Based in New York
              </h1>
              <p className="animated slideInDown">
                Tempor erat elitr rebum at clita. Diam dolor diam
                ipsum sit. Aliqu diam amet diam et eos. Clita erat
                ipsum et lorem et sit, sed stet lorem sit clita duo
                justo magna dolore erat amet
              </p>
              <div className="d-flex align-items-center pt-4 animated slideInDown">
                <a href="" className="btn btn-primary py-3 px-4 me-5">
                  Explore More
                </a>
                <button
                  type="button"
                  className="btn-play"
                  data-bs-toggle="modal"
                  data-src="https://www.youtube.com/embed/DWRcNpR6Kdc"
                  data-bs-target="#videoModal"
                >
                  <span></span>
                </button>
                <h5 className="ms-4 mb-0 d-none d-sm-block">
                  Play Video
                </h5>
              </div>
            </div>
            <div className="col-lg-6 animated fadeIn">
              <div className="row g-3">
                <div className="col-6 text-end">
                  <img
                    className="img-fluid bg-white p-3 w-100 mb-3"
                    src="img/hero-1.jpg"
                    alt=""
                  />
                  <img
                    className="img-fluid bg-white p-3 w-50"
                    src="img/hero-3.jpg"
                    alt=""
                  />
                </div>
                <div className="col-6">
                  <img
                    className="img-fluid bg-white p-3 w-50 mb-3"
                    src="img/hero-4.jpg"
                    alt=""
                  />
                  <img
                    className="img-fluid bg-white p-3 w-100"
                    src="img/hero-2.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal Start */}
      <div
        className="modal modal-video fade"
        id="videoModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content rounded-0">
            <div className="modal-header">
              <h3 className="modal-title" id="exampleModalLabel">
                Youtube Video
              </h3>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="ratio ratio-16x9">
                <iframe
                  className="embed-responsive-item"
                  src=""
                  id="video"
                  allowFullScreen
                  allowscriptaccess="always"
                  allow="autoplay"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div
              className="col-lg-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="row g-3 img-twice position-relative h-100">
                <div className="col-6">
                  <img
                    className="img-fluid bg-light p-3"
                    src="img/about-1.jpg"
                    alt=""
                  />
                </div>
                <div className="col-6 align-self-end">
                  <img
                    className="img-fluid bg-light p-3"
                    src="img/about-2.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="h-100">
                <p className="text-primary text-uppercase mb-2">
                  About Us
                </p>
                <h1 className="display-6 mb-4">
                  We Are Creative And Professional Photographer
                </h1>
                <p>
                  Tempor erat elitr rebum at clita. Diam dolor diam
                  ipsum sit. Aliqu diam amet diam et eos. Clita erat
                  ipsum et lorem et sit, sed stet lorem sit clita duo
                  justo magna dolore erat amet
                </p>
                <p>
                  Tempor erat elitr rebum at clita. Diam dolor diam
                  ipsum sit. Aliqu diam amet diam et eos. Clita erat
                  ipsum et lorem et sit, sed stet lorem sit clita duo
                  justo magna dolore erat amet
                </p>
                <div className="row g-2 mb-4">
                  <div className="col-sm-6">
                    <i className="fa fa-check text-primary me-3"></i>
                    Quality Products
                  </div>
                  <div className="col-sm-6">
                    <i className="fa fa-check text-primary me-3"></i>
                    Custom Products
                  </div>
                  <div className="col-sm-6">
                    <i className="fa fa-check text-primary me-3"></i>
                    Online Order
                  </div>
                  <div className="col-sm-6">
                    <i className="fa fa-check text-primary me-3"></i>
                    Home Delivery
                  </div>
                </div>
                <a className="btn btn-primary py-3 px-5" href="">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Facts */}
      <div className="container-xxl py-5">
        <div className="container">
          <div
            className="text-center mx-auto wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: '500px' }}
          >
            <p className="text-primary text-uppercase mb-2">
              Why Choose Us!
            </p>
            <h1 className="display-6 mb-5">
              The Leading Photo Studio In The Country
            </h1>
          </div>
          <div className="row g-3">
            <div
              className="col-lg-4 col-md-6 pt-lg-5 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="fact-item bg-light text-center h-100 p-5">
                <h1
                  className="display-2 text-primary mb-3"
                  data-toggle="counter-up"
                >
                  35
                </h1>
                <h4 className="mb-3">Award Winning</h4>
                <span>
                  Aliqu diam amet diam et eos. Clita erat ipsum et
                  lorem et sit, sed stet lorem sit clita duo justo
                </span>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="fact-item bg-light text-center h-100 p-5">
                <h1
                  className="display-2 text-primary mb-3"
                  data-toggle="counter-up"
                >
                  45
                </h1>
                <h4 className="mb-3">Years Experience</h4>
                <span>
                  Aliqu diam amet diam et eos. Clita erat ipsum et
                  lorem et sit, sed stet lorem sit clita duo justo
                </span>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 pt-lg-5 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="fact-item bg-light text-center h-100 p-5">
                <h1
                  className="display-2 text-primary mb-3"
                  data-toggle="counter-up"
                >
                  12345
                </h1>
                <h4 className="mb-3">Happy Clients</h4>
                <span>
                  Aliqu diam amet diam et eos. Clita erat ipsum et
                  lorem et sit, sed stet lorem sit clita duo justo
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Service */}
      <div className="container-xxl bg-light py-5 my-5">
        <div className="container py-5">
          <div
            className="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: '500px' }}
          >
            <p className="text-primary text-uppercase mb-2">
              Our Services
            </p>
            <h1 className="display-6 mb-4">
              We Provide Best Professional Services
            </h1>
          </div>
          <div className="row g-3">
            <div
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="service-item d-flex flex-column bg-white p-3 pb-0">
                <div className="position-relative">
                  <img
                    className="img-fluid"
                    src="img/service-1.jpg"
                    alt=""
                  />
                  <div className="service-overlay">
                    <a
                      className="btn btn-lg-square btn-outline-light rounded-circle"
                      href=""
                    >
                      <i className="fa fa-link text-primary"></i>
                    </a>
                  </div>
                </div>
                <div className="text-center p-4">
                  <h4>Weddings</h4>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 pt-lg-5 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="service-item d-flex flex-column bg-white p-3 pb-0">
                <div className="position-relative">
                  <img
                    className="img-fluid"
                    src="img/service-2.jpg"
                    alt=""
                  />
                  <div className="service-overlay">
                    <a
                      className="btn btn-lg-square btn-outline-light rounded-circle"
                      href=""
                    >
                      <i className="fa fa-link text-primary"></i>
                    </a>
                  </div>
                </div>
                <div className="text-center p-4">
                  <h4>Portraits</h4>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="service-item d-flex flex-column bg-white p-3 pb-0">
                <div className="position-relative">
                  <img
                    className="img-fluid"
                    src="img/service-3.jpg"
                    alt=""
                  />
                  <div className="service-overlay">
                    <a
                      className="btn btn-lg-square btn-outline-light rounded-circle"
                      href=""
                    >
                      <i className="fa fa-link text-primary"></i>
                    </a>
                  </div>
                </div>
                <div className="text-center p-4">
                  <h4>Fashion</h4>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 pt-lg-5 wow fadeInUp"
              data-wow-delay="0.7s"
            >
              <div className="service-item d-flex flex-column bg-white p-3 pb-0">
                <div className="position-relative">
                  <img
                    className="img-fluid"
                    src="img/service-4.jpg"
                    alt=""
                  />
                  <div className="service-overlay">
                    <a
                      className="btn btn-lg-square btn-outline-light rounded-circle"
                      href=""
                    >
                      <i className="fa fa-link text-primary"></i>
                    </a>
                  </div>
                </div>
                <div className="text-center p-4">
                  <h4>Editorial</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Project */}
      <div className="container-xxl py-5">
        <div className="container">
          <div
            className="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: '500px' }}
          >
            <p className="text-primary text-uppercase mb-2">
              Our Works
            </p>
            <h1 className="display-6 mb-0">
              Discover Our Unique And Creative Photoshoot
            </h1>
          </div>
          <div className="row g-3">
            <div
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="row g-3">
                <div className="col-12">
                  <div className="project-item">
                    <img
                      className="img-fluid"
                      src="img/project-5.jpg"
                      alt=""
                    />
                    <a
                      className="project-title h5 mb-0"
                      href="img/project-5.jpg"
                      data-lightbox="project"
                    >
                      Memory
                    </a>
                  </div>
                </div>
                <div className="col-12">
                  <div className="project-item">
                    <img
                      className="img-fluid"
                      src="img/project-1.jpg"
                      alt=""
                    />
                    <a
                      className="project-title h5 mb-0"
                      href="img/project-1.jpg"
                      data-lightbox="project"
                    >
                      Wedding
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="row g-3">
                <div className="col-12">
                  <div className="project-item">
                    <img
                      className="img-fluid"
                      src="img/project-2.jpg"
                      alt=""
                    />
                    <a
                      className="project-title h5 mb-0"
                      href="img/project-2.jpg"
                      data-lightbox="project"
                    >
                      Portrait
                    </a>
                  </div>
                </div>
                <div className="col-12">
                  <div className="project-item">
                    <img
                      className="img-fluid"
                      src="img/project-6.jpg"
                      alt=""
                    />
                    <a
                      className="project-title h5 mb-0"
                      href="img/project-6.jpg"
                      data-lightbox="project"
                    >
                      Travel
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="row g-3">
                <div className="col-12">
                  <div className="project-item">
                    <img
                      className="img-fluid"
                      src="img/project-7.jpg"
                      alt=""
                    />
                    <a
                      className="project-title h5 mb-0"
                      href="img/project-7.jpg"
                      data-lightbox="project"
                    >
                      Wedding
                    </a>
                  </div>
                </div>
                <div className="col-12">
                  <div className="project-item">
                    <img
                      className="img-fluid"
                      src="img/project-3.jpg"
                      alt=""
                    />
                    <a
                      className="project-title h5 mb-0"
                      href="img/project-3.jpg"
                      data-lightbox="project"
                    >
                      Memory
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay="0.7s"
            >
              <div className="row g-3">
                <div className="col-12">
                  <div className="project-item">
                    <img
                      className="img-fluid"
                      src="img/project-4.jpg"
                      alt=""
                    />
                    <a
                      className="project-title h5 mb-0"
                      href="img/project-4.jpg"
                      data-lightbox="project"
                    >
                      Fashion
                    </a>
                  </div>
                </div>
                <div className="col-12">
                  <div className="project-item">
                    <img
                      className="img-fluid"
                      src="img/project-8.jpg"
                      alt=""
                    />
                    <a
                      className="project-title h5 mb-0"
                      href="img/project-8.jpg"
                      data-lightbox="project"
                    >
                      Portrait
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team */}
      <div className="container-xxl px-0 py-5">
        <div
          className="text-center mx-auto mb-5 wow fadeInUp"
          data-wow-delay="0.1s"
          style={{ maxWidth: '500px' }}
        >
          <p className="text-primary text-uppercase mb-2">Our Team</p>
          <h1 className="display-6 mb-0">
            Creative Photograher And Videographer
          </h1>
        </div>
        <div className="row g-0">
          <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
            <div className="row g-0 flex-sm-row">
              <div className="col-sm-6">
                <div className="team-img position-relative">
                  <img
                    className="img-fluid"
                    src="img/team-1.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="h-100 p-5 d-flex flex-column justify-content-between">
                  <div className="mb-3">
                    <h4>Lucifer Jhones</h4>
                    <span>Photographer</span>
                  </div>
                  <p>
                    Aliqu diam amet diam et eos. Clita erat ipsum et
                    lorem et sit, sed stet lorem sit clita duo
                  </p>
                  <div className="d-flex">
                    <a
                      className="btn btn-square btn-outline-primary rounded-circle me-2"
                      href=""
                    >
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a
                      className="btn btn-square btn-outline-primary rounded-circle me-2"
                      href=""
                    >
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a
                      className="btn btn-square btn-outline-primary rounded-circle me-2"
                      href=""
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 wow fadeIn" data-wow-delay="0.3s">
            <div className="row g-0 flex-sm-row-reverse flex-lg-row">
              <div className="col-sm-6">
                <div className="team-img position-relative">
                  <img
                    className="img-fluid"
                    src="img/team-2.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="h-100 p-5 d-flex flex-column justify-content-between">
                  <div className="mb-3">
                    <h4>Jesse Joslin</h4>
                    <span>Videographer</span>
                  </div>
                  <p>
                    Aliqu diam amet diam et eos. Clita erat ipsum et
                    lorem et sit, sed stet lorem sit clita duo
                  </p>
                  <div className="d-flex">
                    <a
                      className="btn btn-square btn-outline-primary rounded-circle me-2"
                      href=""
                    >
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a
                      className="btn btn-square btn-outline-primary rounded-circle me-2"
                      href=""
                    >
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a
                      className="btn btn-square btn-outline-primary rounded-circle me-2"
                      href=""
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
            <div className="row g-0 flex-lg-row-reverse">
              <div className="col-sm-6">
                <div className="team-img position-relative">
                  <img
                    className="img-fluid"
                    src="img/team-3.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="h-100 p-5 d-flex flex-column justify-content-between">
                  <div className="mb-3">
                    <h4>Richard Archer</h4>
                    <span>Retoucher</span>
                  </div>
                  <p>
                    Aliqu diam amet diam et eos. Clita erat ipsum et
                    lorem et sit, sed stet lorem sit clita duo
                  </p>
                  <div className="d-flex">
                    <a
                      className="btn btn-square btn-outline-primary rounded-circle me-2"
                      href=""
                    >
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a
                      className="btn btn-square btn-outline-primary rounded-circle me-2"
                      href=""
                    >
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a
                      className="btn btn-square btn-outline-primary rounded-circle me-2"
                      href=""
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 wow fadeIn" data-wow-delay="0.3s">
            <div className="row g-0 flex-sm-row-reverse">
              <div className="col-sm-6">
                <div className="team-img position-relative">
                  <img
                    className="img-fluid"
                    src="img/team-4.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="h-100 p-5 d-flex flex-column justify-content-between">
                  <div className="mb-3">
                    <h4>April Ryan</h4>
                    <span>Editor</span>
                  </div>
                  <p>
                    Aliqu diam amet diam et eos. Clita erat ipsum et
                    lorem et sit, sed stet lorem sit clita duo
                  </p>
                  <div className="d-flex">
                    <a
                      className="btn btn-square btn-outline-primary rounded-circle me-2"
                      href=""
                    >
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a
                      className="btn btn-square btn-outline-primary rounded-circle me-2"
                      href=""
                    >
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a
                      className="btn btn-square btn-outline-primary rounded-circle me-2"
                      href=""
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial */}
      <div className="container-xxl py-5">
        <div className="container">
          <div
            className="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: '500px' }}
          >
            <p className="text-primary text-uppercase mb-2">
              Client&apos;s Review
            </p>
            <h1 className="display-6 mb-0">
              More Than 20000+ Customers Trusted Us
            </h1>
          </div>
          <div
            className="owl-carousel testimonial-carousel wow fadeInUp"
            data-wow-delay="0.1s"
          >
            <div className="testimonial-item bg-white p-4">
              <div className="d-flex align-items-center mb-4">
                <img
                  className="flex-shrink-0 rounded-circle border p-1"
                  src="img/testimonial-1.jpg"
                  alt=""
                />
                <div className="ms-4">
                  <h5 className="mb-1">Client Name</h5>
                  <span>Profession</span>
                </div>
              </div>
              <p className="mb-0">
                Tempor erat elitr rebum at clita. Diam dolor diam
                ipsum sit diam amet diam et eos. Clita erat ipsum et
                lorem et sit.
              </p>
            </div>
            <div className="testimonial-item bg-white p-4">
              <div className="d-flex align-items-center mb-4">
                <img
                  className="flex-shrink-0 rounded-circle border p-1"
                  src="img/testimonial-2.jpg"
                  alt=""
                />
                <div className="ms-4">
                  <h5 className="mb-1">Client Name</h5>
                  <span>Profession</span>
                </div>
              </div>
              <p className="mb-0">
                Tempor erat elitr rebum at clita. Diam dolor diam
                ipsum sit diam amet diam et eos. Clita erat ipsum et
                lorem et sit.
              </p>
            </div>
            <div className="testimonial-item bg-white p-4">
              <div className="d-flex align-items-center mb-4">
                <img
                  className="flex-shrink-0 rounded-circle border p-1"
                  src="img/testimonial-3.jpg"
                  alt=""
                />
                <div className="ms-4">
                  <h5 className="mb-1">Client Name</h5>
                  <span>Profession</span>
                </div>
              </div>
              <p className="mb-0">
                Tempor erat elitr rebum at clita. Diam dolor diam
                ipsum sit diam amet diam et eos. Clita erat ipsum et
                lorem et sit.
              </p>
            </div>
            <div className="testimonial-item bg-white p-4">
              <div className="d-flex align-items-center mb-4">
                <img
                  className="flex-shrink-0 rounded-circle border p-1"
                  src="img/testimonial-4.jpg"
                  alt=""
                />
                <div className="ms-4">
                  <h5 className="mb-1">Client Name</h5>
                  <span>Profession</span>
                </div>
              </div>
              <p className="mb-0">
                Tempor erat elitr rebum at clita. Diam dolor diam
                ipsum sit diam amet diam et eos. Clita erat ipsum et
                lorem et sit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
