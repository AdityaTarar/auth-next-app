import Navbar from './navbar'
import Footer from './footer'

export default function Layout({ children }: any) {
  return (
    <>
      <Navbar />
      <main>
        <div className='bg-[#000]'>{children}</div>
      </main>
      <Footer />
    </>
  )
}