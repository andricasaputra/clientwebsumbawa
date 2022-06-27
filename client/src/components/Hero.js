import React from "react";

const Hero = () => {
  return (
    <section className="py-0" id="home">
      <div
        className="bg-holder"
        style={{
          backgroundImage: "url(assets/img/illustrations/hero-bg.png)",
          backgroundPosition: "bottom",
          backgroundSize: "cover",
        }}
      ></div>
      {/*/.bg-holder*/}
      <div className="container position-relative">
        <div className="row align-items-center py-8">
          <div className="col-md-5 col-lg-6 order-md-1 text-center text-md-end">
            <img
              className="img-fluid"
              src="assets/img/illustrations/mobile.png"
              width={350}
              alt=""
            />
          </div>
          <div className="col-md-7 col-lg-6 text-center text-md-start">
            <span className="badge bg-light rounded-pill text-dark align-items-center d-flex flex-row-reverse justify-content-end mx-auto mx-md-0 ps-0 w-75 w-sm-50 w-md-75 w-xl-50 mb-3">
              Whatsapp +62813 3990 1664
              <img
                className="img-fluid float-start me-3"
                src="assets/img/illustrations/arrow-right.png"
                alt=""
              />
            </span>
            <h1 className="mb-4 display-3 fw-bold lh-sm">
              Halo.. <br className="d-block d-lg-none d-xl-block" />
              Selamat Datang!
            </h1>
            <p className="mt-3 mb-4 fs-1">
             Di website resmi Karantina Pertanian Sumbawa Besar.
              <br className="d-none d-lg-block" />
             temukan semua informasi terkait perkarantinaan disini.
            </p>
            <a
              className="btn btn-lg btn-primary rounded-pill hover-top"
              href="#"
              role="button"
            >
              Selengkapnya
            </a>
            <a className="btn btn-link ps-md-4" href="#" role="button">
              {" "}
              Tonton video karantina!
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
