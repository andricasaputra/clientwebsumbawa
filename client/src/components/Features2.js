import React from "react";

const Features2 = () => {
  return (
    <section className="py-6">
      <div className="container">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-5 order-md-1 text-center text-md-start">
              <img
                className="img-fluid mb-4"
                src="assets/img/illustrations/ultimate-feature.png"
                alt=""
              />
            </div>
            <div className="col-md-6 text-center text-md-start">
              <h6 className="fw-bold fs-4 display-3 lh-sm">
                Ultimate features
                <br />
                that we built
              </h6>
              <p className="my-4 pe-xl-5">
                {" "}
                The rise of mobile devices transforms the way we consume
                information entirely.
              </p>
              <div className="row">
                <div className="col-md-6">
                  <div className="mb-4">
                    <div className="py-4">
                      <img
                        className="img-fluid"
                        src="assets/img/illustrations/app.png"
                        width={90}
                        alt=""
                      />
                    </div>
                    <h5 className="fw-bold text-undefined">App Development</h5>
                    <p className="mt-2 mb-0">
                      Get your blood tests delivered at home collect a sample
                      from the news your blood tests.
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-4">
                    <div className="py-4">
                      <img
                        className="img-fluid"
                        src="assets/img/illustrations/ux.png"
                        width={90}
                        alt=""
                      />
                    </div>
                    <h5 className="fw-bold text-undefined">UX Planning</h5>
                    <p className="mt-2 mb-0">
                      Get your blood tests delivered at home collect a sample
                      from the news your blood tests.
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-4">
                    <div className="py-4">
                      <img
                        className="img-fluid"
                        src="assets/img/illustrations/cloud.png"
                        width={90}
                        alt=""
                      />
                    </div>
                    <h5 className="fw-bold text-undefined">Cloud Storage</h5>
                    <p className="mt-2 mb-0">
                      Get your blood tests delivered at home collect a sample
                      from the news your blood tests.
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-4">
                    <div className="py-4">
                      <img
                        className="img-fluid"
                        src="assets/img/illustrations/support.png"
                        width={90}
                        alt=""
                      />
                    </div>
                    <h5 className="fw-bold text-undefined">Customer support</h5>
                    <p className="mt-2 mb-0">
                      Get your blood tests delivered at home collect a sample
                      from the news your blood tests.
                    </p>
                  </div>
                </div>
              </div>
              <a
                className="btn btn-lg btn-primary rounded-pill hover-top"
                href="#"
                role="button"
              >
                See all
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* end of .container*/}
    </section>
  );
};

export default Features2;
