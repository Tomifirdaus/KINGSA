'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, MessageSquare, User, MapPin, CheckCircle2 } from 'lucide-react'; 

const PILIHAN_PRODUK = [
    'Matte Lipcream ',
    'Feminine & Soap Clear & Fresh  ',
    'Night Cream ',
    'Sunscrean Protect Cream ',
    'Lightening Peeling Spray Face & Body',
    'Light Exfoliating Serum ',
    'Face & Body Lotion ',
    'Sabun Raja ',
    'Infused Luxury ',
    'Parfum OBSIDIAN SOUL ',
    'Parfum ECLIPSE SCENT ',
    'Parfum VELOUR OUD ',
    'Parfum NOCTURNE BLOOMN ',
    ' Spray MERHABA ',
    ' Spray ATTHARA ',
    ' Spray LAYMUN  ',
    ' Spray  OUD DUBAI ',
    ' HNP BEE ',
    ' Nutrisi HIU SYIFA V7  ',
    ' Herbal  De-Kap ',
    ' Suplemen Herbal  Melastine  ',
    ' Gamatrad ',
    ' eyespark ',
    ' ALKAPOLIS ',
    ' NISA CARE  ',
    ' TEA RUS ',
    ' DEKALINU ',
    ' STEVIKING ',
    ' KINGS-UP  ',
    ' SAKERA ',
];

export default function PesanProdukPage() {
    const [produkTerpilih, setProdukTerpilih] = useState('Matte Lipcream');
    const [formData, setFormData] = useState({
        nama: '',
        whatsapp: '',
        alamat: ''
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const kirimKeWhatsApp = (e: React.FormEvent) => {
        e.preventDefault();
        const nomorAdmin = '6285198185451';
        const teksPesan = `Halo Admin PT. Bersama Kingsa Sejahtera, saya ingin memesan:\n\n` +
            `*Produk Pesanan:* ${produkTerpilih}\n` +
            `*Nama:* ${formData.nama}\n` +
            `*WA:* ${formData.whatsapp}\n` +
            `*Alamat:* ${formData.alamat}`;
        const urlWhatsApp = `https://api.whatsapp.com/send?phone=${nomorAdmin}&text=${encodeURIComponent(teksPesan)}`;
        window.open(urlWhatsApp, '_blank');
    };

    return (
        // Kembali ke warna latar belakang awal: #040A14
        <div className="bg-[#040A14] text-slate-100 min-h-screen p-6 md:p-12 antialiased font-sans">
            <div className="max-w-2xl mx-auto space-y-8">

                {/* Tombol Back */}
                <Link href="/member/produk" className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-[#D4AF37] transition-colors">
                    <ArrowLeft className="w-4 h-4" /> Kembali ke Katalog
                </Link>

                {/* Header judul dengan aksen warna awal (Gradasi Emas) */}
                <div className="space-y-2 border-b border-slate-800 pb-4">
                    <h1 className="text-3xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-[#D4AF37]">
                        Form <span className="text-[#D4AF37]">Pemesanan</span>
                    </h1>
                    <p className="text-sm text-slate-400 max-w-md">
                        Lengkapi detail pesanan Anda. Kami akan segera menghubungi Anda untuk total biaya.
                    </p>
                </div>

                {/* Form Utama dengan warna awal: #0B1524 */}
                <form onSubmit={kirimKeWhatsApp} className="bg-[#0B1524] rounded-3xl p-8 space-y-6 shadow-xl border border-slate-800">

                    {/* 1. SELEKSI PRODUK DENGAN ICON */}
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-300">Pilih Produk</label>
                        <div className="relative">
                            <CheckCircle2 className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#D4AF37]" />
                            <select
                                value={produkTerpilih}
                                onChange={(e) => setProdukTerpilih(e.target.value)}
                                className="w-full bg-[#060F1E] border border-slate-700 rounded-2xl py-4 pl-12 pr-4 text-sm text-slate-200 focus:outline-none focus:border-[#D4AF37] transition-all cursor-pointer appearance-none"
                            >
                                {PILIHAN_PRODUK.map((namaProduk, idx) => (
                                    <option key={idx} value={namaProduk} className="bg-[#060F1E] text-slate-200">
                                        {namaProduk}
                                    </option>
                                ))}
                            </select>
                            <div className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none text-xs">▼</div>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {/* 2. NAMA LENGKAP DENGAN ICON */}
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-300">Nama Lengkap</label>
                            <div className="relative">
                                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                                <input
                                    type="text"
                                    name="nama"
                                    required
                                    value={formData.nama}
                                    onChange={handleInputChange}
                                    placeholder="Nama Anda"
                                    className="w-full bg-[#060F1E] border border-slate-800 rounded-2xl py-4 pl-12 pr-4 text-sm text-slate-200 focus:outline-none focus:border-[#D4AF37] transition-all"
                                />
                            </div>
                        </div>

                        {/* 3. NOMOR WA DENGAN ICON */}
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-300">Nomor WhatsApp</label>
                            <div className="relative">
                                <MessageSquare className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                                <input
                                    type="tel"
                                    name="whatsapp"
                                    required
                                    value={formData.whatsapp}
                                    onChange={handleInputChange}
                                    placeholder="Contoh: 0812..."
                                    className="w-full bg-[#060F1E] border border-slate-800 rounded-2xl py-4 pl-12 pr-4 text-sm text-slate-200 focus:outline-none focus:border-[#D4AF37] transition-all"
                                />
                            </div>
                        </div>
                    </div>

                    {/* 4. ALAMAT LENGKAP DENGAN ICON */}
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-300">Alamat Pengiriman</label>
                        <div className="relative">
                            <MapPin className="absolute left-4 top-5 w-5 h-5 text-slate-500" />
                            <textarea
                                name="alamat"
                                required
                                rows={4}
                                value={formData.alamat}
                                onChange={handleInputChange}
                                placeholder="Jalan, No, RT/RW, Kec, Kota, Kode Pos"
                                className="w-full bg-[#060F1E] border border-slate-800 rounded-2xl py-4 pl-12 pr-4 text-sm text-slate-200 focus:outline-none focus:border-[#D4AF37] transition-all resize-none"
                            />
                        </div>
                    </div>

                    {/* 5. TOMBOL SUBMIT WARNA EMAS GRADASI AWAL */}
                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-[#D4AF37] to-[#C5A028] text-[#060F1E] py-4 rounded-2xl text-base font-bold shadow-md hover:brightness-105 active:scale-[0.98] transition-all flex items-center justify-center gap-2 uppercase tracking-wider"
                    >
                        <MessageSquare className="w-5 h-5" />
                        Pesan via WhatsApp
                    </button>

                </form>
            </div>
        </div>
    );
}