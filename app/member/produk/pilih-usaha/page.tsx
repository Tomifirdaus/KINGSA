'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Send, CheckCircle2 } from 'lucide-react';

// Daftar ringkas 30 pilihan produk berdasarkan halaman katalog
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

export default function PilihUsahaPage() {
    // Simpan produk yang dipilih (default: Sakera Halaman 1)
    const [produkTerpilih, setProdukTerpilih] = useState('Sakera Stamina Pria (Halaman 1)');

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

        // Nomor WhatsApp Admin Kantor Anda (Ganti dengan nomor aslinya, awali dengan 62)
        const nomorAdmin = '6285198185451';

        // Format teks pesan agar rapi saat diterima Admin
        const teksPesan = `Halo Admin PT.Bersama kingsa Sejahtera, saya ingin memilih produk usaha ini:\n\n` +
            `*Produk Pilihan:* ${produkTerpilih}\n` +
            `*Nama Lengkap:* ${formData.nama}\n` +
            `*No. WhatsApp:* ${formData.whatsapp}\n` +
            `*Alamat Lengkap:* ${formData.alamat}\n\n` +
            `Mohon segera diproses untuk langkah kemitraan saya. Terima kasih!`;

        // Encode teks agar aman dalam URL
        const urlWhatsApp = `https://api.whatsapp.com/send?phone=${nomorAdmin}&text=${encodeURIComponent(teksPesan)}`;

        // Buka tab baru langsung ke WhatsApp
        window.open(urlWhatsApp, '_blank');
    };

    return (
        <div className="bg-[#040A14] text-slate-100 min-h-screen p-4 md:p-8 antialiased">
            <div className="max-w-xl mx-auto space-y-6">

                {/* Tombol Back */}
                <Link href="/member/produk" className="inline-flex items-center gap-2 text-xs text-slate-400 hover:text-[#D4AF37] transition-colors">
                    <ArrowLeft className="w-4 h-4" /> Kembali ke Katalog
                </Link>

                {/* Header judul */}
                <div className="space-y-1">
                    <h1 className="text-xl font-bold uppercase tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-[#D4AF37]">
                        Form Pilihan Usaha
                    </h1>
                    <p className="text-xs text-slate-400">
                        Pilih 1 produk yang paling Anda sukai untuk memulai kemitraan bisnis.
                    </p>
                </div>

                {/* Form Form Utama */}
                <form onSubmit={kirimKeWhatsApp} className="bg-[#0B1524] border border-slate-800 rounded-2xl p-5 space-y-5 shadow-xl">

                    {/* 1. SELEKSI PILIHAN PRODUK (DROPDOWN) */}
                    <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-slate-300">Pilih Produk Yang Anda Sukai:</label>
                        <select
                            value={produkTerpilih}
                            onChange={(e) => setProdukTerpilih(e.target.value)}
                            className="w-full bg-[#060F1E] border border-slate-700 rounded-xl py-3 px-4 text-xs md:text-sm text-slate-200 focus:outline-none focus:border-[#D4AF37] transition-all cursor-pointer"
                        >
                            {PILIHAN_PRODUK.map((namaProduk, idx) => (
                                <option key={idx} value={namaProduk} className="bg-[#060F1E] text-slate-200">
                                    {namaProduk}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Indikator Centang bahwa Produk Terpilih */}
                    <div className="bg-[#0E1E36] border border-[#D4AF37]/30 rounded-xl p-3 flex items-center gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span className="text-xs text-slate-300">
                            Terpilih: <strong className="text-[#F1C40F]">{produkTerpilih}</strong>
                        </span>
                    </div>

                    <hr className="border-slate-800" />

                    {/* 2. INPUT DATA PENGIRIMAN */}
                    <div className="space-y-3">
                        <div className="space-y-1">
                            <label className="text-xs font-semibold text-slate-300">Nama Lengkap:</label>
                            <input
                                type="text"
                                name="nama"
                                required
                                value={formData.nama}
                                onChange={handleInputChange}
                                placeholder="Masukkan nama Anda"
                                className="w-full bg-[#060F1E] border border-slate-800 rounded-xl py-2.5 px-3.5 text-xs text-slate-200 focus:outline-none focus:border-[#D4AF37] transition-all"
                            />
                        </div>

                        <div className="space-y-1">
                            <label className="text-xs font-semibold text-slate-300">Nomor WhatsApp:</label>
                            <input
                                type="tel"
                                name="whatsapp"
                                required
                                value={formData.whatsapp}
                                onChange={handleInputChange}
                                placeholder="Contoh: 081234567xxx"
                                className="w-full bg-[#060F1E] border border-slate-800 rounded-xl py-2.5 px-3.5 text-xs text-slate-200 focus:outline-none focus:border-[#D4AF37] transition-all"
                            />
                        </div>

                        <div className="space-y-1">
                            <label className="text-xs font-semibold text-slate-300">Alamat Rumah Lengkap:</label>
                            <textarea
                                name="alamat"
                                required
                                rows={3}
                                value={formData.alamat}
                                onChange={handleInputChange}
                                placeholder="Tulis alamat lengkap untuk pengiriman produk"
                                className="w-full bg-[#060F1E] border border-slate-800 rounded-xl py-2.5 px-3.5 text-xs text-slate-200 focus:outline-none focus:border-[#D4AF37] transition-all resize-none"
                            />
                        </div>
                    </div>

                    {/* 3. TOMBOL SUBMIT LANGSUNG KE WA */}
                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-[#D4AF37] to-[#C5A028] text-[#060F1E] py-3 rounded-xl text-xs font-bold shadow-lg hover:brightness-105 transition-all flex items-center justify-center gap-2 uppercase tracking-wider"
                    >
                        <Send className="w-3.5 h-3.5" />
                        Kirim Pilihan ke WhatsApp Admin
                    </button>

                </form>
            </div>
        </div>
    );
}