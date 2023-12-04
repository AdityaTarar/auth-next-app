import Image from 'next/image'
import { Inter } from 'next/font/google'
import Login from './auth/login'
import { useRouter } from 'next/router'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const router = useRouter()
  return (
    <div className="flex justify-center items-center min-h-screen	bg-[#FEF6F8] flex-col px-64">
      <span className='text-[32px]'>Welcome to Imapct Hub</span>
      <div className='flex w-full justify-center gap-20 mt-32'>
        <button
          onClick={() => router.push('/auth/login')}
          className="flex w-full justify-center md bg-[#E8486F] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#E8486F] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Sign in
        </button>
        <button
          onClick={() => router.push('/auth/signup')}
          className="flex w-full justify-center md bg-[#fffff] px-3 py-1.5 text-sm font-semibold leading-6 text-[#E8486F] shadow-sm border-solid border-2 border-[#E8486F]"
        >
          Sign Up
        </button>
      </div>
    </div>

  )
}
