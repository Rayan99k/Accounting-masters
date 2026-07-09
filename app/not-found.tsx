import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#1B2B4B]">
      <div className="text-center px-6 max-w-lg">
        <p className="text-[#C8922A] font-bold uppercase tracking-widest text-sm mb-6">404 — Page Not Found</p>
        <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight">
          This page doesn't exist.
        </h1>
        <p className="text-white/60 text-lg leading-relaxed mb-10">
          The page you're looking for may have moved or been removed.
          Head back to the homepage to find what you need.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-[#C8922A] hover:bg-[#b07d22] text-white font-bold px-8 py-4 rounded-sm transition-colors text-base"
        >
          Back to Homepage
        </Link>
        <p className="mt-10 text-white/30 text-sm">
          Accounting Masters Group Inc. · Burlington, ON · (289) 208-2087
        </p>
      </div>
    </div>
  );
}
