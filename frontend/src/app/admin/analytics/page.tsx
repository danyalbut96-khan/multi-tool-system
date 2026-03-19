'use client'
import { motion } from 'framer-motion'
import { Globe, Clock, Monitor, Smartphone, MapPin, MousePointer2 } from 'lucide-react'

export default function AnalyticsPage() {
  return (
    <div className="min-h-screen bg-slate-50 p-8 pt-24 lg:p-12 lg:pt-24">
      <div className="max-w-7xl mx-auto">
        <header className="mb-12">
           <h1 className="text-4xl font-extrabold tracking-tight mb-2">Detailed Analytics</h1>
           <p className="text-slate-500">In-depth insights into tool performance and user engagement.</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Chart Placeholder */}
          <div className="lg:col-span-2 bg-white rounded-3xl p-8 shadow-sm border border-slate-100 min-h-[400px]">
             <div className="flex justify-between items-center mb-12">
                <h2 className="text-xl font-bold">Usage Traffic (24h)</h2>
                <div className="flex gap-2">
                   <button className="px-3 py-1 bg-indigo-50 text-primary text-xs font-bold rounded-lg">Hourly</button>
                   <button className="px-3 py-1 text-slate-400 text-xs font-bold rounded-lg">Daily</button>
                </div>
             </div>
             <div className="h-64 flex items-end justify-between gap-2">
                {[40, 70, 45, 90, 65, 80, 55, 95, 30, 85, 50, 75].map((h, i) => (
                   <motion.div 
                     key={i} 
                     initial={{ height: 0 }} 
                     animate={{ height: `${h}%` }} 
                     className="flex-1 bg-indigo-100 rounded-t-lg hover:bg-primary transition-colors cursor-pointer"
                   />
                ))}
             </div>
          </div>

          {/* Device Breakdown */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
             <h2 className="text-xl font-bold mb-8">Device Breakdown</h2>
             <div className="space-y-6">
                <DeviceRow icon={<Smartphone size={20}/>} label="Mobile" percentage={65} />
                <DeviceRow icon={<Monitor size={20}/>} label="Desktop" percentage={30} />
                <DeviceRow icon={<Globe size={20}/>} label="Other" percentage={5} />
             </div>
          </div>

          {/* Real-time map placeholder */}
          <div className="lg:col-span-3 bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
             <div className="flex justify-between items-center mb-8">
                <h2 className="text-xl font-bold">Geographical Distribution</h2>
                <div className="flex items-center gap-2 text-xs font-bold text-slate-400">
                   <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                   Live: 48 users online
                </div>
             </div>
             <div className="aspect-[21/9] bg-slate-50 rounded-2xl flex items-center justify-center relative overflow-hidden group">
                <div className="absolute inset-0 grayscale opacity-20 pointer-events-none bg-[url('https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg')] bg-center bg-no-repeat bg-contain"></div>
                <div className="relative text-slate-300 font-bold group-hover:text-primary transition-colors">World Map Visualization</div>
                
                {/* Random Pings */}
                <motion.div animate={{ scale: [1, 1.5, 1], opacity: [1, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-primary/40 rounded-full" />
                <motion.div animate={{ scale: [1, 1.5, 1], opacity: [1, 0] }} transition={{ repeat: Infinity, duration: 2, delay: 0.5 }} className="absolute top-1/4 left-1/3 w-4 h-4 bg-primary/40 rounded-full" />
             </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function DeviceRow({ icon, label, percentage }: any) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm font-bold">
         <div className="flex items-center gap-2 text-slate-600">
            {icon}
            {label}
         </div>
         <span>{percentage}%</span>
      </div>
      <div className="h-2 bg-slate-50 rounded-full overflow-hidden">
         <motion.div initial={{ width: 0 }} animate={{ width: `${percentage}%` }} transition={{ duration: 1 }} className="h-full bg-primary" />
      </div>
    </div>
  )
}
