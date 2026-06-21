'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Building2, 
  History, 
  MapPin, 
  ShieldCheck, 
  Target, 
  Compass, 
  ArrowRight,
  CheckCircle2,
  Award,
  Sparkles
} from 'lucide-react';

export default function MemberDashboardPage() {
  
  const commitments = [
    "Menyediakan produk berkualitas premium & tersertifikasi",
    "Sistem bisnis syariah yang transparan, adil, tanpa kharar",
    "Dukungan penuh & ekosistem mentor untuk setiap member",
    "Pelatihan kepemimpinan dan pengembangan diri berkelanjutan"
  ];

  return (
    // ─── BACKGROUND PREMIUM DENGAN MESH GLOW & GRID PATTERN ───
    <div className="space-y-8 pb-16 relative bg-[#040A14] text-slate-100 min-h-screen p-4 md:p-8 antialiased overflow-hidden">
      
      {/* 1. Pola Grid Modern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-60 pointer-events-none" />
      
      {/* 2. Cahaya Pendaran Aksentuasi Emas & Hijau */}
      <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-gradient-to-tr from-[#D4AF37]/10 to-transparent rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[500px] h-[500px] bg-[#0F766E]/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-[40%] right-[20%] w-[400px] h-[400px] bg-[#B7950B]/5 rounded-full blur-[120px] pointer-events-none" />

      {/* ─── PARAGRAF 1: HERO SECTION ─── */}
      <div className="bg-gradient-to-br from-[#0B1524]/90 via-[#060F1E]/90 to-[#040A14]/90 border border-slate-800/80 backdrop-blur-xl rounded-3xl p-6 md:p-10 shadow-[0_0_50px_rgba(212,175,55,0.03)] relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-[350px] h-[350px] bg-[#D4AF37]/15 rounded-full blur-[80px] pointer-events-none" />
        
        <div className="max-w-3xl space-y-3 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-[#D4AF37]/20 to-transparent border border-[#D4AF37]/30 text-[#F1C40F] rounded-full text-[11px] font-bold tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5 animate-pulse text-[#D4AF37]" /> Mitra Bisnis Terpercaya Anda
          </div>
          
          <h1 className="text-2xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-[#D4AF37] tracking-tight font-serif uppercase leading-tight">
            PT BERSAMA KINGSA SEJAHTERA
          </h1>
          
          <div className="h-0.5 w-16 bg-gradient-to-r from-[#D4AF37] to-[#F1C40F] rounded-full my-2" />
          
          <p className="text-xs md:text-base text-[#D4AF37] font-medium tracking-wide max-w-xl font-sans opacity-95">
            Membangun Kesejahteraan Berbasis Syariah & Amanah
          </p>
        </div>
      </div>

      {/* ─── PARAGRAF 2: FOTO UTAMA PERUSAHAAN (UKURAN ASLI / PROPORSIONAL) ─── */}
      <div className="relative z-10">
        {/* Mengubah aspect ratio menjadi h-auto agar tinggi membungkus gambar secara alami */}
        <div className="w-full h-auto rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-800/60 bg-[#0B1524] relative group">
          {/* Mengubah h-full object-cover menjadi h-auto object-contain agar foto tampil utuh tanpa terpotong */}
          <img 
            src="/tempat.jpg" 
            alt="Kantor PT Bersama Kingsa Sejahtera" 
            className="w-full h-auto object-contain transition-transform duration-700 ease-out group-hover:scale-102"
          />
          {/* Overlay gradasi disesuaikan agar tetap proporsional di bagian bawah */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#040A14] via-transparent to-transparent opacity-80 pointer-events-none" />
          <div className="absolute bottom-4 left-4 md:bottom-6 md:left-8 text-white z-10 space-y-1">
            <span className="text-[10px] uppercase tracking-widest bg-[#0F766E] text-white px-2 py-0.5 rounded font-bold shadow-sm">Pusat Operasional</span>
            <h3 className="text-base md:text-xl font-bold font-serif text-slate-100">Kenyamanan & Profesionalisme Layanan Kami</h3>
          </div>
        </div>
      </div>

      {/* ─── GRID PROFILE & SEJARAH (PAS & SEIMBANG) ─── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 relative z-10">
        
        {/* Paragraf 3: Profil Perusahaan */}
        <div className="bg-[#0B1524]/60 backdrop-blur-md rounded-3xl p-6 md:p-8 border border-slate-800/60 shadow-xl hover:shadow-[0_0_30px_rgba(15,118,110,0.1)] transition-all duration-300 flex flex-col justify-between group">
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-gradient-to-br from-[#0F766E] to-[#115E59] text-white rounded-2xl shadow-lg">
                <Building2 className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-base md:text-lg font-black text-slate-100 uppercase tracking-wide font-serif">
                  Profil Perusahaan
                </h2>
                <div className="h-0.5 w-12 bg-[#0F766E] mt-0.5" />
              </div>
            </div>
            <p className="text-xs md:text-sm text-slate-300 leading-relaxed pt-1">
              <span className="font-bold text-white text-sm">PT Bersama Kingsa Sejahtera</span> adalah perusahaan network marketing terdepan yang berkomitmen tinggi untuk menghadirkan produk berkualitas premium sekaligus membuka peluang bisnis inklusif yang menguntungkan bagi seluruh lapisan masyarakat Indonesia. Kami berdiri kokoh sebagai solusi finansial mandiri dengan asas mutlak kejujuran dan keberkahan.
            </p>
          </div>
          <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center gap-2 text-xs font-bold text-[#2ECC71]">
            <Award className="w-4 h-4" /> Terdaftar & Berizin Resmi Nasional
          </div>
        </div>

        {/* Paragraf 4: Sejarah & Alamat Perusahaan */}
        <div className="bg-[#0B1524]/60 backdrop-blur-md rounded-3xl p-6 md:p-8 border border-slate-800/60 shadow-xl hover:shadow-[0_0_30px_rgba(212,175,55,0.1)] transition-all duration-300 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-gradient-to-br from-[#B7950B] to-[#9A7D0A] text-white rounded-2xl shadow-lg">
                <History className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-base md:text-lg font-black text-slate-100 uppercase tracking-wide font-serif">
                  Sejarah Perusahaan
                </h2>
                <div className="h-0.5 w-12 bg-[#B7950B] mt-0.5" />
              </div>
            </div>
            <p className="text-xs md:text-sm text-slate-300 leading-relaxed pt-1">
              Lahir dari visi besar untuk mengangkat perekonomian umat, perjalanan kami diinisiasi oleh para pakar industri dengan tekad bulat mematahkan stigma negatif pasar. Kami merancang sistem kemitraan revolusioner yang adil, transparan, serta produk berbasis kemaslahatan umat jangka panjang.
            </p>
          </div>

          {/* Kontak Alamat Kantor */}
          <div className="p-4 bg-[#060F1E]/80 rounded-2xl border border-slate-800/80 flex gap-4 transition-colors duration-300 hover:bg-[#060F1E]">
            <div className="w-9 h-9 rounded-xl bg-red-950/50 flex items-center justify-center text-red-400 shrink-0">
              <MapPin className="w-4 h-4 animate-pulse" />
            </div>
            <div className="space-y-0.5">
              <h4 className="text-[11px] font-extrabold text-slate-200 uppercase tracking-wider">Kantor Pusat (Yogyakarta):</h4>
              <p className="text-[11px] md:text-xs text-slate-400 leading-relaxed font-medium">
                Jl. Baturan Raya No.29B, Trihanggo, Gamping, Sleman, Yogyakarta 55291
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* ─── SEKSI VISI MISI & KOMITMEN ─── */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 relative z-10">
        
        {/* Paragraf 6: Visi & Misi */}
        <div className="lg:col-span-2 bg-[#0B1524]/60 backdrop-blur-md rounded-3xl p-6 md:p-8 border border-slate-800/60 shadow-xl space-y-6 flex flex-col justify-center">
          
          {/* Visi */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-[#D4AF37]">
              <Target className="w-4 h-4" />
              <h3 className="text-[11px] font-black uppercase tracking-widest text-slate-400">Visi Utama</h3>
            </div>
            <p className="text-xs md:text-sm font-bold text-slate-100 leading-relaxed italic border-l-4 border-[#D4AF37] pl-4 font-serif bg-amber-950/20 py-2.5 rounded-r-xl">
              "Menjadi perusahaan yang amanah dan terpercaya dalam meningkatkan kesejahteraan umat melalui produk halal dan berkualitas, serta menyediakan peluang bisnis yang berkah dan berkelanjutan."
            </p>
          </div>

          {/* Misi */}
          <div className="space-y-2 pt-4 border-t border-slate-800/60">
            <div className="flex items-center gap-2 text-[#0F766E]">
              <Compass className="w-4 h-4" />
              <h3 className="text-[11px] font-black uppercase tracking-widest text-slate-400">Misi Perusahaan</h3>
            </div>
            <p className="text-xs md:text-sm text-slate-300 leading-relaxed font-medium">
              Meningkatkan kesejahteraan masyarakat dengan memberikan peluang usaha yang halal, mudah dijalankan, and sesuai syariah.
            </p>
          </div>

        </div>

        {/* Paragraf 5: Komitmen Kami */}
        <div className="bg-gradient-to-b from-[#060F1E] to-[#040A14] text-slate-300 rounded-3xl p-6 border border-slate-800 shadow-2xl space-y-4 flex flex-col justify-center">
          <div className="flex items-center gap-3 text-[#D4AF37]">
            <ShieldCheck className="w-5 h-5" />
            <h2 className="text-sm font-black uppercase tracking-wider font-serif">
              Komitmen Agung
            </h2>
          </div>
          
          <ul className="space-y-3">
            {commitments.map((item, index) => (
              <li key={index} className="flex items-start gap-2.5 text-xs leading-snug group">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5 transition-transform duration-300 group-hover:scale-110" />
                <span className="text-slate-300 group-hover:text-white transition-colors">{item}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* ─── SEKSI LEGALITAS & CTA KATALOG PRODUK ─── */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch relative z-10">
        
        {/* Paragraf 7: Legalitas Perusahaan */}
        <div className="lg:col-span-3 bg-[#0B1524]/60 backdrop-blur-md rounded-3xl p-6 border border-slate-800/60 shadow-xl space-y-4 flex flex-col justify-between">
          <div className="flex items-center justify-between border-b border-slate-800/60 pb-3">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-emerald-950/50 text-emerald-400 rounded-xl">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-sm md:text-base font-black text-slate-100 uppercase tracking-wide font-serif">
                  Kepatuhan Hukum & Legalitas
                </h2>
                <p className="text-[11px] text-slate-400">Transparansi dokumen resmi PT Bersama Kingsa Sejahtera</p>
              </div>
            </div>
            <span className="hidden sm:inline-block text-[10px] bg-emerald-950 text-emerald-400 border border-emerald-800 font-bold px-2 py-0.5 rounded-full uppercase">100% Valid</span>
          </div>
          
          <div className="w-full aspect-[4/3] sm:aspect-[16/9] rounded-2xl overflow-hidden border border-slate-800/80 bg-[#060F1E] relative group flex items-center justify-center p-0.5 sm:p-1 shadow-inner">
            <img 
              src="/legalitas.jpg" 
              alt="Legalitas Perusahaan Resmi" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.01]"
            />
          </div>
        </div>

        {/* Paragraf 8: Halaman Baru Produk */}
        <div className="lg:col-span-3 bg-gradient-to-r from-[#D4AF37] via-[#C5A028] to-[#9A7D0A] text-[#060F1E] rounded-3xl p-6 md:p-8 shadow-2xl flex flex-col md:flex-row justify-between items-center relative overflow-hidden group gap-4">
          <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white/20 rounded-full blur-xl pointer-events-none" />
          
          <div className="space-y-1 text-center md:text-left">
            <span className="text-[9px] bg-[#060F1E] text-[#D4AF37] font-black px-2 py-0.5 rounded-md uppercase tracking-widest inline-block mb-1">Exclusive access</span>
            <h3 className="text-lg md:text-xl font-black tracking-tight uppercase font-serif leading-tight">
              Eksplorasi Produk Unggulan Kami
            </h3>
            <p className="text-xs font-medium text-[#060F1E]/85 max-w-xl">
              Dapatkan produk fungsional berkualitas tinggi untuk memenuhi kebutuhan kesehatan harian serta kembangkan omset bisnis Anda hari ini.
            </p>
          </div>
          
          <Link 
            href="/member/produk" 
            className="w-full md:w-auto shrink-0 bg-[#060F1E] text-white py-3.5 px-6 rounded-xl text-xs font-extrabold shadow-lg hover:bg-slate-900 transition-all duration-300 flex items-center justify-center gap-2 group whitespace-nowrap"
          >
            Buka Katalog Produk
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

      </div>

    </div>
  );
}