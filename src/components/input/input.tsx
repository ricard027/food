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
        <legend>{legend}</legend>
        <input
          {...register(name)}
          type={type}
          className={`border border-primary ${!!messageError && 'outline-red-500 border-red-500  placeholder:text-red-400'}  py-2 px-4 w-full rounded-md`}
          placeholder={placeholder}
        />
        {!!messageError && <ErrorMessage>{messageError}</ErrorMessage>}
      </label>
    )
  }
)

InputComponent.displayName = InputComponent.name

export default InputComponent
