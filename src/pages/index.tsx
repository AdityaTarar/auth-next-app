import Image from 'next/image'
import { Inter } from 'next/font/google'
import Login from './auth/login'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="flex justify-center items-center min-h-screen	bg-[#FEF6F8]">
      <h1>Welcome to authentication app</h1>
    </div>

  )
}
