'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { CiHeart, CiMenuFries } from "react-icons/ci";
import { TiMessages } from "react-icons/ti";
import { FaUserCircle } from "react-icons/fa";
import { IoCloseSharp } from 'react-icons/io5';
import HoverHeader from '../libs/HoverHeader';


function Header() {
  const [ativo, setAtivo] = useState(false)

  function toggle() {
    setAtivo((ativo) => !ativo);
  }

  return (
    <div className={` w-full border-b  ${ativo ? 'bg-gray-700 w-full' : "bg-white"} fixed top-0 left-0 right-0 z-50 `}>
      <header className='max-w-7xl m-auto h-16 '>
        <div className='flex justify-between'>
          <div className='lg:-ml-0 lg:-mt-3'>
            <Link href="/" className={`flex ml-6 items-center m-auto ${ativo ? 'hidden' : ''} text-center justify-center`}>
              <Image
                src="/img/car_icon.png"
                alt='120'
                width={75}
                height={120}
              />
              <h1 className='-ml-3 font-bold text-lg'>DriveEase</h1>
            </Link>
          </div>
          <div className="lg:hidden absolute right-5 top-4">
            <button onClick={() => toggle()}>
              {ativo ? <IoCloseSharp size={24} color="white" /> : <CiMenuFries size={24} color="black" />}
            </button>
          </div>
          <ul className={`flex  items-center lg:h-auto lg:text-[12px] gap-12 ${ativo ? 'absolute bg-white w-full  top-[60px] pt-20 flex flex-col' : 'h-0 overflow-hidden'}`}>
            <div className={`lg:hidden text-xl text-gray-700 -mt-12`}>
              <h1>Menu</h1>
            </div>
            <li>
              <HoverHeader
                title="Comprar"
                items={[
                  { link: "/pagina-li1", text: "Carros usados", icon: <Image src={"/img/car.png"} alt='o' width={22} height={22} /> },
                  { link: "/pagina-li2", text: "Carros novos", icon: <Image src={"/img/carroUsado.png"} alt='o' width={22} height={22} /> },
                  { link: "/pagina-li4", text: "Motos usadas", icon: <Image src={"/img/motoUsada.png"} alt='o' width={22} height={22} /> },
                  { link: "/pagina-li5", text: "Motos novas", icon: <Image src={"/img/motoNova.png"} alt='o' width={22} height={22} /> },
                  { link: "/pagina-li5", text: "Vistoriado", icon: <Image src={"/img/Vistoriado.png"} alt='o' width={22} height={22} /> }
                ]} isMobile={false} />

            </li>
            <li>
              <HoverHeader
                title="Vender"
                items={[
                  { link: "/pagina-li1", text: "Vender carro", icon: <Image src={"/img/saleCar.png"} alt='o' width={22} height={22} /> },
                  { link: "/pagina-li2", text: "Vender moto", icon: <Image src={"/img/motoNova.png"} alt='o' width={22} height={22} /> },
                  { link: "/pagina-li3", text: "Gerenciar meu anúncio", icon: <Image src={"/img/garagem.png"} alt='o' width={22} height={22} /> },
                  { link: "/pagina-li4", text: "Plataforma revendedores", icon: <Image src={"/img/medidor.png"} alt='o' width={22} height={22} /> },
                ]} isMobile={false} />

            </li>
            <li>
              <HoverHeader
                title="Serviços"
                items={[
                  { link: "/pagina-li1", text: "Tabela Fipe", icon: <Image src={"/img/grafico.png"} alt='o' width={22} height={22} /> },
                  { link: "/pagina-li2", text: "Financiamento", icon: <Image src={"/img/financiamento.png"} alt='o' width={22} height={22} /> },
                  { link: "/pagina-li3", text: "Catálogo 0Km", icon: <Image src={"/img/carro.png"} alt='o' width={22} height={22} /> },
                  { link: "/pagina-li4", text: "Vistoriado", icon: <Image src={"/img/Vistoriado.png"} alt='o' width={22} height={22} /> },
                  { link: "/pagina-li5", text: "Texto do item 5", icon: <Image src={"/img/saleCar.png"} alt='o' width={22} height={22} /> },
                  { link: "/pagina-li4", text: "Plataforma revendedores", icon: <Image src={"/img/medidor.png"} alt='o' width={22} height={22} /> },
                  { link: "/pagina-li4", text: "Seguro Veículo", icon: <Image src={"/img/seguro.png"} alt='o' width={22} height={22} /> },

                ]} isMobile={false} />

            </li>
            <li>
              <HoverHeader
                title="Noticias DriveEase"
                items={[
                  { link: "/pagina-li1", text: "Portal", icon: <Image src={"/img/noticia.png"} alt='o' width={22} height={22} /> },
                  { link: "/pagina-li2", text: "Últimas noticias", icon: <Image src={"/img/tv.png"} alt='o' width={22} height={22} /> },
                  { link: "/pagina-li3", text: "Testes", icon: <Image src={"/img/carro.png"} alt='o' width={22} height={22} /> },
                  { link: "/pagina-li4", text: "Comparativos", icon: <Image src={"/img/sedan.png"} alt='o' width={22} height={22} /> },
                  { link: "/pagina-li5", text: "Videos", icon: <Image src={"/img/filmadora.png"} alt='o' width={22} height={22} /> },
                  { link: "/pagina-li5", text: "Motos", icon: <Image src={"/img/motoNova.png"} alt='o' width={22} height={22} /> },
                  { link: "/pagina-li5", text: "Segredos", icon: <Image src={"/img/estrela.png"} alt='o' width={22} height={22} /> },
                  { link: "/pagina-li5", text: "Dicas", icon: <Image src={"/img/ideia.png"} alt='o' width={22} height={22} /> },
                  { link: "/pagina-li5", text: "Bolso", icon: <Image src={"/img/money.png"} alt='o' width={22} height={22} /> },
                ]} isMobile={false} />

            </li>
            <li>
              <HoverHeader
                title="Ajuda"
                items={[
                  { link: "/pagina-li1", text: "Para você", icon: <Image src={"/img/user.png"} alt='o' width={22} height={22} /> },
                  { link: "/pagina-li2", text: "Para sua loja", icon: <Image src={"/img/meet.png"} alt='o' width={22} height={22} /> },
                  { link: "/pagina-li3", text: "Segurança", icon: <Image src={"/img/escudo.png"} alt='o' width={22} height={22} /> },
                ]} isMobile={false} />

            </li>
            <div className='lg:hidden mt-32 bg-gray-700 w-full text-gray-300 text-center py-6 '>
              <h1>Acesse a plataforma do <Link className='text-gray-50' href={""}>cockipt</Link></h1>
            </div>
          </ul>
          <div className={`flex mt-7 lg:mt-0 lg:static absolute right-[74px] -top-6  ${ativo ? 'border-none  -top-8 ' : ''} items-center border-l lg:h-16 h-14   border-gray-400`}>
            <div className={`lg:ml-16 lg:pr-4 pr-2 lg:flex ${ativo ? 'text-gray-50 pl-4 w-72 mt-6 ' : 'hidden '}`}>
              <Link href="" className='flex items-center lg:text-[12px]'>
                <span className='pr-2'><FaUserCircle className='' size={22} /></span>
                {ativo ? 'Entrar ou cadastrar ' : 'Entrar'}
              </Link>
            </div>
            <div className={`flex lg:gap-5 gap-3   ${ativo ? 'hidden ' : 'ml-2 lg:ml-0'}`}>
              <button> <CiHeart size={30} className='w-5  lg:w-10' /></button>
              <button><TiMessages size={30} className='w-5 lg:w-10' /></button>
            </div>
          </div>
        </div>
      </header>
    </div>

  )
}

export default Header