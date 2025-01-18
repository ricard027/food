import { FC } from 'react'

const Select: FC<{ options: string[] }> = ({ options }) => {
  if (!options?.length) return <></>
  return (
    <select className='py-2 px-4 rounded-lg border border-gray-200'>
      <optgroup>
        <option value='Order by'>Order by</option>
        {options.map((option: string, index: number) => (
          <option value={option} key={index}>
            {option}
          </option>
        ))}
      </optgroup>
    </select>
  )
}

export default Select
