import React from "react";

const Quotes = () => {
  return (
    <section className="py-6">
      <div className="container">
        <div className="row justify-content-center mb-6">
          <div className="col-lg-6 text-center mx-auto mb-3 mb-md-5 mt-4">
            <h6 className="fw-bold fs-4 display-3 lh-sm">
              Layanan Karantina <br />
             Pertanian
            </h6>
            <p className="mb-0">
              Pilih informasi layanan sesuai kebutuhan anda.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 mb-6">
            <div className="text-center px-lg-3">
              <img
                className="img-fluid mb-3"
                src="assets/img/illustrations/app.png"
                width={90}
                alt=""
              />
              <h5 className="fw-bold">Karantina Hewan</h5>
              <p className="mb-md-0">
                Temukan Semua Informasi Tentang Layanan Karantina Hewan
              </p>
              <a href="#" className="btn btn-primary">Selengkapnya</a>
            </div>
          </div>
          <div className="col-md-4 mb-6">
            <div className="text-center px-lg-3">
              <img
                className="img-fluid mb-3"
                src="assets/img/illustrations/time-award.png"
                width={90}
                alt=""
              />
              <h5 className="fw-bold">Karantina Tumbuhan</h5>
              <p className="mb-md-0">
                Temukan Semua Informasi Tentang Layanan Karantina Tumbuhan
              </p>
              <a href="#" className="btn btn-primary">Selengkapnya</a>
            </div>
          </div>
          <div className="col-md-4 mb-6">
            <div className="text-center px-lg-3">
              <img
                className="img-fluid mb-3"
                src="assets/img/illustrations/cloud.png"
                width={90}
                alt=""
              />
              <h5 className="fw-bold">Informasi Publik</h5>
              <p className="mb-md-0">
                Temukan Semua Informasi Tentang Layanan Informasi Publik.
              </p>
              <a href="#" className="btn btn-primary">Selengkapnya</a>
            </div>
          </div>
        </div>
      </div>
      {/* end of .container*/}
    </section>
  );
};

export default Quotes;
