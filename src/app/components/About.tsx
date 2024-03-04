import React from 'react'
import CardAbout from '../libs/CardAbout'

function About() {
  return (
    <section className='max-w-7xl mt-7 m-auto'>
      <h2 className='text-lg text-gray-500 -mb-8 font-bold'>Na DriveEase</h2>
      <div className='flex justify-center mt-16 lg:-ml-1 items-center lg:justify-start'>
        <div className='grid lg:grid-cols-6 grid-cols-2 gap-3 lg:gap-4'>
          <CardAbout link='/' text='Financiamento' />
          <CardAbout link='/' text='Vender carro' />
          <CardAbout link="/" text='Catálogo' />
          <CardAbout link="/" text='Seguro Veículo' />
          <CardAbout link="/" text='Tabela Fipe' />
          <CardAbout link="/" text='Noticias DriveEase' />
        </div>
      </div>
    </section>
  )
}

export default About