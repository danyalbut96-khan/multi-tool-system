'use client'
import Link from 'next/link'
import { Mail, Lock, User, CheckCircle2, ShieldCheck } from 'lucide-react'

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 lg:p-8 bg-slate-50">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 bg-white rounded-3xl overflow-hidden shadow-2xl shadow-indigo-100 border border-slate-100">
        
        {/* Left Side */}
        <div className="hidden lg:flex flex-col justify-between p-12 hero-gradient relative overflow-hidden text-white text-center">
          <div className="relative z-10">
            <h2 className="text-2xl font-bold tracking-tighter mb-16 text-left">TOOLOI</h2>
            <h1 className="text-5xl font-extrabold leading-[1.1] tracking-tight mb-8">Join the Workflow <br/>Revolution.</h1>
            <p className="text-indigo-100 text-lg max-w-md mx-auto">Create your account and unlock the full potential of high-performance tools.</p>
          </div>
          
          <div className="relative z-10 flex justify-center gap-12">
            <div className="flex flex-col items-center gap-2">
               <ShieldCheck size={48} className="text-white/40 mb-2"/>
               <span className="font-bold text-xs uppercase tracking-widest">Enterprise Ready</span>
            </div>
            <div className="flex flex-col items-center gap-2">
               <CheckCircle2 size={48} className="text-white/40 mb-2"/>
               <span className="font-bold text-xs uppercase tracking-widest">Free Account</span>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="p-8 lg:p-16 flex flex-col justify-center">
            <div className="max-w-md w-full mx-auto">
               <header className="mb-10 text-center lg:text-left">
                  <h2 className="text-3xl font-bold mb-2">Create Account</h2>
                  <p className="text-slate-500">Start building with precision and speed.</p>
               </header>

               <form className="space-y-6">
                  <div className="space-y-2">
                     <label className="text-sm font-bold text-slate-700 ml-1">Full Name</label>
                     <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={20} />
                        <input className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:ring-4 focus:ring-primary/5 focus:border-primary transition-all" placeholder="John Doe" />
                     </div>
                  </div>

                  <div className="space-y-2">
                     <label className="text-sm font-bold text-slate-700 ml-1">Work Email</label>
                     <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={20} />
                        <input className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:ring-4 focus:ring-primary/5 focus:border-primary transition-all" placeholder="name@company.com" />
                     </div>
                  </div>

                  <div className="space-y-2">
                     <label className="text-sm font-bold text-slate-700 ml-1">Password</label>
                     <div className="relative">
                        <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={20} />
                        <input type="password" className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:ring-4 focus:ring-primary/5 focus:border-primary transition-all" placeholder="••••••••" />
                     </div>
                  </div>

                  <button className="w-full hero-gradient text-white font-bold py-4 rounded-2xl shadow-lg shadow-primary/20 hover:shadow-xl transition-all active:scale-[0.98]">
                     Get Started
                  </button>
               </form>

               <p className="mt-8 text-center text-sm text-slate-500">
                  Already have an account? <Link href="/auth/login" className="text-primary font-bold hover:underline">Sign In</Link>
               </p>
            </div>
        </div>
      </div>
    </div>
  )
}
