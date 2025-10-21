import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";

const LandingPage = () => {

  const [isSimOpen, setIsSimOpen] = useState(false);
  const [dsp, setDsp] = useState(4000000);
  const [ukt, setUkt] = useState(3500000);
  const [beasiswa, setBeasiswa] = useState(20);
  const [semester, setSemester] = useState(8);

  const effectiveUkt = Math.max(0, ukt * (1 - beasiswa / 100));
  const totalBiaya = dsp + effectiveUkt * semester;
  const perSemester = effectiveUkt;
  const perBulan = Math.round(effectiveUkt / 6);

  return (
    <div className="min-h-screen font-inter text-gray-800 bg-gradient-to-b from-[#FFF8E6] via-white to-[#E6FFF4]">
      {/* HEADER */}
      <motion.header initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="flex justify-between items-center px-8 py-5 bg-white shadow-md sticky top-0 z-50 border-b border-[#E3F2F0]">
        <div className="flex items-center gap-3">
          <img src="/landing_page/logo_unpas.png" alt="Logo UNPAS" className="h-10" style={{width: "80px"}}/>
          <h1 className="text-xl font-bold text-[#F9A826]">UNPAS PMB</h1>
        </div>
        <nav className="hidden md:flex gap-8 text-sm font-semibold">
          <a href="#story" className="hover:text-[#3CAEA3] transition">Kenapa UNPAS</a>
          <a href="#fakultas" className="hover:text-[#3CAEA3] transition">Fakultas</a>
          <a href="#daftar" className="hover:text-[#3CAEA3] transition">Daftar</a>
        </nav>
      </motion.header>

      {/* HERO SECTION */}
      <section id="hero" className="flex flex-col md:flex-row items-center justify-between px-10 py-20 gap-10">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="md:w-1/2 space-y-6">
          <h2 className="text-5xl font-bold leading-tight text-gray-900">
            Dulu aku juga ragu... <span className="text-[#F9A826]">tapi di UNPAS, aku menemukan versi terbaik diriku.</span>
          </h2>
          <p className="text-gray-700 text-lg">
            Kampus yang tumbuh bersama mimpi anak muda Indonesia — tempat kamu belajar percaya diri, berani melangkah, dan menemukan panggilan hidupmu.
          </p>
          <div className="flex gap-4">
            <button className="bg-[#F9A826] hover:bg-[#FFB84D] text-white px-6 py-3 rounded-xl font-semibold shadow-lg transition">Daftar Sekarang</button>
            <button onClick={() => setIsSimOpen(true)} className="border border-[#3CAEA3] text-[#3CAEA3] hover:bg-[#3CAEA3] hover:text-white px-6 py-3 rounded-xl font-semibold transition">Coba Simulasi Biaya</button>
          </div>
        </motion.div>
        <motion.img initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} src="/hero-students.png" alt="Mahasiswa UNPAS" className="w-full md:w-1/2 rounded-3xl shadow-xl" />
      </section>

      {/* STORY SECTION */}
      <section id="story" className="bg-[#F7FBFF] px-10 py-20 text-center">
        <motion.h3 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-3xl font-bold text-gray-900">
          Kami paham perasaanmu
        </motion.h3>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }} className="mt-8 max-w-3xl mx-auto text-gray-700 leading-relaxed space-y-3">
          <p>Kami tahu, memilih kampus bukan hal mudah. Ada banyak pertanyaan di kepala:</p>
          <p className="italic">“Apakah aku bisa beradaptasi?” “Apakah jurusan ini cocok buatku?” “Bagaimana kalau nanti aku gagal?”</p>
          <p><strong>Tenang. Kamu tidak sendirian.</strong> Setiap mahasiswa UNPAS juga pernah berada di titik itu. Mereka memulai dari rasa ragu, lalu berubah menjadi pribadi yang percaya diri — karena mereka tumbuh bersama lingkungan yang suportif dan dosen yang peduli.</p>
        </motion.div>
      </section>

      {/* NILAI & TRANSFORMASI */}
      <section id="nilai" className="bg-gradient-to-b from-[#E6FFF4] to-[#FFF8E6] py-20 px-10 text-center">
        <h3 className="text-3xl font-bold text-gray-900 mb-10">Bersama, Kita Maju</h3>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            { icon: '🤝', title: 'Kebersamaan', color: '#3CAEA3', desc: 'Kebersamaan membangun keberanian.' },
            { icon: '💡', title: 'Kreativitas', color: '#F9A826', desc: 'Kreativitas lahir dari lingkungan yang hangat.' },
            { icon: '🏅', title: 'Prestasi', color: '#3CAEA3', desc: 'Prestasi tumbuh dari rasa percaya diri yang dibangun bersama.' }
          ].map((v, i) => (
            <motion.div key={i} whileHover={{ scale: 1.05 }} className="rounded-2xl bg-white p-8 shadow-md border-t-4" style={{ borderColor: v.color }}>
              <h4 className="text-5xl mb-3">{v.icon}</h4>
              <h5 className="text-xl font-semibold" style={{ color: v.color }}>{v.title}</h5>
              <p className="text-gray-600 mt-2">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAKULTAS */}
      <section id="fakultas" className="bg-[#F9FAFB] py-20 px-10 text-center">
        <h3 className="text-3xl font-bold text-gray-900">Temukan Rumah Belajarmu</h3>
        <p className="mt-4 text-gray-700">Apa pun passion dan minatmu, UNPAS punya tempat untukmu berkembang.</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {["FEB", "FT", "FISIP", "FH", "FKIP", "FISS", "FK", "Pascasarjana"].map((f) => (
            <motion.div key={f} whileHover={{ scale: 1.05 }} className="bg-white p-6 rounded-2xl shadow-sm border border-[#E3F2F0]">
              <h4 className="text-lg font-semibold text-[#3CAEA3]">Fakultas {f}</h4>
              <a href="#" className="text-[#F9A826] font-medium mt-3 inline-block hover:underline">Lihat Program →</a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FORM PENDAFTARAN */}
      <section id="daftar" className="bg-[#F7FBFF] py-20 px-10">
        <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl p-10 text-center">
          <h3 className="text-3xl font-bold text-gray-900">Yuk, mulai langkah pertamamu menuju masa depan cerah!</h3>
          <p className="text-gray-600 mt-3">Cukup isi form singkat ini. Tim kami akan bantu kamu mengenal jurusan, biaya, dan jalur masuk yang paling cocok.</p>
          <form className="mt-8 grid gap-6 text-left">
            {['Nama Lengkap', 'Asal Sekolah', 'Nomor WhatsApp'].map((label, i) => (
              <label key={i} className="block">
                <span className="block text-sm font-semibold text-gray-800">{label}</span>
                <input className="mt-2 w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#F9A826]" placeholder={`Isi ${label.toLowerCase()} kamu`} />
              </label>
            ))}
            <label className="block">
              <span className="block text-sm font-semibold text-gray-800">Jalur Masuk</span>
              <select className="mt-2 w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#3CAEA3]">
                <option>Reguler</option>
                <option>RPL</option>
                <option>Beasiswa UNPAS</option>
                <option>Alih Jenjang</option>
              </select>
            </label>
            <button className="w-full bg-[#F9A826] hover:bg-[#FFB84D] text-white font-semibold py-3 rounded-xl shadow-lg transition">Kirim & Dapatkan Info Seru 🎓</button>
            <p className="text-xs text-gray-500 text-center">Data kamu aman. Kami tidak akan membagikan ke pihak lain.</p>
          </form>
        </div>
      </section>

      {/* MODAL SIMULASI BIAYA */}
      {isSimOpen && (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-2xl shadow-xl max-w-lg w-full">
            <h4 className="text-2xl font-bold text-gray-900 mb-4">Simulasi Biaya Kuliah</h4>
            <label className="block mb-4">
              <span className="text-sm font-medium text-gray-700">Beasiswa (%)</span>
              <input type="range" min={0} max={100} step={5} value={beasiswa} onChange={(e) => setBeasiswa(parseInt(e.target.value))} className="w-full accent-[#3CAEA3]" />
              <p className="text-right text-sm text-gray-600">{beasiswa}%</p>
            </label>
            <div className="bg-[#F7FBFF] p-4 rounded-xl">
              <p>Per Semester: <strong>Rp {perSemester.toLocaleString('id-ID')}</strong></p>
              <p>Per Bulan: <strong>Rp {perBulan.toLocaleString('id-ID')}</strong></p>
              <p>Total Hingga Lulus: <strong>Rp {totalBiaya.toLocaleString('id-ID')}</strong></p>
            </div>
            <div className="mt-6 flex justify-end gap-3">
              <button onClick={() => setIsSimOpen(false)} className="px-4 py-2 rounded-xl border">Tutup</button>
              <a href="#daftar" onClick={() => setIsSimOpen(false)} className="px-4 py-2 rounded-xl bg-[#F9A826] text-white font-semibold">Isi Form</a>
            </div>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer className="bg-[#3CAEA3] text-white text-center py-10 mt-20">
        <p className="text-lg font-medium">Ikuti cerita inspiratif mahasiswa UNPAS:</p>
        <div className="flex justify-center gap-6 mt-3 text-sm">
          <a href="#" className="hover:underline">Instagram</a>
          <a href="#" className="hover:underline">YouTube</a>
          <a href="#" className="hover:underline">TikTok</a>
        </div>
        <p className="mt-6 font-medium">“Bersama, Kita Maju.”</p>
        <p className="mt-2 text-white/80 text-sm">© 2025 Universitas Pasundan</p>
      </footer>
    </div>
  );
}

export default LandingPage