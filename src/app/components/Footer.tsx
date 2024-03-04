'use client'

import Link from 'next/link';
import React, { useEffect, useState } from 'react'

function Footer() {
  const [anoCriacao, setAnoCriacao] = useState("");

  useEffect(() => {
    const obterAnoAtual = () => {
      const data = new Date();
      return data.getFullYear().toString();
    };

    setAnoCriacao(obterAnoAtual());
  }, []);


  return (
    <footer className='bg-gray-800 w-full'>
      <div className='flex m-auto justify-center flex-col text-xs items-center text-gray-50'>
        <p className="pt-4 ">© 2024-{anoCriacao} © Drive Ease | Todos os Direitos Reservados.</p>
        <p className="pt-2 pb-4">Feito por |  <Link href="https://www.lazaroalvesr.com/" target="_blank">Lázaro Alves R</Link></p>
      </div>
    </footer>
  )
}

export default Footer