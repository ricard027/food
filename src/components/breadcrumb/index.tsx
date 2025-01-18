'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { GrHomeRounded } from 'react-icons/gr'
import { MdKeyboardArrowRight } from 'react-icons/md'

const BreadCrumb = () => {
  const [arrayWithLinks, setArrayWithLinks] = useState<string[]>([])

  useEffect(() => {
    const url = window?.location?.pathname || ''
    const urlsearch = window?.location?.search || ''
    const pathName = url.split('/').filter(Boolean)
    const searchUrl = urlsearch.split('=')

    const links = [...pathName, searchUrl[1]].filter(Boolean)
    setArrayWithLinks(links)
  }, [])

  return (
    <ol className='flex items-center whitespace-nowrap gap-2 py-6'>
      <li className='flex items-center gap-2'>
        <Link
          className='flex items-center text-sm text-gray-500  focus:outline-none'
          href='/'
        >
          <GrHomeRounded size={20} />
        </Link>
        <MdKeyboardArrowRight size={20} />
      </li>

      {arrayWithLinks.map((val, index) => {
        const isLast = index === arrayWithLinks.length - 1
        return (
          <li key={`${val}-${index}`} className='flex items-center gap-2'>
            {!isLast ? (
              <>
                <Link
                  className='text-md text-gray-500  focus:outline-none '
                  href={`/${arrayWithLinks.slice(0, index + 1).join('/')}`}
                >
                  {val}
                </Link>
                <MdKeyboardArrowRight size={20} />
              </>
            ) : (
              <span className='text-md font-semibold text-gray-800 truncate'>
                {val}
              </span>
            )}
          </li>
        )
      })}
    </ol>
  )
}

export default BreadCrumb
