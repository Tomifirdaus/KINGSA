'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Sparkles,
  ArrowRight,
  ShoppingBag,
  Package
} from 'lucide-react';

export default function MemberProdukPage() {
  const catalogImages = [
    { src: '/satu.jpg', alt: 'Halaman 1' },
    { src: '/dua.jpg', alt: 'Halaman 2' },
    { src: '/tiga.jpg', alt: 'Halaman 3' },
    { src: '/empat.jpg', alt: 'Halaman 4' },
    { src: '/enam.jpg', alt: 'Halaman 6' },
    { src: '/tujuh.jpg', alt: 'Halaman 7' },
    { src: '/delapan.jpg', alt: 'Halaman 8' },
    { src: '/sembilan.jpg', alt: 'Halaman 9' },
    { src: '/sepuluh.jpg', alt: 'Halaman 10' },
    { src: '/sebelas.jpg', alt: 'Halaman 11' },
    { src: '/duabelas.jpg', alt: 'Halaman 12' },
    { src: '/tigabelas.jpg', alt: 'Halaman 13' },
    { src: '/empatbelas.jpg', alt: 'Halaman 14' },
    { src: '/limabelas.jpg', alt: 'Halaman 15' },
    { src: '/enambelas.jpg', alt: 'Halaman 16' },
    { src: '/tujuhbelas.jpg', alt: 'Halaman 17' },
    { src: '/delapanbelas.jpg', alt: 'Halaman 18' },
    { src: '/sembilanbelas.jpg', alt: 'Halaman 19' },
    { src: '/duapuluh.jpg', alt: 'Halaman 20' },
    { src: '/duasatu.jpg', alt: 'Halaman 21' },
    { src: '/duadua.jpg', alt: 'Halaman 22' },
    { src: '/duatiga.jpg', alt: 'Halaman 23' },
    { src: '/duaempat.jpg', alt: 'Halaman 24' },
    { src: '/dualima.jpg', alt: 'Halaman 25' },
    { src: '/duaenam.jpg', alt: 'Halaman 26' },
    { src: '/duatujuh.jpg', alt: 'Halaman 27' },
    { src: '/duadelapan.jpg', alt: 'Halaman 28' },
    { src: '/duasembilan.jpg', alt: 'Halaman 29' },
    { src: '/tigapuluh.jpg', alt: 'Halaman 30' },
  ];

  return (
    // ─── BACKGROUND PREMIUM DENGAN MESH GLOW & GRID PATTERN ───
    <div className="space-y-10 pb-16 relative bg-[#040A14] text-slate-100 min-h-screen p-4 md:p-8 antialiased overflow-hidden">

      {/* 1. Pola Grid Modern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-60 pointer-events-none" />

      {/* 2. Cahaya Pendaran Aksentuasi Emas & Hijau */}
      <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-gradient-to-tr from-[#D4AF37]/10 to-transparent rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[500px] h-[500px] bg-[#0F766E]/10 rounded-full blur-[130px] pointer-events-none" />

      {/* ─── PARAGRAF 1: HERO SECTION (TYPOGRAPHY OPTIMIZED) ─── */}
      <div className="bg-gradient-to-br from-[#0B1524]/90 via-[#060F1E]/90 to-[#040A14]/90 border border-slate-800/80 backdrop-blur-xl rounded-3xl p-6 md:p-12 shadow-[0_0_50px_rgba(212,175,55,0.03)] relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-[350px] h-[350px] bg-[#D4AF37]/15 rounded-full blur-[80px] pointer-events-none" />

        <div className="max-w-4xl space-y-6 relative z-10">
          {/* Badge Atas */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-gradient-to-r from-[#D4AF37]/15 to-transparent border border-[#D4AF37]/2.5 text-[#F1C40F] rounded-full text-[10px] font-bold tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5 animate-pulse text-[#D4AF37]" /> Katalog Mitra Bisnis
          </div>

          {/* Judul Utama yang Lebih Tertata */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-amber-400 tracking-wide font-serif uppercase leading-[1.25] md:leading-[1.25] text-balance">
            Tentukan Produk Mana yang Kamu Suka <br className="hidden lg:inline" /> Untuk Memulai Usaha
          </h1>

          {/* Garis Pembatas Halus */}
          <div className="h-[2px] w-20 bg-gradient-to-r from-[#D4AF37] to-transparent rounded-full" />

          {/* Deskripsi */}
          <p className="text-xs sm:text-sm text-slate-300/90 leading-relaxed max-w-3xl font-sans font-normal tracking-normal">
            Pelajari setiap spesifikasi produk unggulan dari <span className="text-white font-semibold">PT Bersama Kingsa Sejahtera</span>. Mulai dari varian kecantikan, produk kesehatan premium, hingga wewangian eksklusif yang dirancang khusus untuk memenuhi pasar secara luas serta melipatgandakan omset bisnis Anda.
          </p>
        </div>
      </div>

      {/* ─── PARAGRAF 2: SEKSI TAMPILAN FOTO KATALOG (UKURAN ASLI UTUH) ─── */}
      <div className="relative z-10 bg-[#0B1524]/60 backdrop-blur-md rounded-3xl p-6 md:p-8 border border-slate-800/60 shadow-xl space-y-6">
        <div className="space-y-3">
          <div className="flex items-center gap-4">
            <div className="p-2.5 bg-amber-950/40 border border-[#D4AF37]/20 text-[#D4AF37] rounded-xl shadow-lg">
              <Package className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base md:text-lg font-black text-slate-100 uppercase tracking-wider font-serif">
                Katalog Produk Resmi
              </h3>
              <div className="h-0.5 w-12 bg-[#D4AF37] mt-0.5" />
            </div>
          </div>
          <p className="text-xs md:text-sm text-slate-300/90 leading-relaxed pt-1">
            Berikut adalah detail katalog produk secara utuh, lengkap dengan detail takaran gramasi, kandungan bahan aktif premium, serta potensi poin bisnis Anda.
          </p>
        </div>

        {/* List Gambar */}
        <div className="space-y-6">
          {catalogImages.map((image, index) => (
            <div 
              key={index} 
              className="w-full rounded-2xl overflow-hidden border border-slate-800 bg-[#060F1E] relative group shadow-[0_0_30px_rgba(0,0,0,0.3)]"
            >
              <Image
                src={image.src}
                alt={`Katalog Produk Resmi PT Bersama Kingsa Sejahtera - ${image.alt}`}
                width={0}
                height={0}
                sizes="100vw"
                priority={index === 0}
                quality={95}
                className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.01]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#040A14]/20 via-transparent to-transparent pointer-events-none" />
            </div>
          ))}
        </div>
      </div>

      {/* ─── PARAGRAF 3: TOMBOL FORM PENGISIAN PRODUK USAHA ─── */}
      <div className="relative z-10 bg-gradient-to-r from-[#D4AF37] via-[#C5A028] to-[#9A7D0A] text-[#060F1E] rounded-3xl p-6 md:p-10 shadow-2xl flex flex-col md:flex-row justify-between items-center overflow-hidden group gap-6">
        <div className="absolute -bottom-10 -right-10 w-36 h-36 bg-white/20 rounded-full blur-2xl pointer-events-none" />

        <div className="space-y-2 text-center md:text-left max-w-xl">
          <span className="text-[9px] bg-[#060F1E] text-[#D4AF37] font-black px-2.5 py-0.5 rounded-md uppercase tracking-widest inline-block mb-1">
            Langkah Awal Kemitraan
          </span>
          <h3 className="text-lg md:text-xl font-black tracking-tight uppercase font-serif leading-tight">
            Sudah Menemukan Produk Pilihan Anda?
          </h3>
          <p className="text-xs md:text-sm font-medium text-[#060F1E]/90 leading-relaxed">
            Klik tombol di samping untuk langsung menuju halaman form pengisian pilihan produk yang disukai untuk memulai langkah awal usaha mandiri Anda yang penuh keberkahan.
          </p>
        </div>

        <Link
          href="/member/produk/pilih-usaha"
          className="w-full md:w-auto shrink-0 bg-[#060F1E] text-white py-4 px-8 rounded-xl text-xs md:text-sm font-black shadow-2xl hover:bg-slate-900 transition-all duration-300 flex items-center justify-center gap-3 group whitespace-nowrap tracking-wide uppercase"
        >
          <ShoppingBag className="w-4 h-4 text-[#D4AF37]" />
          Isi Form Pilihan Usaha
          <ArrowRight className="w-4 h-4 text-[#D4AF37] transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>

    </div>
  );
}