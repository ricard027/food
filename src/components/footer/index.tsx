import Image from 'next/image'
import Link from 'next/link'
import { SlSocialFacebook, SlSocialInstagram, SlSocialYoutube } from 'react-icons/sl'

const Footer = () => {
  return (
    <footer className='pt-20 bg-secondary'>
      <div className='container max-w-6xl m-auto  md:grid md:grid-cols-4 sm:grid-cols-2 sm:gap-6 md:gap-4 xs:flex xs:flex-col xs:gap-6 border-[#1d1d1d] border-b pb-20  sm:px-6 xs:px-6  md:px-6 '>
        <div className=' flex flex-col gap-4 max-w-56 '>
          <Link className='flex items-baseline gap-1' href={'/'}>
            <p className='text-lg font-semibold'>Lets Food</p>
            <Image src='/logo.svg' alt='image logo' width={30} height={30} />
          </Link>
          <p>Jalan Semangka Raya, Telaga Murni,Cikarang Barat, Kab. Bekasi</p>
          <div className='flex items-center gap-4'>
            <SlSocialInstagram  size={20} />
            <SlSocialFacebook  size={20}  />
            <SlSocialYoutube  size={20}  />
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
