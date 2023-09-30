import './styles.scss'
import { Inter } from 'next/font/google'


export const metadata = {
  title: 'Next13 demo',
  description: 'next13 + scss',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >{children}</body>
    </html>
  )
}
