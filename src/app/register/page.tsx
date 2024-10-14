const RegisterPage = async () => {
  return (
    <section>
      <div className='container max-w-6xl m-auto  min-h-screen grid grid-cols-2 '>
        <div className='bg-red-400'>
          <h1>Cadastre-se</h1>
        </div>
        <div className='bg-primary'>
          <label htmlFor=''>
            <legend>Name</legend>
            <input type='text' />
          </label>
        </div>
      </div>
    </section>
  )
}
export default RegisterPage
