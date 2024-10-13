import Button from '@/components/button'
import Card from '@/components/card'
import Image from 'next/image'
import Link from 'next/link'

import Shelf from '@/components/shelf'
import Block from '@/components/block'

import * as motion from 'framer-motion/client'

export default function Home() {
  return (
    <main className='bg-secondary overflow-x-hidden '>
      <section className='md:grid relative sm:flex flex-col grid-cols-2 gap-6 p-4 max-w-6xl sm:text-cente md:text-start xs:text-center  m-auto container sm:pt-10 xs:pt-10 md:pt-0'>
        <div className='flex flex-col justify-center gap-6 md:items-start xs:items-center  sm:items-center'>
          <div className='overflow-hidden'>
            <Block time={0.1}>
              <h2 className='sm:text-4xl xs:text-2xl  md:text-5xl font-semibold max-w-lg'>
                Be The Fastest In Delivery Your
                <span className='text-primary ml-4'>Food</span>
              </h2>
            </Block>
          </div>
          <Block time={0.5}>
            <p className='text-textLight max-w-lg'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              molestias exercitationem tenetur maxime
            </p>
          </Block>

          <Block time={0.9}>
            <Button>Get started</Button>
          </Block>
        </div>
        <div className='relative sm:pt-10 xs:pt-10 md:pt-0  overflow-hidden'>
          <span className='bg-accent absolute left-0 top-0 block w-16 h-16 rounded-full opacity-20'></span>
          <span className='bg-accent absolute right-0 top-1/2 block w-16 h-16 rounded-full  opacity-10'></span>
          <span className='bg-accent absolute left-[-40px] bottom-1/4 block w-8 h-8 rounded-full opacity-25'></span>
          <span className='bg-accent absolute left-10 bottom-1/2 block w-4 h-4 rounded-full opacity-10'></span>
          <div className=' flex-1 min-h-[400px] grid items-stretch grid-cols-2'>
            <div className=' col-span-2 flex items-center justify-center'>
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.1, ease: 'easeIn' }}
              >
                <Image
                  src={'/image_1.png'}
                  width={300}
                  height={200}
                  alt='Image hero'
                />
              </motion.div>
            </div>
            <div className=' flex items-center justify-center'>
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3, ease: 'easeIn' }}
              >
                <Image
                  src={'/image_2.png'}
                  width={200}
                  height={200}
                  alt='Image hero'
                />
              </motion.div>
            </div>
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5, ease: 'easeIn' }}
            >
              <div className='ms flex items-center justify-center'>
                <Image
                  src={'/image_3.png'}
                  width={100}
                  height={200}
                  alt='Image hero'
                />
              </div>
            </motion.div>
          </div>
        </div>
        <div className='md:flex sm:hidden xs:hidden flex-col -translate-x-full  gap-4  absolute bottom-24'>
          <Image
            width={120}
            height={20}
            src={'/rectangle.png'}
            alt='decoration'
          />
          <Image
            width={120}
            height={20}
            src={'/rectangle.png'}
            alt='decoration'
          />
        </div>
      </section>
      <section className='bg-white py-20'>
        <div className='m-auto max-w-6xl container'>
          <Block time={0.5}>
            <div className='flex items-center flex-col '>
              <p className='text-primary font-medium text-lg'>How it works</p>
              <h3 className='font-semibold text-2xl'>What We Serve</h3>
              <p className='text-textLight font-medium text-lg max-w-2xl text-center my-6'>
                Product Quality Is Our Priority, And Always Guarantees Halal And
                Safety Until It Is In Your Hands.
              </p>
            </div>
          </Block>

          <div className='flex justify-between md:gap-6'>
            <Block time={0.5}>
              <Card
                src='/order.png'
                text='You only order through the app'
                title='Easy To Order'
              />
            </Block>
            <Block time={0.5}>
              <Card
                src='/courier.png'
                text='Best Quality'
                title='The best quality of food for you'
              />
            </Block>
            <Block time={1}>
              <Card
                src='/delivery.png'
                text='Fastest Delivery'
                title='Delivery will be on time'
              />
            </Block>
          </div>
        </div>
      </section>

      <section className='bg-white pb-20'>
        <div className='container m-auto max-w-6xl'>
          <Block time={0.5}>
            <div className='flex items-center flex-col '>
              <p className='text-primary font-medium text-lg'>Our menu</p>
              <h3 className='font-semibold text-2xl'>Our Popular Menu</h3>
              <p className='text-textLight font-medium text-lg max-w-2xl text-center my-6'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam
              </p>
            </div>
          </Block>
          <Block time={0.9}>
            <Shelf />
          </Block>

          <div className='flex items-center justify-center mt-20 mb-6'>
            <Button>More Menu</Button>
          </div>
        </div>
      </section>
      <Block time={0.5}>
        <section className='w-full bg-white pb-20'>
          <div className='container m-auto max-w-6xl relative'>
            <Image src={'/banner.png'} width={1440} height={400} alt='banner' />
            <div className='absolute w-full top-0 h-full flex flex-col justify-center items-center gap-4'>
              <p className='font-semibold text-2xl text-white max-w-md text-center'>
                Join our member and get discount up to 50%
              </p>
              <Button>Sign up</Button>
            </div>
          </div>
        </section>
      </Block>
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
    </main>
  )
}
