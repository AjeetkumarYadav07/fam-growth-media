import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Home } from "lucide-react";

export default function NotFound() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center px-4 py-16 bg-[#FAFAFE] overflow-hidden text-center">
      {/* Subtle ambient background glows matching main theme */}
      <div className="pointer-events-none absolute top-1/4 left-1/4 w-[280px] sm:w-[460px] h-[280px] sm:h-[460px] bg-purple-200/30 rounded-full blur-[90px] sm:blur-[140px] -z-10" />
      <div className="pointer-events-none absolute bottom-1/4 right-1/4 w-[260px] sm:w-[420px] h-[260px] sm:h-[420px] bg-cyan-200/30 rounded-full blur-[80px] sm:blur-[130px] -z-10" />

      <div className="mx-auto max-w-lg w-full space-y-6">
        {/* Brand Logo linking Home */}
        <Link
          href="/"
          className="inline-flex items-center justify-center transition-transform duration-300 hover:scale-105"
        >
          <Image
            src="/images/logo.png"
            alt="FAM Growth Media"
            width={160}
            height={123}
            className="h-14 w-auto object-contain"
            priority
          />
        </Link>

        {/* Simple, clean 404 Card */}
        <div className="rounded-3xl border border-slate-200/90 bg-white/90 backdrop-blur-md p-8 sm:p-10 shadow-[0_20px_50px_rgba(124,58,237,0.08)] space-y-5">
          <div className="inline-flex items-center gap-2 rounded-full bg-purple-50 border border-purple-200/80 px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-[0.2em] text-purple-700">
            404 Error
          </div>

          <div className="text-6xl sm:text-7xl font-black tracking-tight fam-gradient-text leading-none">
            404
          </div>

          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Page Not Found
          </h1>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            The page you are looking for doesn&apos;t exist or may have been moved.
          </p>

          <div className="pt-2">
            <Link
              href="/"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-purple-500/25 hover:scale-105 active:scale-95 transition-all duration-300"
            >
              <Home className="h-4 w-4" />
              <span>Go to Home Page</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

