'use client'
import { motion } from 'framer-motion'
import { Users, Zap, Image as ImageIcon, FileText, ArrowUpRight, ArrowDownRight, MoreVertical } from 'lucide-react'

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-slate-50 p-8 pt-24 lg:p-12 lg:pt-24">
      <div className="max-w-7xl mx-auto">
        <header className="flex justify-between items-center mb-12">
          <div>
             <h1 className="text-4xl font-extrabold tracking-tight mb-2">Workspace Analytics</h1>
             <p className="text-slate-500">Real-time overview of your SaaS performance.</p>
          </div>
          <button className="bg-white border border-slate-200 px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-slate-50 transition-all">
             Export Data <ArrowUpRight size={18}/>
          </button>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <StatCard icon={<Users size={24}/>} title="Total Users" value="12,482" change="+12.5%" positive={true}/>
          <StatCard icon={<Zap size={24}/>} title="Active Sessions" value="1,204" change="-3.2%" positive={false}/>
          <StatCard icon={<ImageIcon size={24}/>} title="Images Processed" value="452,190" change="+18.7%" positive={true}/>
          <StatCard icon={<FileText size={24}/>} title="PDFs Generated" value="89,120" change="+5.4%" positive={true}/>
        </div>

        {/* Recent Activity Table */}
        <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-xl font-bold">Recent Tool Usage</h2>
            <button className="text-sm font-bold text-primary hover:underline">View All</button>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-slate-50 text-slate-400 text-xs font-bold uppercase tracking-widest">
                  <th className="pb-4 px-4 font-bold">User</th>
                  <th className="pb-4 px-4 font-bold">Tool</th>
                  <th className="pb-4 px-4 font-bold">Timestamp</th>
                  <th className="pb-4 px-4 font-bold">Status</th>
                  <th className="pb-4 px-4 font-bold"></th>
                </tr>
              </thead>
              <tbody className="text-sm font-semibold text-slate-600">
                <ActivityRow user="Alex Johnson" tool="Background Remover" time="2 mins ago" status="Success" />
                <ActivityRow user="Sarah Miller" tool="Image Compressor" time="15 mins ago" status="Success" />
                <ActivityRow user="James Wilson" tool="PDF Merge" time="1 hour ago" status="Failed" />
                <ActivityRow user="Emily Brown" tool="Code Minifier" time="3 hours ago" status="Success" />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

function StatCard({ icon, title, value, change, positive }: any) {
  return (
    <motion.div whileHover={{ y: -5 }} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
      <div className="flex justify-between items-start mb-4">
        <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-primary">
          {icon}
        </div>
        <div className={`flex items-center gap-1 text-xs font-bold ${positive ? 'text-green-500' : 'text-red-500'}`}>
           {positive ? <ArrowUpRight size={14}/> : <ArrowDownRight size={14}/>}
           {change}
        </div>
      </div>
      <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-1">{title}</p>
      <h3 className="text-2xl font-extrabold">{value}</h3>
    </motion.div>
  )
}

function ActivityRow({ user, tool, time, status }: any) {
  return (
    <tr className="border-b border-slate-50 hover:bg-slate-50/50 transition-colors">
      <td className="py-5 px-4">{user}</td>
      <td className="py-5 px-4">{tool}</td>
      <td className="py-5 px-4 text-slate-400 font-medium">{time}</td>
      <td className="py-5 px-4">
        <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
          status === 'Success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
        }`}>
          {status}
        </span>
      </td>
      <td className="py-5 px-4 text-right">
        <button className="text-slate-300 hover:text-slate-600"><MoreVertical size={18}/></button>
      </td>
    </tr>
  )
}
