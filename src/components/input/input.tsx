import { FC, forwardRef, HTMLAttributes } from 'react'
import ErrorMessage from './errorMessage'

interface IinputProps extends HTMLAttributes<HTMLInputElement> {
  legend: string
  messageError: string
  placeholder: string
  name: string
  type?: string
  register: any
}

const InputComponent: FC<IinputProps> = forwardRef(
  ({ messageError, legend, placeholder, register, name, type }) => {
    return (
      <label data-error={!!messageError} className='w-full'>
        <legend className='py-2'>{legend}</legend>
        <input
          {...register(name)}
          type={type}
          className={`border-b-accent bg-[#fff4ef]   focus:outline-none border-b-2 text-accent  placeholder:text-accent ${!!messageError && 'outline-red-500 bg-red-100 border-b-red-500  placeholder:text-red-500 '}  py-2 px-4 w-full`}
          placeholder={placeholder}
        />
        {!!messageError && <ErrorMessage>{messageError}</ErrorMessage>}
      </label>
    )
  }
)

InputComponent.displayName = InputComponent.name

export default InputComponent
