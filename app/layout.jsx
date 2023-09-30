import Navbar from './components/Navbar'
import './styles.scss'



export const metadata = {
  title: 'Next13 demo',
  description: 'next13 + scss',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body >
        <Navbar />
        {children}</body>
    </html>
  )
}
