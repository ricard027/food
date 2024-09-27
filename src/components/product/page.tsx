import Button from '@/components/button'
import Card from '@/components/card'
import Product from '@/components/product'
import Image from 'next/image'

export default function Home() {
  return (
    <main className='bg-secondary'>
      <section className='md:grid relative sm:flex flex-col grid-cols-2 gap-6 p-4 max-w-6xl sm:text-cente md:text-start xs:text-center  m-auto container'>
        <div className='flex flex-col justify-center gap-6 md:items-start xs:items-center  sm:items-center'>
          <h2 className='sm:text-4xl xs:text-2xl  md:text-5xl font-semibold max-w-lg'>
            Be The Fastest In Delivery Your
            <span className='text-primary ml-4'>Food</span>
          </h2>
          <p className='text-textLight max-w-lg'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            molestias exercitationem tenetur maxime
          </p>
          <div>
            <Button>Get started</Button>
          </div>
        </div>
        <div className='relative md:flex xs:hidden sm:hidden'>
          <span className='bg-accent absolute left-0 top-0 block w-16 h-16 rounded-full'></span>
          <span className='bg-accent absolute right-0 top-1/2 block w-16 h-16 rounded-full'></span>
          <span className='bg-accent absolute left-[-40px] bottom-1/4 block w-8 h-8 rounded-full'></span>
          <span className='bg-accent absolute left-10 bottom-1/2 block w-4 h-4 rounded-full'></span>
          <Image
            src={'/img-hero.png'}
            width={500}
            height={500}
            alt='Image hero'
          />
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
          <div className='flex items-center flex-col '>
            <p className='text-primary font-medium text-lg'>How it works</p>
            <h3 className='font-semibold text-2xl'>What We Serve</h3>
            <p className='text-textLight font-medium text-lg max-w-2xl text-center my-6'>
              Product Quality Is Our Priority, And Always Guarantees Halal And
              Safety Until It Is In Your Hands.
            </p>
          </div>
          <div className='flex justify-between md:gap-6'>
            <Card
              src='/order.png'
              text='You only order through the app'
              title='Easy To Order'
            />
            <Card
              src='/courier.png'
              text='Best Quality'
              title='The best quality of food for you'
            />
            <Card
              src='/delivery.png'
              text='Fastest Delivery'
              title='Delivery will be on time'
            />
          </div>
        </div>
      </section>
      <section className='bg-white pb-20'>
        <div className='container m-auto max-w-6xl'>
          <div className='flex items-center flex-col '>
            <p className='text-primary font-medium text-lg'>Our menu</p>
            <h3 className='font-semibold text-2xl'>Our Popular Menu</h3>
            <p className='text-textLight font-medium text-lg max-w-2xl text-center my-6'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam
            </p>
          </div>
          <div className='flex justify-between gap-4'>
            <Product
              src='/noodle.png'
              name='Noodle'
              description='is a noodle'
              price={50.0}
            />
            <Product
              src='/noodlejaponese.png'
              name='Noodle japonese'
              description='is a noodle'
              price={50.0}
            />
            <Product
              src='/fruitsalad.png'
              name='Fruit salad'
              description='is a noodle'
              price={50.0}
            />
            <Product
              src='/sandwich.png'
              name='Sandwich'
              description='is a noodle'
              price={50.0}
            />
          </div>
          <div className='flex items-center justify-center mt-20 mb-6'>
            <Button>More Menu</Button>
          </div>
        </div>
      </section>
      <section className='bg-red-500 flex justify-between min-h-80 contain      er m-auto max-w-6xl px-4'>
        <div className='grid grid-cols-2 flex-1'>
          <div className=' bg-green-400 col-span-2 bg-[url(/grid-image1.png)] bg-center bg-no-repeat bg-cover'></div>
          <div className='bg-blue-300'></div>
          <div className='bg-gray-600'></div>
        </div>
        <div className='bg-green-500 flex-1'></div>
      </section>
    </main>
  )
}
