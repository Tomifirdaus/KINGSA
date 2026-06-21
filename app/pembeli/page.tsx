'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Sparkles,
  ShoppingBag,
  Package,
  ShoppingCart,
  Star,
  ShieldCheck,
  Truck,
  ChevronRight,
  ArrowRight // Import ArrowRight icon
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
    // ─── BACKGROUND PREMIUM DENGAN MESH GLOW & GRID PATTERN (Warna Awal) ───
    <div className="space-y-10 pb-24 relative bg-[#040A14] text-slate-100 min-h-screen p-4 md:p-8 antialiased overflow-hidden">
      
      {/* 1. Pola Grid Modern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-60 pointer-events-none" />

      {/* 2. Cahaya Pendaran Aksentuasi Emas & Hijau */}
      <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-gradient-to-tr from-[#D4AF37]/10 to-transparent rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[500px] h-[500px] bg-[#0F766E]/10 rounded-full blur-[130px] pointer-events-none" />

      {/* ─── PREMIUM STYLE BREADCRUMB / MINI HEADER (Warna Awal) ─── */}
      <div className="bg-[#0B1524]/60 backdrop-blur-md border border-slate-800/60 rounded-3xl py-3 px-6 shadow-xl relative z-10">
        <div className="max-w-6xl mx-auto flex items-center gap-2 text-xs text-slate-400">
          <span className="font-semibold text-[#D4AF37]">Kingsa</span>
          <ChevronRight className="w-3 h-3 text-slate-600" />
          <span>Kemitraan</span>
          <ChevronRight className="w-3 h-3 text-slate-600" />
          <span className="text-slate-100 truncate">Katalog Produk PT Bersama Kingsa Sejahtera</span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-4 space-y-4 relative z-10">
        
        {/* ─── BANNER INFO / HERO SECTION (Warna Awal) ─── */}
        <div className="bg-gradient-to-br from-[#0B1524]/90 via-[#060F1E]/90 to-[#040A14]/90 border border-slate-800/80 backdrop-blur-xl rounded-3xl p-6 md:p-12 shadow-[0_0_50px_rgba(212,175,55,0.03)] flex flex-col md:flex-row md:items-center justify-between gap-4 overflow-hidden relative group">
          <div className="absolute top-0 right-0 w-[350px] h-[350px] bg-[#D4AF37]/15 rounded-full blur-[80px] pointer-events-none" />

          <div className="space-y-4 relative z-10">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-gradient-to-r from-[#D4AF37]/15 to-transparent border border-[#D4AF37]/2.5 text-[#F1C40F] rounded-full text-[10px] font-bold tracking-widest uppercase">
                <Sparkles className="w-3.5 h-3.5 animate-pulse text-[#D4AF37]" /> 
              </span>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-amber-400 tracking-wide font-serif uppercase leading-[1.25] md:leading-[1.25] text-balance">
                Katalog Resmi Mitra Bisnis
              </h1>
            </div>
            {/* Garis Pembatas Halus */}
            <div className="h-[2px] w-20 bg-gradient-to-r from-[#D4AF37] to-transparent rounded-full" />
            <p className="text-xs sm:text-sm text-slate-300/90 leading-relaxed max-w-3xl font-sans font-normal tracking-normal">
              Pilih produk unggulan terbaik untuk memulai usaha Anda. Dapatkan varian kecantikan, kesehatan premium, dan wewangian eksklusif dengan poin bisnis melimpah.
            </p>
          </div>
          
          {/* Badge Keunggulan ala Premium (Warna Awal) */}
          <div className="flex items-center gap-4 border-t md:border-t-0 md:border-l border-slate-800 pt-3 md:pt-0 md:pl-6 text-xs text-slate-300 shrink-0 relative z-10">
            <div className="flex items-center gap-1.5 p-2 bg-amber-950/40 border border-[#D4AF37]/20 text-[#D4AF37] rounded-xl shadow-lg">
              <ShieldCheck className="w-4 h-4" />
              <span>100% Ori</span>
            </div>
            
          </div>
        </div>

        {/* ─── KATALOG PRODUK (GRID FLUID ALA PREMIUM TIMELINE/FEED, Warna Awal) ─── */}
        <div className="bg-[#0B1524]/60 backdrop-blur-md border border-slate-800/60 rounded-3xl p-6 md:p-8 shadow-xl space-y-6 relative z-10">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <div className="flex items-center gap-2">
              <div className="p-2.5 bg-amber-950/40 border border-[#D4AF37]/20 text-[#D4AF37] rounded-xl shadow-lg">
                <Package className="w-5 h-5" />
              </div>
              <h2 className="text-sm md:text-lg font-black text-slate-100 uppercase tracking-wider font-serif">
                Daftar Produk Pilihan
              </h2>
              <div className="h-0.5 w-12 bg-[#D4AF37] mt-0.5" />
            </div>
            <span className="text-xs text-slate-400">{catalogImages.length} Halaman Terkini</span>
          </div>

          {/* List Gambar yang ditata rapi & responsif (Warna Awal) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {catalogImages.map((image, index) => (
              <div 
                key={index} 
                className="bg-[#060F1E] border border-slate-800 rounded-2xl overflow-hidden hover:border-[#D4AF37] hover:shadow-[0_0_30px_rgba(212,175,55,0.1)] transition-all duration-300 group flex flex-col justify-between"
              >
                {/* Pembungkus Foto Produk */}
                <div className="w-full bg-[#040A14] relative">
                  <Image
                    src={image.src}
                    alt={`Produk Resmi - ${image.alt}`}
                    width={0}
                    height={0}
                    sizes="(max-w-768px) 100vw, 33vw"
                    priority={index < 3}
                    quality={90}
                    className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.01]"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#040A14]/20 via-transparent to-transparent pointer-events-none" />
                  {/* Tag Diskon/Hot Item ala Premium (Warna Awal) di pojok atas */}
                  <div className="absolute top-0 right-0 bg-[#D4AF37] text-[#060F1E] text-[10px] font-bold px-2 py-1 rounded-bl-xl uppercase tracking-widest">
                    PROMO
                  </div>
                </div>

                {/* Info pelengkap kartu produk ala premium (Warna Awal) */}
                <div className="p-4 bg-[#060F1E] border-t border-slate-800 space-y-3">
                  <p className="text-xs md:text-sm text-slate-100 font-medium leading-relaxed line-clamp-2 group-hover:text-amber-400 transition-colors duration-150">
                    {image.alt} - Produk Premium PT Bersama Kingsa Sejahtera
                  </p>
                  <div className="flex items-center justify-between pt-1">
                    <div className="flex items-center gap-0.5 text-amber-400">
                      <Star className="w-3 h-3 fill-current" />
                      <span className="text-[11px] md:text-xs text-slate-300 ml-1">5.0</span>
                    </div>
                    <span className="text-[11px] md:text-xs text-slate-400">Terjual banyak</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* ─── BOTTOM STICKY BAR (ACTION BAR ALA PREMIUM, Warna Awal) ─── */}
      <div className="fixed bottom-0 left-0 right-0 bg-[#0B1524]/90 backdrop-blur-xl border-t border-slate-800 shadow-[0_-10px_30px_rgba(0,0,0,0.3)] z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          
          <div className="text-center sm:text-left space-y-1">
            <span className="text-[9px] bg-amber-950/40 text-[#D4AF37] font-black px-2.5 py-0.5 rounded-md uppercase tracking-widest inline-block mb-1">
              Sudah Menentukan Pilihan?
            </span>

          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto relative overflow-hidden group">
            {/* Tombol Tambah ke Keranjang Modifikasi (Warna Awal) */}
            

            {/* Tombol Beli Sekarang Utama Premium (Warna Awal) */}
            <Link
              href="/pembeli/pemesanan"
              className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-gradient-to-r from-[#D4AF37] via-[#C5A028] to-[#9A7D0A] hover:from-white hover:via-slate-100 hover:to-amber-400 text-[#060F1E] text-sm py-3 px-8 rounded-xl transition-all duration-300 font-black shadow-2xl group whitespace-nowrap tracking-wide uppercase"
            >
              <ShoppingBag className="w-4 h-4 text-[#060F1E]" />
              Beli Sekarang
              <ArrowRight className="w-4 h-4 text-[#060F1E] transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

        </div>
      </div>

    </div>
  );
}