import './globals.css'
import type { Metadata } from 'next'
import { Inter, Manrope } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Toaster } from 'react-hot-toast'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope' })

export const metadata: Metadata = {
  title: 'TOOLOI | Premium Multi-Tool SaaS',
  description: 'Precision tools for modern workflows. Image, PDF, Dev, and AI processing in one suite.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${manrope.variable} font-body bg-surface antialiased`}>
        <Toaster position="top-right" />
        <Navbar />
        <main className="min-h-screen pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
