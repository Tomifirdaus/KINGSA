'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Eye, EyeOff, Lock, Mail, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function MemberLoginPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulasi proses login/autentikasi
    setTimeout(() => {
      setIsLoading(false);
      // Jika login berhasil, arahkan ke halaman dashboard
      router.push('/member/dashboard' ); 
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#060F1E] flex flex-col justify-center items-center p-4 font-sans antialiased relative overflow-hidden">
      
      {/* Dekorasi Background Glow */}
      <div className="absolute top-[-10%] left-[-10%] w-[300px] h-[300px] bg-[#D4AF37]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[300px] h-[300px] bg-[#F1C40F]/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Tombol Kembali ke Landing Page */}
      <Link 
        href="/" 
        className="absolute top-6 left-6 flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-[#D4AF37] transition-colors group"
      >
        <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
        Kembali
      </Link>

      {/* Card Container */}
      <div className="w-full max-w-md bg-[#0b1524] border border-slate-800/80 rounded-2xl p-6 md:p-8 shadow-2xl relative z-10">
        
        {/* Logo & Header */}
        <div className="flex flex-col items-center text-center mb-8">
          <div className="w-20 h-20 mb-3 flex items-center justify-center">
            <img 
              src="/kingsa.png"  
              alt="KINGSA Logo" 
              className="w-full h-full object-contain"
            />
          </div>
          <h1 className="font-black text-2xl tracking-widest text-[#D4AF37] uppercase font-serif">KINGSA</h1>
          <p className="text-xs text-slate-400 mt-1 font-medium">Masuk ke Member Hub Dashboard</p>
        </div>

        {/* Form Login */}
        <form onSubmit={handleSubmit} className="space-y-5">
          
          {/* Input Email */}
          <div className="space-y-1.5">
            <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Alamat Email</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-500">
                <Mail className="w-4 h-4" />
              </div>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="nama@email.com"
                className="w-full pl-10 pr-4 py-2.5 bg-[#060F1E] border border-slate-800 rounded-lg text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all"
              />
            </div>
          </div>

          {/* Input Password */}
          <div className="space-y-1.5">
            <div className="flex justify-between items-center">
              <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Kata Sandi</label>
              <Link href="#" className="text-[11px] font-semibold text-[#D4AF37] hover:underline">
                Lupa Sandi?
              </Link>
            </div>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-500">
                <Lock className="w-4 h-4" />
              </div>
              <input
                type={showPassword ? 'text' : 'password'}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full pl-10 pr-10 py-2.5 bg-[#060F1E] border border-slate-800 rounded-lg text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-500 hover:text-slate-300"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Tombol Submit */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full mt-2 bg-gradient-to-r from-[#D4AF37] to-[#F1C40F] text-[#060F1E] py-2.5 rounded-lg text-sm font-bold shadow-md hover:opacity-90 active:scale-[0.99] transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:pointer-events-none"
          >
            {isLoading ? (
              <div className="w-5 h-5 border-2 border-[#060F1E] border-t-transparent rounded-full animate-spin" />
            ) : (
              'Masuk Sekarang'
            )}
          </button>
        </form>

        {/* Footer Card */}
        <div className="mt-6 text-center text-xs text-slate-500">
          Belum punya akun member?{' '}
          <Link href="#" className="text-[#D4AF37] font-semibold hover:underline">
            Daftar Di Sini
          </Link>
        </div>

      </div>
    </div>
  );
}