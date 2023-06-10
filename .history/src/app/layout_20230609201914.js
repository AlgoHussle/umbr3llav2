import './globals.css'
import { Inter, Ro } from 'next/font/google'
import Navbar from 'src/components/navbar/Navbar.jsx'
import Footer from 'src/components/footer/Footer.jsx'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        {children}
      <Footer/>
      </body>
    </html>
  )
}





