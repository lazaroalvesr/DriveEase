'use client'

import { api } from '@/app/api/api';
import Button from '@/app/libs/Button';
import { CategoryProps } from '@/app/libs/Interfaces/CategotyInterface';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { CiLocationOn } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";


const CategoryComponent: React.FC<{ params: { id: string } }> = ({ params }) => {
  const [categoria, setCategoria] = useState<CategoryProps | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const categoriaResponse = await api.get<CategoryProps>(`/category?id=${params.id}`);
        setCategoria(categoriaResponse.data);
      } catch (error) {
        console.error('Erro ao obter dados:', error);
      }
    };

    fetchData();
  }, [params.id]);

  return (
    <section className='max-w-6xl m-auto  mt-32 mb-72'>
      {categoria ? (
        <div>
          <h2 className='text-4xl ml-2 lg:ml-0'>{categoria.categoria}s</h2>
          <ul className='mt-12 lg:flex-row flex-col flex gap-6 justify-center lg:justify-start lg:items-start items-center'>
            {categoria.cars.map((carro) => (
              <Link key={carro.id} href={`/car/${carro.id}`}>
                <div className='bg-white lg:w-[221px] w-[340px] rounded-lg'>
                  <div className='flex flex-col '>
                    <div className='flex-shrink-0'>
                      <Image
                        src={carro.linkBanner}
                        alt={carro.model}
                        width={220}
                        height={100}
                        className='rounded-tl-lg w-full lg:max-w-56 rounded-tr-lg'
                      />
                    </div>
                    <div className='p-3'>
                      <p className='text-lg lg:text-base'>{carro.name}</p>
                      <div className='lg:w-44 h-20 w-80'>
                        <p className='text-gray-500 pb-8 lg:text-xs'>{carro.model}</p>
                      </div>
                      <p className='font-bold text-lg'>R$ {carro.Price}</p>
                      <p className='flex justify-between text-xs text-gray-500 pt-1'>{carro.Year} <span>{carro.kmRounds} Km</span></p>
                      <button className='bg-gray-800 text-gray-50 lg:w-48 mt-4 lg:py-2 py-4 rounded-xl w-80'>Ver parcelas</button>
                      <div className='border-t border-gray-400 w-[334px] lg:w-[219px] -ml-3 h-2 mt-3'></div>
                      <p className='flex items-center justify-between text-sm'><span className='flex text-xs gap-2'><CiLocationOn size={14} />{carro.City}  </span>   <span><CiHeart size={18} /></span></p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </ul>
        </div>
      ) : (
        <p>Carregando categoria...</p>
      )}
    </section>

  );
};

export default CategoryComponent;
