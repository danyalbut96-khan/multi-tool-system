'use client'
import Link from 'next/link'
import { Image as ImageIcon, FileText, Code, Gauge, Layers, Calculator, Type, Globe, Coins, Zap } from 'lucide-react'

const tools = [
  { id: 'background-remover', name: 'Background Remover', icon: ImageIcon },
  { id: 'image-compressor', name: 'Image Compressor', icon: Zap },
  { id: 'merge-pdfs', name: 'Merge PDFs', icon: FileText },
  { id: 'minifier', name: 'Code Minifier', icon: Code },
  { id: 'bmi-calculator', name: 'BMI Calculator', icon: Calculator },
  { id: 'unit-converter', name: 'Unit Converter', icon: Globe },
  { id: 'currency-converter', name: 'Currency Converter', icon: Coins },
]

export default function ToolSidebar({ active }: { active: string }) {
  return (
    <aside className="hidden lg:flex flex-col w-72 bg-white border-r border-slate-200 h-screen sticky top-0 p-6 overflow-y-auto">
      <div className="mb-10 px-4">
        <Link href="/" className="text-xl font-bold tracking-tighter text-indigo-700">TOOLOI Workspace</Link>
      </div>

      <nav className="space-y-1">
        <p className="px-4 text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-4">Popular Tools</p>
        {tools.map((tool) => {
          const Icon = tool.icon
          return (
            <Link 
              key={tool.id} 
              href={`/tools/${tool.id}`}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl font-semibold transition-all ${
                active === tool.id 
                ? 'bg-indigo-50 text-primary' 
                : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              <Icon size={20} />
              <span className="text-sm">{tool.name}</span>
            </Link>
          )
        })}
      </nav>

      <div className="mt-auto px-4 pt-8 border-t">
        <Link href="/admin/dashboard" className="flex items-center gap-3 text-slate-500 hover:text-slate-800 transition-colors">
          <Gauge size={20} />
          <span className="text-sm font-semibold">Admin Panel</span>
        </Link>
      </div>
    </aside>
  )
}
