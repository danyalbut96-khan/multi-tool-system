export default function Footer() {
  return (
    <footer className="w-full border-t border-slate-200 bg-slate-50 mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <span className="text-xs tracking-wide text-slate-500">
          © 2025 TOOLOI. Precision in Every Click.
        </span>
        <div className="flex flex-wrap justify-center gap-8">
          <a href="/sitemap" className="text-xs text-slate-400 hover:text-indigo-500 underline decoration-indigo-500/30 underline-offset-4">Sitemap</a>
          <a href="/terms" className="text-xs text-slate-400 hover:text-indigo-500 underline decoration-indigo-500/30 underline-offset-4">Terms of Service</a>
          <a href="/privacy" className="text-xs text-slate-400 hover:text-indigo-500 underline decoration-indigo-500/30 underline-offset-4">Privacy Policy</a>
        </div>
      </div>
    </footer>
  )
}
