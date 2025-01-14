import { CgSpinner } from 'react-icons/cg'

const Loding = () => {
  return (
    <div className='h-screen bg-gray-50 backdrop-blur-2xl flex items-center justify-center z-50 w-full'>
      <div className='flex flex-col items-center gap-2'>
        <p className='text-lg'>carregando...</p>
        <CgSpinner size={30} className='animate-spin' />
      </div>
    </div>
  )
}
export default Loding
