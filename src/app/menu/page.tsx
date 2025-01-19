import BreadCrumb from '@/components/breadcrumb'
import CategoryWidget from '@/components/category'
import GridLayout from '@/components/gridLayout'

import { GetFoodsCategoryService } from '@/service/getCategoryFoodsService'
import { CiSearch } from 'react-icons/ci'

const MenuWhitoutSearch = async () => {
  const allCategories = await GetFoodsCategoryService()
  return (
    <section className='max-w-6xl m-auto pb-20'>
      <div className='p-4 my-4'>
        <BreadCrumb />
        <div>
          <h1 className='text-3xl font-semibold mb-2'>
            Discover our complete <span className='text-primary'>Menu</span>
          </h1>
          <p>
            Welcome to our menu! Enjoy a variety of dishes made with the finest
            ingredients. From flavorful chicken options to delicious vegan
            plates, we have something for everyone. Explore and savor the best
            of our cuisine.
          </p>
        </div>
      </div>
      <div className='p-4 relative flex items-center pb-10'>
        <CiSearch size={20} className='absolute left-10' />
        <input
          type='search'
          placeholder='search by title, recipes and ingredients'
          className='w-full p-4 bg-gray-100 rounded-lg pl-16'
        />
      </div>
      <GridLayout>
        {allCategories?.map((data, key) => (
          <CategoryWidget {...data} key={key} />
        ))}
      </GridLayout>
    </section>
  )
}

export default MenuWhitoutSearch
