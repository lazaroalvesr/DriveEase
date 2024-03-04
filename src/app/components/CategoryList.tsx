'use client'

import React, { useState, useEffect } from 'react';
import { api } from '../api/api';
import Link from 'next/link';
import { CategoryProps } from '../libs/Interfaces/CategotyInterface';
import Image from 'next/image';

const CategoryList: React.FC = () => {
  const [categorias, setCategorias] = useState<CategoryProps[]>([]);
  const [erro, setErro] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get<CategoryProps[]>('/categoryAll');
        setCategorias(response.data);
        setErro('');
      } catch (error) {
        setErro('Erro ao obter categorias da API.');
        console.error('Erro ao obter categorias:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='max-w-7xl m-auto mt-20 mb-20'>
      <div className='flex mt-20 justify-center '>
        <div>
          <h2 className='text-4xl'>Categoria</h2>
          <ul className='mt-4 grid lg:grid-cols-7 grid-cols-2 gap-4 justify-center items-center'>
            {categorias.map((categoria) => (
              <li key={categoria.id} className='hover:scale-105 transition-transform duration-300 ease-in-out'>
                <Link href={`/categoria/${categoria.id}`}>
                  <Image
                    src={categoria.linkImg}
                    alt={'oi'}
                    width={400}
                    height={120}
                    className='rounded-xl w-full max-w-40'
                  />
                  {categoria.categoria}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CategoryList;
