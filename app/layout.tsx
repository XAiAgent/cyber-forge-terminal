import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/terminal.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CyberForge Quantum Terminal',
  description: 'A next-generation command interface with AI assistance',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
