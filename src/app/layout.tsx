import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'EmirGAI - AI-Powered Marketing That Delivers Real ROI',
  description: 'Manchester\'s first AI-powered digital marketing agency. Get 300% ROI improvement with Google Workspace automation and cutting-edge AI tools. Book your free consultation.',
  keywords: 'AI marketing Manchester, Google Workspace automation, digital marketing ROI, marketing automation UK',
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