import React from 'react'
import Card from '../libs/Card'

function Noticias() {
  return (
    <section className='max-w-7xl m-auto '>
      <h2 className='text-lg text-gray-500 ml-6 lg:ml-0 font-bold'>Noticias</h2>
      <div className='mt-7 w-full ml-6 lg:ml-0 max-w-[320px] lg:max-w-full overflow-x-scroll lg:overflow-x-visible'>
        <div className='flex flex-row gap-3'>
          <Card
            link='https://www.webmotors.com.br/wm1/noticias/canoo-mostra-carros-para-transporte-de-astronautas'
            img='/img/conoo.jpg'
            desciption='Carro dos astronautas'
            Title='Ultimas Noticias'
            about='Canoo mostra carros para transporte de astronautas'
            author='Eduardo Pereira'
          />
          <Card
            link='https://www.webmotors.com.br/wm1/noticias/os-carros-das-estrelas-da-nba'
            img='/img/bmw.jpg'
            desciption='Carro dos Jogadores de Basquete'
            Title='Ultimas Noticias'
            about='Os carros das estrelas da NBA'
            author='Gonçavelz Pereira'
          /> <Card
            link='https://www.webmotors.com.br/wm1/noticias/como-sera-a-eletrificacao-dos-carros-no-brasil'
            img='/img/recarga.jpeg'
            desciption='Carro Eletrico'
            Title='Ultimas Noticias'
            about='Como será a eletrificação dos carros no Brasil'
            author='Eduardo Gomes'
          /> <Card
            link='https://www.webmotors.com.br/wm1/noticias/novo-suv-eletrico-da-honda-se-chamara-prologue'
            img='/img/prologue.jpg'
            desciption='Lançamento da Honda'
            Title='Ultimas Noticias'
            about='Novo SUV elétrico da Honda se chamará Prolog'
            author='Eduardo Pereira de Almeida'
          /> <Card
            link='https://www.webmotors.com.br/wm1/noticias/cinco-coisas-que-os-carros-pegaram-dos-smartphones'
            img='/img/painel_tesla.png'
            desciption='Coisas que os carros pegaram dos smartphones'
            Title='Ultimas Noticias'
            about='Cinco coisas que os carros pegaram dos smartphones'
            author='Eduarda Gomes'
          /> <Card
            link='https://www.webmotors.com.br/wm1/noticias/os-5-carros-eletricos-com-maior-autonomia-no-mundo'
            img='/img/carro_eletrico.png'
            desciption='Os 5 carros eletricos com maior automonomia do mundo'
            Title='Ultimas Noticias'
            about='Os 5 carros eletricos com maior automonomia do mundo'
            author='Renato Strada'
          />
        </div>
      </div>
    </section>
  )
}


export default Noticias