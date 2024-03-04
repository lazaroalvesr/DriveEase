import Image from 'next/image'
import React from 'react'

function CardLogo() {
  return (
    <section className='w-full bg-gray-600 -mt-8 lg:-mt-0'>
      <div className='justify-center items-center text-gray-50  lg:text-3xl flex m-auto p-4'>
        <div className=' flex border-r -ml-16 lg:-ml-0'>
          <div className='flex flex-row mr-3   flex-1 items-center '>
            <Image
              src="/img/Logo_white.png"
              alt='120'
              width={80}
              height={120}
              className='w-full lg:max-w-20 max-w-12'
            />
            <p className='text-sm flex-row'>Drive Ease</p>
          </div>
        </div>
        <div className='ml-4 w-60 lg:w-96 -mr-20 lg:-mr-0'>
          <p className='lg:text-xs text-[12px]'>Um empresa <span className='lg:text-xl text-[14px] pl-4'>Drive Ease Group</span></p>
          <p className='lg:text-xs text-[12px] w-40  flex'>Um empresa parceira <span className='lg:text-xl text-[14px]'>Banco</span></p>
        </div>
      </div>
    </section>
  )
}

export default CardLogo

/*
import Image from 'next/image'
import React from 'react'

function CardLogo() {
  return (
    <section className='w-full bg-gray-600 -mt-8 lg:-mt-0'>
      <div className='justify-center items-center text-gray-50  lg:text-3xl flex m-auto p-4'>
        <div className=' flex border-r -ml-16 lg:-ml-0'>
          <div className='flex flex-row mr-3   flex-1 items-center '>
            <Image
              src="/img/Logo_white.png"
              alt='120'
              width={80}
              height={120}
              className='w-full lg:max-w-20 max-w-12'
            />
            <p className='text-sm flex-row'>Drive Ease</p>
          </div>
        </div>
        <div className='ml-4 w-60 lg:w-full -mr-20 lg:-mr-0'>
          <p className='lg:text-xs text-[12px]'>Um empresa <span className='lg:text-xl text-[14px] pl-4'>Drive Ease Group</span></p>
          <p className='lg:text-xs text-[12px] w-40  flex'>Um empresa parceira <span className='lg:text-xl text-[14px]'>Banco</span></p>
        </div>
      </div>
    </section>
  )
}

export default CardLogo


*/