'use client'
import { useState } from 'react'
import { useParams } from 'next/navigation'
import { motion } from 'framer-motion'
import { Upload, Download, Copy, Play, Loader2, AlertCircle } from 'lucide-react'
import ToolSidebar from '@/components/ToolSidebar'

import { api } from '@/lib/api'

export default function ToolPage() {
  const { toolName } = useParams()
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<any>(null)
  const [error, setError] = useState<string | null>(null)

  const handleRun = async () => {
    setLoading(true)
    setError(null)
    try {
      const res = await api.post(`/${toolName}/run`, { 
        input_text: 'sample', 
        options: {} 
      })
      if (res.data.success) setResult(res.data.result)
      else setError(res.data.error || 'Execution failed')
    } catch (err: any) {
      setError(err.response?.data?.error || 'Connection to backend failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen bg-slate-50">
      <ToolSidebar active={toolName as string} />
      
      <main className="flex-1 p-8 lg:p-12">
        <div className="max-w-4xl mx-auto">
          <header className="mb-12">
            <h1 className="text-4xl font-extrabold capitalize mb-4">{toolName?.toString().replace('-', ' ')}</h1>
            <p className="text-slate-500">Fast, secure, and professional processing for your workflow.</p>
          </header>

          <div className="grid gap-8">
            {/* Input Area */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
              <h2 className="text-xl font-bold mb-6">Input</h2>
              <div className="space-y-6">
                <textarea 
                  className="w-full h-48 p-6 bg-slate-50 border border-slate-200 rounded-xl focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all resize-none"
                  placeholder="Paste your content here..."
                ></textarea>
                
                <div className="flex items-center gap-4">
                  <button 
                    onClick={handleRun}
                    disabled={loading}
                    className="flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-xl font-bold shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-95 disabled:opacity-50 transition-all"
                  >
                    {loading ? <Loader2 className="animate-spin" /> : <Play size={20} />}
                    {loading ? 'Processing...' : 'Run Tool'}
                  </button>
                  <button className="flex items-center gap-2 px-6 py-4 rounded-xl font-bold border border-slate-200 text-slate-600 hover:bg-slate-50 transition-all">
                    <Upload size={20} />
                    Upload File
                  </button>
                </div>
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-3 p-4 bg-red-50 text-red-600 rounded-xl border border-red-100">
                <AlertCircle size={20} />
                <span className="font-medium">{error}</span>
              </motion.div>
            )}

            {/* Result Area */}
            {result && (
              <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} className="bg-white rounded-2xl p-8 shadow-md border-2 border-primary/10">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold">Result</h2>
                  <div className="flex gap-2">
                    <button className="p-2 text-slate-400 hover:text-primary transition-colors"><Copy size={20} /></button>
                    <button className="p-2 text-slate-400 hover:text-primary transition-colors"><Download size={20} /></button>
                  </div>
                </div>
                <div className="p-6 bg-slate-50 rounded-xl font-mono text-sm whitespace-pre-wrap">
                  {result}
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}
