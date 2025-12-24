import type { Metadata } from 'next'
import { Inter, Outfit } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' })

export const metadata: Metadata = {
  title: 'Scholar AI - Understand Any Subject, Step by Step',
  description: 'Scholar AI is an upcoming AI-powered study assistant designed to help students understand any subject with clear, step-by-step explanations. Join the waitlist.',
  keywords: ['study assistant', 'AI tutor', 'homework help', 'student learning', 'education'],
  openGraph: {
    title: 'Scholar AI - Understand Any Subject, Step by Step',
    description: 'An upcoming AI-powered study assistant for students. Join the waitlist.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${outfit.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}
