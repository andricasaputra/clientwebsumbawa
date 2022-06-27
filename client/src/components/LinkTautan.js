import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";

import "@splidejs/react-splide/css";

export default function LinkTautan() {
  return (
    <section className="py-8 bg-1000">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h4 className="fw-bold fs-4 display-3 lh-sm mb-3 text-white text-center">Tautan Terkait</h4>

            <p className="text-white text-center mb-5">
              Berikut adalah kumpulan link terkait seputar karantina pertanian.
            </p>

            <Splide
              options={{
                rewind: true,
                autoplay: true,
                type: "loop",
                perPage: 5,
                breakpoints: {
                  1100: {
                    perPage: 3,
                  },
                  800: {
                    perPage: 2,
                  },
                  500: {
                    perPage: 1,
                  },
                },
                gap: 5,
              }}
              aria-label="Tautan Terkait"
            >
              <SplideSlide>
                <img className="img-fluid"
                  style={{ borderRadius: "10px" }}
                  src="/assets/img/tautan-baru/kementan.png"
                  alt="Tautan 1"
                  width={"200px"}
                />
              </SplideSlide>

              <SplideSlide>
                <img className="img-fluid"
                  style={{ borderRadius: "10px" }}
                  src="/assets/img/tautan-baru/barantan-new.png"
                  alt="Tautan 2"
                  width={"200px"}
                />
              </SplideSlide>

              <SplideSlide>
                <img className="img-fluid"
                  style={{ borderRadius: "10px" }}
                  src="/assets/img/tautan-baru/lapor.png"
                  alt="Tautan 3"
                  width={"200px"}
                />
              </SplideSlide>

              <SplideSlide>
                <img className="img-fluid"
                  style={{ borderRadius: "10px" }}
                  src="/assets/img/tautan-baru/sipp.png"
                  alt="Tautan 4"
                  width={"200px"}
                />
              </SplideSlide>

              <SplideSlide>
                <img className="img-fluid"
                  style={{ borderRadius: "10px" }}
                  src="/assets/img/tautan-baru/epersonal.png"
                  alt="Tautan 5"
                  width={"200px"}
                />
              </SplideSlide>

              <SplideSlide>
                <img className="img-fluid"
                  style={{ borderRadius: "10px" }}
                  src="/assets/img/tautan-baru/ppid.png"
                  alt="Tautan 6"
                  width={"200px"}
                />
              </SplideSlide>

              <SplideSlide>
                <img className="img-fluid"
                  style={{ borderRadius: "10px" }}
                  src="/assets/img/tautan-baru/ppk.png"
                  alt="Tautan 7"
                  width={"200px"}
                />
              </SplideSlide>

              <SplideSlide>
                <img className="img-fluid"
                  style={{ borderRadius: "10px" }}
                  src="/assets/img/tautan-baru/simponi.png"
                  alt="Tautan 8"
                  width={"200px"}
                />
              </SplideSlide>

              <SplideSlide>
                <img className="img-fluid"
                  style={{ borderRadius: "10px" }}
                  src="/assets/img/tautan-baru/wbs.png"
                  alt="Tautan 9"
                  width={"200px"}
                />
              </SplideSlide>

              <SplideSlide>
                <img className="img-fluid"
                  style={{ borderRadius: "10px" }}
                  src="/assets/img/tautan-baru/sile.png"
                  alt="Tautan 10"
                  width={"200px"}
                />
              </SplideSlide>

              <SplideSlide>
                <img className="img-fluid"
                  style={{ borderRadius: "10px" }}
                  src="/assets/img/tautan-baru/e-office.png"
                  alt="Tautan 11"
                  width={"200px"}
                />
              </SplideSlide>
            </Splide>
          </div>
        </div>
      </div>
    </section>
  );
}
