import React from "react";

const Maklumat = () => {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row align-items-center mb-6">
          <div className="col-md-5 col-lg-4 offset-lg-1">
            <h1 className="fw-bold lh-base">
              Layanan kami bebas suap, pungli dan gratifikasi!
            </h1>
          </div>
          <div className="col-md-6 col-lg-5 offset-lg-1 border-start py-5 ps-5">
            <p className="mb-0">
              "Dengan ini kami menyatakan sanggup menyelenggarakan pelayanan sesuai standar pelayanan yang telah ditetapkan serta siap menerima sanksi untuk setiap pengaduan yang tidak ditindaklanjuti sesuai peraturan perundangan"
            </p>
            <h4>--Maklumat Pelayanan</h4>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 col-lg-3 offset-lg-1 mb-4">
            <div className="py-4">
              <img
                className="img-fluid"
                src="assets/img/illustrations/automatic.png"
                width={90}
                alt=""
              />
            </div>
            <h5 className="fw-bold text-danger">Bebas suap</h5>
            <p className="mt-2 mb-0">
              Petugas dan pejabat karantina tidak menerima imbalan dalam bentuk apapun.
            </p>
          </div>
          <div className="col-md-4 col-lg-3 offset-lg-1 mb-4">
            <div className="py-4">
              <img
                className="img-fluid"
                src="assets/img/illustrations/network.png"
                width={90}
                alt=""
              />
            </div>
            <h5 className="fw-bold text-primary">Bebas pungli</h5>
            <p className="mt-2 mb-0">
              Petugas dan pejabat karantina tidak meminta biaya tambahan diluar tarif dan jasa resmi karantina.
            </p>
          </div>
          <div className="col-md-4 col-lg-3 offset-lg-1 mb-4">
            <div className="py-4">
              <img
                className="img-fluid"
                src="assets/img/illustrations/rewards.png"
                width={90}
                alt=""
              />
            </div>
            <h5 className="fw-bold text-success">Bebas gratifikasi</h5>
            <p className="mt-2 mb-0">
              Petugas dan pejabat karantina tidak menerima gratifikasi dalam bentuk apapun. Bantu kami untuk menjaga integritas layanan karantina.
            </p>
          </div>
        </div>
      </div>
      {/* end of .container*/}
    </section>
  );
};

export default Maklumat;
