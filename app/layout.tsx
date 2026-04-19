import type { Metadata, Viewport } from 'next'
import { Inter, Space_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter'
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ['400', '700'],
  variable: '--font-space-mono'
});

export const metadata: Metadata = {
  title: 'Ahmad Essameldin | Mechanical Design Engineer',
  description: 'Mechanical Design Engineer specializing in robotics, CAD, and industrial automation. Based in Minnesota, USA.',
  keywords: ['Mechanical Engineer', 'Robotics', 'CAD', 'SolidWorks', 'Automation', 'Design Engineer'],
  authors: [{ name: 'Ahmad Essameldin Ahmad' }],
  openGraph: {
    title: 'Ahmad Essameldin | Mechanical Design Engineer',
    description: 'Mechanical Design Engineer specializing in robotics, CAD, and industrial automation.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#00ff88',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${spaceMono.variable} font-sans antialiased overflow-x-hidden`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
