import React from 'react'
import { CardAboutProps } from './Interfaces/CardAboutProps'
import Link from 'next/link'

function CardAbout({ text, link }: CardAboutProps) {
  return (
    <Link href={link} >
      <div className='bg-gray-800 lg:w-48 hover:scale-105 transition-transform duration-300 ease-in-out w-40 py-8 rounded-lg  flex'>
        <div className='flex justify-center items-center m-auto'>
          <h1 className='text-gray-50'>{text}</h1>
        </div>
      </div>
    </Link>
  )
}

export default CardAbout
