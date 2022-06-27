import React from "react";

const Feature = () => {
  return (
    <section className="py-5" id="features">
      <div className="container-lg">
        <div className="row align-items-center">
          <div className="col-md-5 col-lg-6 order-md-0 text-center text-md-start">
            <img
              className="img-fluid"
              src="assets/img/illustrations/feature-bg.png"
              width={550}
              alt=""
            />
          </div>
          <div className="col-md-7 col-lg-6 px-sm-5 px-md-0">
            <h6 className="fw-bold fs-4 display-3 lh-sm">
              Ayo Lapor <br />
              Karantina!
            </h6>
            <p className="my-4">
              Laporkan barang bawwan anda kepada petugas karantina
              <br className="d-none d-xl-block" />
              di tempat pemasukan dan pengeluaran.
            </p>
            <div className="d-flex align-items-center mb-5">
              <div>
                <img
                  className="img-fluid"
                  src="assets/img/illustrations/fast-performance.png"
                  width={90}
                  alt=""
                />
              </div>
              <div className="px-4">
                <h5 className="fw-bold text-danger">Layanan Cepat</h5>
                <p>
                  Dapatkan layanan dengan mudah dan cepat.
                  <br className="d-none d-xl-block" /> Anda bahkan dapat 
                  mengajukan permohonan <br className="d-none d-xl-block" /> secara online dari manapun dan
                  kapan pun.
                </p>
              </div>
            </div>
            <div className="d-flex align-items-center mb-5">
              <div>
                <img
                  className="img-fluid"
                  src="assets/img/illustrations/prototype.png"
                  width={90}
                  alt=""
                />
              </div>
              <div className="px-4">
                <h5 className="fw-bold text-primary">Aman</h5>
                <p>
                  Layanan kami telah tersertifikasi ISO xxx
                  <br className="d-none d-xl-block" /> Untuk menjamin produk anda aman dari Hama penyakit hewan karantina atau <br className="d-none d-xl-block" /> Organisme Pengganggu tumbuhan karantina.
                  tests
                </p>
              </div>
            </div>
            <div className="d-flex align-items-center mb-5">
              <div>
                <img
                  className="img-fluid"
                  src="assets/img/illustrations/vector.png"
                  width={90}
                  alt=""
                />
              </div>
              <div className="px-4">
                <h5 className="fw-bold text-success">Biaya Transparan</h5>
                <p>
                  tarif jasa karantina sesuai Peraturan Pemerintah No. xxx Tahun xxx
                  <br className="d-none d-xl-block" /> Bersifat transparan
                  dan tidak ada <br className="d-none d-xl-block" /> biaya tambahan apapun diluar jasa karantina yang berlaku.
                  tests
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
