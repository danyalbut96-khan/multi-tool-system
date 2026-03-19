'use client'
import Link from 'next/link'
import { Mail, Lock, CheckCircle2, Sparkles, ArrowRight } from 'lucide-react'

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 lg:p-8 bg-slate-50">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 bg-white rounded-3xl overflow-hidden shadow-2xl shadow-indigo-100 border border-slate-100">
        
        {/* Left Side */}
        <div className="hidden lg:flex flex-col justify-between p-12 hero-gradient relative overflow-hidden text-white">
          <div className="relative z-10">
            <h2 className="text-2xl font-bold tracking-tighter mb-16">TOOLOI</h2>
            <h1 className="text-5xl font-extrabold leading-[1.1] tracking-tight mb-8">Precision in <br/>Every Pixel.</h1>
            <p className="text-indigo-100 text-lg max-w-md">Access your suite of premium creative tools and AI-powered workflows.</p>
          </div>
          
          <div className="relative z-10 grid grid-cols-2 gap-6">
            <FeatureBox icon={<CheckCircle2 size={24}/>} title="Secure" />
            <FeatureBox icon={<Sparkles size={24}/>} title="AI-Native" />
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="p-8 lg:p-16 flex flex-col justify-center">
            <div className="max-w-md w-full mx-auto">
               <header className="mb-10 text-center lg:text-left">
                  <h2 className="text-3xl font-bold mb-2">Welcome Back</h2>
                  <p className="text-slate-500">Enter your credentials to access your workspace.</p>
               </header>

               <form className="space-y-6">
                  <div className="space-y-2">
                     <label className="text-sm font-bold text-slate-700 ml-1">Work Email</label>
                     <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={20} />
                        <input className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:ring-4 focus:ring-primary/5 focus:border-primary transition-all" placeholder="name@company.com" />
                     </div>
                  </div>

                  <div className="space-y-2">
                     <div className="flex justify-between px-1">
                        <label className="text-sm font-bold text-slate-700">Password</label>
                        <Link href="#" className="text-xs font-bold text-primary hover:underline">Forgot?</Link>
                     </div>
                     <div className="relative">
                        <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={20} />
                        <input type="password" className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:ring-4 focus:ring-primary/5 focus:border-primary transition-all" placeholder="••••••••" />
                     </div>
                  </div>

                  <button className="w-full hero-gradient text-white font-bold py-4 rounded-2xl shadow-lg shadow-primary/20 hover:shadow-xl transition-all active:scale-[0.98]">
                     Sign In
                  </button>
               </form>

               <div className="my-10 flex items-center gap-4 text-slate-300 text-xs font-bold uppercase tracking-widest">
                  <div className="flex-1 h-px bg-slate-100"></div>
                  <span>OR</span>
                  <div className="flex-1 h-px bg-slate-100"></div>
               </div>

               <button className="w-full py-4 border border-slate-200 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-slate-50 transition-all active:scale-[0.98]">
                  Continue with Google
               </button>

               <p className="mt-8 text-center text-sm text-slate-500">
                  Don't have an account? <Link href="/auth/register" className="text-primary font-bold hover:underline">Sign Up</Link>
               </p>
            </div>
        </div>
      </div>
    </div>
  )
}

function FeatureBox({ icon, title }: any) {
  return (
    <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10 flex items-center gap-3">
      {icon}
      <span className="font-bold text-sm tracking-tight">{title}</span>
    </div>
  )
}
