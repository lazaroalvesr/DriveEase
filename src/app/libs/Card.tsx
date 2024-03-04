import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { FaRegUserCircle } from "react-icons/fa";
import { CardProps } from './Interfaces/CardProps';

function Card({ link, img, desciption, Title, about, author }: CardProps) {
  return (
    <div>
      <Link href={link} target='_blank'>
        <div className='bg-white rounded-lg h-[340px] lg:h-80 w-52'>
          <div className='w-52'>
            <Image
              src={img}
              alt={desciption}
              width={450}
              height={120}
              className='w-full max-w-56 h-32'
            />
            <div className='p-2 pb-4'>
              <p className='text-sm pt-2'>{Title}</p>
              <div className='h-28'>
                <p>{about}</p>
              </div>
              <p className='flex items-center gap-2   text-sm'><FaRegUserCircle size={20} />{author}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default Card