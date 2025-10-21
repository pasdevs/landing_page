import React, { useState } from "react";
import { motion } from "framer-motion";

const LandingPage = () => {
  const [isSimOpen, setIsSimOpen] = useState(false);
  const [dsp, setDsp] = useState(4000000);
  const [ukt, setUkt] = useState(3500000);
  const [beasiswa, setBeasiswa] = useState(20);
  const [semester] = useState(8);

  const effectiveUkt = Math.max(0, ukt * (1 - beasiswa / 100));
  const totalBiaya = dsp + effectiveUkt * semester;
  const perSemester = effectiveUkt;
  const perBulan = Math.round(effectiveUkt / 6);

  return (
    <div style={{ fontFamily: "Inter, sans-serif", backgroundColor: "#fff" }}>
      {/* HEADER */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="navbar navbar-expand-lg bg-white shadow-sm sticky-top border-bottom"
      >
        <div className="container py-2">
          <a className="navbar-brand d-flex align-items-center" href="#">
            <img
              src="/landing_page/logo_unpas.png"
              alt="Logo UNPAS"
              width="80"
              className="me-2"
            />
            <span className="fw-bold text-warning fs-5">UNPAS PMB</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav fw-semibold">
              <li className="nav-item mx-2">
                <a href="#story" className="nav-link text-dark">
                  Kenapa UNPAS
                </a>
              </li>
              <li className="nav-item mx-2">
                <a href="#fakultas" className="nav-link text-dark">
                  Fakultas
                </a>
              </li>
              <li className="nav-item mx-2">
                <a href="#daftar" className="nav-link text-dark">
                  Daftar
                </a>
              </li>
            </ul>
          </div>
        </div>
      </motion.header>

      {/* HERO */}
      <section id="hero" className="container py-5 my-5">
        <div className="row align-items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="col-md-6"
          >
            <h2 className="fw-bold display-5 mb-3">
              Dulu aku juga ragu...{" "}
              <span className="text-warning">
                tapi di UNPAS, aku menemukan versi terbaik diriku.
              </span>
            </h2>
            <p className="text-secondary fs-5">
              Kampus yang tumbuh bersama mimpi anak muda Indonesia — tempat kamu belajar
              percaya diri, berani melangkah, dan menemukan panggilan hidupmu.
            </p>
            <div className="d-flex gap-3 mt-4">
              <button className="btn btn-warning text-white fw-semibold shadow">
                Daftar Sekarang
              </button>
              <button
                className="btn btn-outline-success fw-semibold"
                onClick={() => setIsSimOpen(true)}
              >
                Coba Simulasi Biaya
              </button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="col-md-6 mt-5 mt-md-0"
          >
            <img
              src="/hero-students.png"
              alt="Mahasiswa UNPAS"
              className="img-fluid rounded-4 shadow-lg"
            />
          </motion.div>
        </div>
      </section>

      {/* STORY */}
      <section id="story" className="py-5 text-center bg-light">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="fw-bold fs-2"
        >
          Kami paham perasaanmu
        </motion.h3>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="container mt-4 text-secondary fs-5"
          style={{ maxWidth: "800px" }}
        >
          <p>Kami tahu, memilih kampus bukan hal mudah. Ada banyak pertanyaan di kepala:</p>
          <p className="fst-italic">
            “Apakah aku bisa beradaptasi?” “Apakah jurusan ini cocok buatku?” “Bagaimana kalau nanti aku gagal?”
          </p>
          <p>
            <strong>Tenang. Kamu tidak sendirian.</strong> Setiap mahasiswa UNPAS juga
            pernah berada di titik itu. Mereka memulai dari rasa ragu, lalu berubah
            menjadi pribadi yang percaya diri — karena mereka tumbuh bersama lingkungan
            yang suportif dan dosen yang peduli.
          </p>
        </motion.div>
      </section>

      {/* NILAI */}
      <section className="py-5 bg-body-tertiary text-center">
        <h3 className="fw-bold fs-2 mb-4">Bersama, Kita Maju</h3>
        <div className="container">
          <div className="row g-4">
            {[
              { icon: "🤝", title: "Kebersamaan", color: "success", desc: "Kebersamaan membangun keberanian." },
              { icon: "💡", title: "Kreativitas", color: "warning", desc: "Kreativitas lahir dari lingkungan yang hangat." },
              { icon: "🏅", title: "Prestasi", color: "success", desc: "Prestasi tumbuh dari rasa percaya diri yang dibangun bersama." },
            ].map((v, i) => (
              <motion.div
                whileHover={{ scale: 1.05 }}
                key={i}
                className="col-md-4"
              >
                <div className={`card border-top border-${v.color} shadow-sm rounded-4`}>
                  <div className="card-body">
                    <h4 className="fs-1">{v.icon}</h4>
                    <h5 className={`fw-bold text-${v.color}`}>{v.title}</h5>
                    <p className="text-secondary">{v.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAKULTAS */}
      <section id="fakultas" className="py-5 text-center bg-light">
        <h3 className="fw-bold fs-2">Temukan Rumah Belajarmu</h3>
        <p className="text-secondary">
          Apa pun passion dan minatmu, UNPAS punya tempat untukmu berkembang.
        </p>
        <div className="container mt-5">
          <div className="row g-4">
            {["FEB", "FT", "FISIP", "FH", "FKIP", "FISS", "FK", "Pascasarjana"].map((f) => (
              <motion.div
                whileHover={{ scale: 1.05 }}
                key={f}
                className="col-sm-6 col-lg-3"
              >
                <div className="card shadow-sm rounded-4 border-success-subtle">
                  <div className="card-body">
                    <h5 className="text-success fw-semibold">Fakultas {f}</h5>
                    <a href="#" className="text-warning fw-semibold mt-2 d-inline-block text-decoration-none">
                      Lihat Program →
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FORM */}
      <section id="daftar" className="py-5 bg-body-secondary">
        <div className="container">
          <div className="mx-auto bg-white rounded-4 shadow-lg p-5 text-center" style={{ maxWidth: "700px" }}>
            <h3 className="fw-bold fs-2">Yuk, mulai langkah pertamamu menuju masa depan cerah!</h3>
            <p className="text-secondary mt-3">
              Cukup isi form singkat ini. Tim kami akan bantu kamu mengenal jurusan, biaya, dan jalur masuk yang paling cocok.
            </p>
            <form className="mt-4 text-start">
              {["Nama Lengkap", "Asal Sekolah", "Nomor WhatsApp"].map((label, i) => (
                <div key={i} className="mb-3">
                  <label className="form-label fw-semibold">{label}</label>
                  <input
                    type="text"
                    className="form-control p-3"
                    placeholder={`Isi ${label.toLowerCase()} kamu`}
                  />
                </div>
              ))}
              <div className="mb-4">
                <label className="form-label fw-semibold">Jalur Masuk</label>
                <select className="form-select p-3">
                  <option>Reguler</option>
                  <option>RPL</option>
                  <option>Beasiswa UNPAS</option>
                  <option>Alih Jenjang</option>
                </select>
              </div>
              <button className="btn btn-warning w-100 text-white fw-semibold p-3">
                Kirim & Dapatkan Info Seru 🎓
              </button>
              <p className="text-muted text-center small mt-2">
                Data kamu aman. Kami tidak akan membagikan ke pihak lain.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* MODAL SIMULASI */}
      {isSimOpen && (
        <div className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center bg-dark bg-opacity-50 z-3">
          <div className="bg-white p-4 rounded-4 shadow-lg" style={{ width: "400px" }}>
            <h4 className="fw-bold mb-3">Simulasi Biaya Kuliah</h4>
            <label className="form-label small fw-semibold">
              Beasiswa ({beasiswa}%)
            </label>
            <input
              type="range"
              min={0}
              max={100}
              step={5}
              value={beasiswa}
              onChange={(e) => setBeasiswa(parseInt(e.target.value))}
              className="form-range"
            />
            <div className="bg-body-secondary p-3 rounded-3 mb-3">
              <p>
                Per Semester: <strong>Rp {perSemester.toLocaleString("id-ID")}</strong>
              </p>
              <p>
                Per Bulan: <strong>Rp {perBulan.toLocaleString("id-ID")}</strong>
              </p>
              <p>
                Total Hingga Lulus: <strong>Rp {totalBiaya.toLocaleString("id-ID")}</strong>
              </p>
            </div>
            <div className="d-flex justify-content-end gap-2">
              <button
                className="btn btn-outline-secondary"
                onClick={() => setIsSimOpen(false)}
              >
                Tutup
              </button>
              <a
                href="#daftar"
                onClick={() => setIsSimOpen(false)}
                className="btn btn-warning text-white fw-semibold"
              >
                Isi Form
              </a>
            </div>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer className="bg-success text-white text-center py-5 mt-5">
        <p className="fs-5 fw-medium mb-2">Ikuti cerita inspiratif mahasiswa UNPAS:</p>
        <div className="d-flex justify-content-center gap-3 mb-3">
          <a href="#" className="text-white text-decoration-underline">
            Instagram
          </a>
          <a href="#" className="text-white text-decoration-underline">
            YouTube
          </a>
          <a href="#" className="text-white text-decoration-underline">
            TikTok
          </a>
        </div>
        <p className="fw-medium mb-0">“Bersama, Kita Maju.”</p>
        <p className="text-white-50 small mt-1">© 2025 Universitas Pasundan</p>
      </footer>
    </div>
  );
};

export default LandingPage;