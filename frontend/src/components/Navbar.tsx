'use client'
import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, Bell, Settings } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-50/80 backdrop-blur-xl shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center h-16 px-6 lg:px-12 relative">
        <div className="flex items-center gap-8">
          <Link href="/" className="text-xl font-bold tracking-tighter text-indigo-700 font-headline">
            TOOLOI
          </Link>
          <div className="hidden md:flex gap-6 items-center">
            <Link href="/tools" className="font-semibold text-sm text-slate-600 hover:text-indigo-600 transition-colors">Tools</Link>
            <Link href="/blog" className="font-semibold text-sm text-slate-600 hover:text-indigo-600 transition-colors">Blog</Link>
            <Link href="/about" className="font-semibold text-sm text-slate-600 hover:text-indigo-600 transition-colors">About</Link>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-2">
            <button className="p-2 text-slate-600 hover:bg-indigo-50 rounded-lg transition-all">
              <Bell size={20} />
            </button>
            <button className="p-2 text-slate-600 hover:bg-indigo-50 rounded-lg transition-all">
              <Settings size={20} />
            </button>
          </div>
          <Link href="/auth/login" className="hidden lg:block text-sm font-semibold text-slate-600 px-4 py-2 hover:bg-indigo-50 rounded-lg">
            Sign In
          </Link>
          <button className="bg-primary hover:bg-primary-container text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition-all active:scale-95 shadow-md shadow-primary/20">
            Get Started
          </button>
          <button className="md:hidden flex items-center" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b p-6 flex flex-col gap-4 animate-in slide-in-from-top duration-300">
           <Link href="/tools" className="font-semibold text-slate-600">Tools</Link>
           <Link href="/blog" className="font-semibold text-slate-600">Blog</Link>
           <Link href="/about" className="font-semibold text-slate-600">About</Link>
           <hr />
           <Link href="/auth/login" className="font-semibold text-primary">Sign In</Link>
        </div>
      )}
    </nav>
  )
}
