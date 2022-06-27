import React from "react";

const Faq = () => {
  return (
    <section className="py-8" id="faq">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6 text-center mb-3">
            <h6 className="fw-bold fs-4 display-3 lh-sm mb-3">
              Pertanyaan yang sering diajukan
            </h6>
            <p className="mb-5">
              Berikut pertanyaan-pertanyaan yang sering diajukan oleh pengguna jasa karantina.
            </p>
          </div>
        </div>
        <div className="row flex-center">
          <div className="col-lg-9">
            <div className="accordion" id="accordionExample">
              <div className="accordion-item mb-2">
                <h2 className="accordion-header" id="heading1">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse1"
                    aria-expanded="true"
                    aria-controls="collapse1"
                  >
                    <span className="mb-0 fw-bold text-start fs-1 text-1000">
                      Apa itu Karantina?
                    </span>
                  </button>
                </h2>
                <div
                  className="accordion-collapse collapse"
                  id="collapse1"
                  aria-labelledby="heading1"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body bg-100">
                    <strong>Karantina adalah</strong> tempat pengasingan dan/atau tindakan sebagai upaya pencegahan masuk dan tersebarnya hama dan penyakit atau organisme pengganggu dari luar negeri dan dari suatu area ke area lain di dalam negeri, atau keluarnya dari dalam wilayah negara Republik Indonesia.

                      <h4 className="text-center" style={{ color: "black", fontWeight: "600" }}>Lebih Lanjut Simak Video Berikut</h4>

                      <i><h5 className="text-center">Video dari <a href="https://www.youtube.com/channel/UCpUidK5g6ff_Q9NDA0ztw2w">Rian HS</a></h5></i>

                      <div className="text-center container-iframe">
                        <iframe className="responsive-iframe " src="https://www.youtube.com/embed/p0Qg61Thy3Q" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
                      </div>

                      
                  </div>
                </div>
              </div>
              <div className="accordion-item mb-2">
                <h2 className="accordion-header" id="heading2">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse2"
                    aria-expanded="true"
                    aria-controls="collapse2"
                  >
                    <span className="mb-0 fw-bold text-start fs-1 text-1000">
                      Kenapa Harus Dikarantina?
                    </span>
                  </button>
                </h2>
                <div
                  className="accordion-collapse collapse"
                  id="collapse2"
                  aria-labelledby="heading2"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body bg-100">
                    Untuk Mencegah Masuk, Tersebar, atau Keluarnya Hama Penyakit Hewan Karantina (HPHK) dan Organisme Pengganggu Tumbuhan Karantina (OPTK) Ke Dalam Wilayah RI, atau Keluar Wilayah RI atau antar area di dalam Wilayah RI, dan Untuk Memastikan Komoditi Yang akan anda lalulintaskan sehat, aman, dan layak konsumsi.


                      <h4 className="text-center" style={{ color: "black", fontWeight: "600" }}>Lebih Lanjut Simak Video Berikut</h4>

                      <i><h5 className="text-center">Video dari <a href="https://www.youtube.com/channel/UCYIiTvzR0nYTrRPqtkthNcg">ilham khalid setiawan</a></h5></i>

                      <div className="text-center container-iframe">
                        <iframe className="responsive-iframe " src="https://www.youtube.com/embed/H3Y-u9K8v0o" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
                      </div>
                  </div>
                </div>
              </div>
              <div className="accordion-item mb-2">
                <h2 className="accordion-header" id="heading3">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse3"
                    aria-expanded="true"
                    aria-controls="collapse3"
                  >
                    <span className="mb-0 fw-bold text-start fs-1 text-1000">
                      Apa Saja Komoditi Yang Wajib Lapor Karantina?
                    </span>
                  </button>
                </h2>
                <div
                  className="accordion-collapse collapse"
                  id="collapse3"
                  aria-labelledby="heading3"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body bg-100">
                   Hewan (Hewan Besar, Hewan Kecil, Unggas, Primata dan sebangsanya), Bahan Asal Hewan/ BAH (Telur, Susu, Madu), Hasil Bahan Asal Hewan/ HBAH (Keju, Bakso, Sosis) Dan Tumbuhan (Benih/Bibit, Pohon, hasil produk pertanian lainnya, Tanaman Hias), Serta Bagian-bagian Tumbuhan / Produk-produknya (Buah, Batang, Bunga).


                      <h4 className="text-center" style={{ color: "black", fontWeight: "600" }}>Lebih Lanjut Simak Video Berikut</h4>

                      <i><h5 className="text-center">Video dari <a href="https://www.youtube.com/channel/UCpUidK5g6ff_Q9NDA0ztw2w">Rian HS</a></h5></i>

                      <div className="text-center container-iframe">
                        <iframe className="responsive-iframe " src="https://www.youtube.com/embed/lUPYcLlhT9Q" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
                      </div>
                  </div>
                </div>
              </div>
              <div className="accordion-item mb-2">
                <h2 className="accordion-header" id="heading4">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse4"
                    aria-expanded="true"
                    aria-controls="collapse4"
                  >
                    <span className="mb-0 fw-bold text-start fs-1 text-1000">
                      Bagaimana Prosedurnya?
                    </span>
                  </button>
                </h2>
                <div
                  className="accordion-collapse collapse"
                  id="collapse4"
                  aria-labelledby="heading4"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body bg-100">
                    <ol>
                      <li>
                         Dilengkapi sertifikat kesehatan dari negara asal dan negara transit bagi hewan, bahan asal hewan, hasil bahan asal hewan, ikan, tumbuhan dan bagian-bagian tumbuhan, kecuali media pembawa yang tergolong benda lain
                      </li>
                      <li>
                        Melalui tempat-tempat pemasukan yang telah ditetapkan
                      </li>
                      <li>
                        Dilaporkan dan diserahkan kepada petugas karantina di tempat-tempat pemasukan untuk keperluan tindakan karantina
                      </li>
                    </ol>.
                  </div>
                </div>
              </div>
              <div className="accordion-item mb-2">
                <h2 className="accordion-header" id="heading5">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse5"
                    aria-expanded="true"
                    aria-controls="collapse5"
                  >
                    <span className="mb-0 fw-bold text-start fs-1 text-1000">
                      Dimana Lapor Karantina?
                    </span>
                  </button>
                </h2>
                <div
                  className="accordion-collapse collapse"
                  id="collapse5"
                  aria-labelledby="heading5"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body bg-100">
                    Kantor Layanan Karantina Pertanian Tersebar Di Berbagai Wilayah Di Indonesia, Temukan Kantor Layanan Kami Di Berbagai Pelabuhan Laut, Pelabuhan Penyeberangan (Ferry), Pelabuhan Sungai, Bandar Udara, Kantor Pos, Dan Pos Lintas Batas Antar Negara.
                  </div>
                </div>
              </div>

              <div className="accordion-item mb-2">
                <h2 className="accordion-header" id="heading6">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse6"
                    aria-expanded="true"
                    aria-controls="collapse6"
                  >
                    <span className="mb-0 fw-bold text-start fs-1 text-1000">
                      Berapa Estimasi Tarif Jasa Karantina?
                    </span>
                  </button>
                </h2>
                <div
                  className="accordion-collapse collapse"
                  id="collapse6"
                  aria-labelledby="heading6"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body bg-100">
                     Berdasarkan Peraturan Pemerintah Nomor 35 Tahun 2016 Tentang Jenis dan Tarif Atas Jenis Penerimaan Negara Bukan Pajak Yang Berlaku Di Kementerian Pertanian, Estimasi Tarif Jasa Karantina Relatif Terhadap Jenis Kebutuhan Anda; 1. Tujuan lalu lintas komoditi (Ekspor, Impor, atau Antar Area Didalam Wilayah RI); 2. Bentuk dan Jenis Komoditi (Hewan besar/hewan kecil, Berbentuk Benih, tanaman hidup/tanaman mati-produk tumbuhan); 3. Jumlah Komoditi/Berat/Tonase serta biaya - biaya atas jasa Tindakan Karantina yang dilakukan (Pemeriksaan baik secara visual atau laboratoris, Perlakuan dan Pengasingan atau Pengamatan
                  </div>

                  <div className="text-center p-2">
                    <a href="#" className="btn btn-dark">Download Tarif Karantina Hewan</a>
                    &nbsp;
                    <a href="#" className="btn btn-dark">Download Tarif Karantina Tumbuhan</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end of .container*/}
    </section>
  );
};

export default Faq;
