'use client'

import { api } from '@/app/api/api'
import { CarProps } from '@/app/libs/Interfaces/CarProps'
import { Car } from '@/app/libs/Interfaces/InterfaceCar'
import React, { useEffect, useState } from 'react'
import { MdOutlineConstruction } from "react-icons/md";



function Car({ params }: CarProps) {
  const [carro, setCarro] = useState<Car>()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get<Car>(`/unique?id=${params.id}`);
        setCarro(response.data);
      } catch (error) {
        console.error('Erro ao obter dados:', error);
      }
    };

    fetchData();
  }, [params.id]);


  return (
    <div className='mt-32 mb-96'>
      {carro && (
        <div>
          <h1 className='lg:text-6xl text-center justify-center items-center flex gap-4'>Em construção <span><MdOutlineConstruction /></span></h1>
        </div>
      )
      }
    </div >
  )
}

export default Car