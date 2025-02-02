import Button from '@/components/button';
import Card from '@/components/card';
import Image from 'next/image';
import Block from '@/components/block';
import * as motion from 'framer-motion/client';
import WidgetCategory from '@/components/widgetCategory';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="bg-secondary overflow-hidden">
      <section className="md:grid relative sm:flex flex-col grid-cols-2 gap-6 p-4 max-w-6xl sm:text-center md:text-start xs:text-center m-auto container sm:pt-10 xs:pt-10 md:pt-0">
        <div className="flex flex-col justify-center gap-6 md:items-start xs:items-center sm:items-center">
          <div>
            <Block time={0.1}>
              <h2 className="sm:text-4xl xs:text-2xl md:text-5xl font-semibold max-w-lg">
                Be The Fastest In Delivery Your
                <span className="text-primary ml-4">Food</span>
              </h2>
            </Block>
          </div>
          <Block time={0.5}>
            <p className="text-textLight max-w-lg">
              Experience lightning-fast delivery with the freshest and most delicious meals straight to your door. Your cravings, our priority!
            </p>
          </Block>

          <Block time={0.9}>
            <Link href={'/login'}>
              <Button>Get started</Button>
            </Link>
          </Block>
        </div>
        <div className="relative sm:pt-10 xs:pt-10 md:pt-0 overflow-hidden">
          <span className="bg-accent absolute left-0 top-0 block w-16 h-16 rounded-full opacity-20"></span>
          <span className="bg-accent absolute right-0 top-1/2 block w-16 h-16 rounded-full opacity-10"></span>
          <span className="bg-accent absolute left-[-40px] bottom-1/4 block w-8 h-8 rounded-full opacity-25"></span>
          <span className="bg-accent absolute left-10 bottom-1/2 block w-4 h-4 rounded-full opacity-10"></span>
          <div className="flex-1 min-h-[400px] grid items-stretch grid-cols-2">
            <div className="col-span-2 flex items-center justify-center">
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.1, ease: 'easeIn' }}
              >
                <Image
                  src={'/image_1.png'}
                  width={300}
                  height={200}
                  alt="Delicious meal"
                />
              </motion.div>
            </div>
            <div className="flex items-center justify-center">
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3, ease: 'easeIn' }}
              >
                <Image
                  src={'/image_2.png'}
                  width={200}
                  height={200}
                  alt="Fresh ingredients"
                />
              </motion.div>
            </div>
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5, ease: 'easeIn' }}
            >
              <div className="ms flex items-center justify-center">
                <Image
                  src={'/image_3.png'}
                  width={100}
                  height={200}
                  alt="Top quality service"
                />
              </div>
            </motion.div>
          </div>
        </div>

        <div className="md:flex sm:hidden xs:hidden flex-col -translate-x-full gap-4 absolute bottom-24">
          <Image
            width={120}
            height={20}
            src={'/rectangle.png'}
            alt="decorative rectangle"
          />
          <Image
            width={120}
            height={20}
            src={'/rectangle.png'}
            alt="decorative rectangle"
          />
        </div>
      </section>
      <section>
        <div className="bg-white pt-20">
          <div className="xs:px-4 max-w-6xl w-full m-auto sm:px-6 md:px-6 lg:px-0">
            <WidgetCategory />
          </div>
        </div>
      </section>
      <section className="bg-white py-20">
        <div className="m-auto max-w-6xl container">
          <Block time={0.5}>
            <div className="flex items-center flex-col">
              <p className="text-primary font-medium text-lg">How it works</p>
              <h3 className="font-semibold text-2xl">What We Serve</h3>
              <p className="text-textLight font-medium text-lg max-w-2xl text-center my-6">
                We ensure the highest product quality and prioritize your safety, delivering fresh and halal meals straight to your table.
              </p>
            </div>
          </Block>

          <div className="flex justify-between md:gap-6 md:flex-row sm:flex-col xs:flex-col">
            <Block time={0.5}>
              <Card
                src="/order.png"
                text="Place your orders seamlessly through our app."
                title="Easy To Order"
              />
            </Block>
            <Block time={0.5}>
              <Card
                src="/courier.png"
                text="We take pride in offering only the best quality ingredients."
                title="Best Quality"
              />
            </Block>
            <Block time={1}>
              <Card
                src="/delivery.png"
                text="Our delivery is fast and reliable, every time."
                title="Fastest Delivery"
              />
            </Block>
          </div>
        </div>
      </section>

      <section className="bg-white pb-20">
        <div className="container m-auto max-w-6xl flex flex-col items-center">
          <Block time={0.5}>
            <div className="flex items-center flex-col">
              <p className="text-primary font-medium text-lg">Our menu</p>
              <h3 className="font-semibold text-2xl">Our Popular Menu</h3>
              <p className="text-textLight font-medium text-lg max-w-2xl text-center my-6">
                Explore our customer favorites, made to satisfy every craving.
              </p>
            </div>
          </Block>
          <Block time={0.5}>
            <div className="flex items-center justify-center mt-6">
              <Link href={'/menu'}>
                <Button>More Menu</Button>
              </Link>
            </div>
          </Block>
        </div>
      </section>
      <Block time={0.5}>
        <section className="w-full bg-white pb-20 md:flex sm:hidden xs:hidden">
          <div className="container m-auto max-w-6xl relative">
            <Image
              src={'/banner.png'}
              width={1440}
              height={400}
              alt="Special discount banner"
            />
            <div className="absolute w-full top-0 h-full flex flex-col justify-center items-center gap-4">
              <p className="font-semibold text-2xl text-white max-w-md text-center">
                Join our membership and enjoy discounts up to 50%!
              </p>
              <Link href={'/register'}>
                <Button>Sign up</Button>
              </Link>
            </div>
          </div>
        </section>
      </Block>
    </main>
  );
}
