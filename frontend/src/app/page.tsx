'use client'
import { motion } from 'framer-motion'
import { ArrowRight, Image as ImageIcon, FileText, Code, Gauge, CheckCircle2, Zap, ShieldCheck, Layers } from 'lucide-react'
import Link from 'next/link'

export default function LandingPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-surface py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="z-10"
          >
            <div className="inline-flex items-center gap-2 bg-indigo-100 px-3 py-1 rounded-full mb-6">
              <span className="text-primary text-xs font-bold tracking-wider uppercase">Introducing TOOLOI SaaS</span>
            </div>
            <h1 className="text-6xl lg:text-7xl font-extrabold font-headline text-on-surface tracking-tighter leading-[1.1] mb-8">
              Precision Tools for <span className="text-primary">Modern Workflows</span>
            </h1>
            <p className="text-xl text-on-surface-variant max-w-xl mb-10 leading-relaxed">
              The all-in-one suite for Image, PDF, Dev, and AI processing. Designed for teams who demand atmospheric precision and high-tech clarity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="hero-gradient text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl shadow-primary/30 transition-all hover:scale-[1.02] active:scale-95">
                Get Started for Free
              </button>
              <button className="px-8 py-4 rounded-xl font-bold text-lg border border-outline-variant/30 text-on-surface hover:bg-surface-container-low transition-all">
                View Documentation
              </button>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square bg-primary/5 rounded-[3rem] absolute -rotate-6 scale-105"></div>
            <div className="relative rounded-xl overflow-hidden shadow-2xl bg-white p-2">
               <div className="aspect-video bg-slate-100 rounded-lg flex items-center justify-center text-slate-400">
                  <Gauge size={64} />
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Top Categories */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="mb-16">
            <h2 className="text-4xl font-extrabold tracking-tight mb-4">Top Categories</h2>
            <p className="text-on-surface-variant max-w-2xl">Streamlined toolsets crafted for professional precision across every digital format.</p>
          </div>
          
          <div className="grid md:grid-cols-12 gap-6">
            <CategoryCard 
              span="md:col-span-8"
              index="01"
              icon={<ImageIcon size={32} />}
              title="Image Tools"
              description="Professional batch processing, vectorization, and neural upscaling with studio-grade accuracy."
              tags={['Resize', 'Upscale', 'Compress']}
            />
            <CategoryCard 
              span="md:col-span-4" 
              index="02"
              icon={<FileText size={32} />}
              title="PDF Tools"
              description="Edit, merge, and secure documents with forensic precision."
              link="/tools/pdf"
            />
            <CategoryCard 
              span="md:col-span-4" 
              index="03"
              icon={<Layers size={32} />}
              title="AI Lab"
              description="LLM orchestration and automation at scale."
              link="/tools/ai"
            />
            <CategoryCard 
              span="md:col-span-8"
              index="04"
              icon={<Code size={32} />}
              title="Dev Hub"
              description="API testing, code formatting, and infrastructure monitoring for the modern engineer."
            />
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-24">
            <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tighter mb-6">Built for High-Performance Teams</h2>
            <div className="h-1 w-24 bg-primary mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-16">
            <BenefitCard icon={<Zap size={40}/>} title="Lightning Speed" description="Engineered with edge-computing architecture for sub-millisecond response." />
            <BenefitCard icon={<ShieldCheck size={40}/>} title="Hardened Security" description="Enterprise-grade encryption and SOC2 compliance for your data." />
            <BenefitCard icon={<Layers size={40}/>} title="Infinite Scalability" description="From single requests to multi-million document batches." />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto hero-gradient rounded-3xl p-12 lg:p-20 text-center relative overflow-hidden shadow-2xl text-white">
          <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tighter mb-8">Ready to Elevate Your Workflow?</h2>
          <p className="text-indigo-100 text-xl max-w-2xl mx-auto mb-10">Join 10,000+ developers and creators who build with TOOLOI.</p>
          <button className="bg-white text-primary px-10 py-5 rounded-xl font-extrabold text-lg hover:bg-slate-50 transition-all active:scale-95 shadow-xl">
            Create Your Free Account
          </button>
        </div>
      </section>
    </div>
  )
}

function CategoryCard({ span, index, icon, title, description, tags, link }: any) {
  return (
    <div className={`${span} bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all group`}>
      <div className="flex justify-between items-start mb-12">
        <div className="w-14 h-14 bg-indigo-50 rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors text-primary">
          {icon}
        </div>
        <span className="text-xs font-bold uppercase tracking-widest text-slate-300">{index}</span>
      </div>
      <h3 className="text-2xl font-bold mb-3">{title}</h3>
      <p className="text-on-surface-variant max-w-md mb-8">{description}</p>
      {tags && (
        <div className="flex flex-wrap gap-2">
          {tags.map((tag: string) => (
            <span key={tag} className="px-3 py-1 bg-slate-50 rounded-full text-xs font-medium text-slate-600 border">{tag}</span>
          ))}
        </div>
      )}
      {link && (
        <Link href={link} className="inline-flex items-center text-primary font-bold group/link">
          Explore {title.split(' ')[0]} <ArrowRight className="ml-2 transition-transform group-hover/link:translate-x-1" size={18} />
        </Link>
      )}
    </div>
  )
}

function BenefitCard({ icon, title, description }: any) {
  return (
    <div className="text-center group">
      <div className="w-20 h-20 bg-primary/5 rounded-full flex items-center justify-center mx-auto mb-8 transition-transform group-hover:scale-110 text-primary">
        {icon}
      </div>
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-on-surface-variant leading-relaxed">{description}</p>
    </div>
  )
}
