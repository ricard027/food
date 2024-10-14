import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='pt-20'>
      <div className='container max-w-6xl m-auto  grid grid-cols-4 border-[#1d1d1d] border-b pb-20'>
        <div className=' flex flex-col gap-4'>
          <Link className='flex items-baseline gap-1' href={'/'}>
            <p className='text-lg font-semibold'>Lets Food</p>
            <Image src='/logo.svg' alt='image logo' width={30} height={30} />
          </Link>
          <p>Jalan Semangka Raya, Telaga Murni,Cikarang Barat, Kab. Bekasi</p>
          <div className='flex items-center gap-4'>
            <span>icon</span>
            <span>icon</span>
            <span>icon</span>
          </div>
        </div>
        <div className=' flex flex-col gap-4'>
          <p className='text-lg font-semibold'>Company</p>
          <ul className='flex flex-col gap-2'>
            <li>About Us</li>
            <li>Carrer</li>
            <li>How It Work</li>
          </ul>
        </div>
        <div className=' flex flex-col gap-4'>
          <p className='text-lg font-semibold'>Policy</p>
          <ul className='flex flex-col gap-2'>
            <li>FAQ</li>
            <li>Privacy</li>
            <li>Shipping</li>
          </ul>
        </div>
        <div className=' flex flex-col gap-4'>
          <p className='text-lg font-semibold'>Get In Touch</p>
          <ul className='flex flex-col gap-2'>
            <li>+62 896 7311 2766</li>
            <li>food@example.com</li>
          </ul>
        </div>
      </div>
      <div className='py-10'>
        <p className='text-center text-sm'>
          © 2022 Let’sFood. ALL RIGHT RESERVED.
        </p>
      </div>
    </footer>
  )
}

export default Footer
