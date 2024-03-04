'use client'

import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'; // Importando ícones
import { ListProps } from './Interfaces/ListaProps';

function Lista({
  TextPrincipal,
  item1,
  item2,
  item3,
  item4,
  item5,
  item6,
  item7,
  item8,
  item9,
  item10,
}: ListProps) {
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const renderItem = (item?: string) => {
    if (!item) return null;
    return (
      <Link href="/" passHref key={item}>
        <li className='hover:underline'>{item}</li>
      </Link>
    );
  };

  return (
    <div>
      <div className='border-b lg:border-none border-gray-400 pb-6'>
        <h2
          className='text-gray-50 text-xl ml-4 lg:ml-0 justify-between font-bold cursor-pointer flex items-center'
          onClick={() => setIsOpen(!isOpen)}
        >
          {TextPrincipal}
          {isMobile && (isOpen ? <FiChevronUp className="mr-4" /> : <FiChevronDown className="mr-4" />)}
        </h2>
        {(isOpen || !isMobile) && (
          <ul className='text-gray-100 ml-4 lg:ml-0 pt-4 flex flex-col text-xs gap-3'>
            {renderItem(item1)}
            {renderItem(item2)}
            {renderItem(item3)}
            {renderItem(item4)}
            {renderItem(item5)}
            {renderItem(item6)}
            {renderItem(item7)}
            {renderItem(item8)}
            {renderItem(item9)}
            {renderItem(item10)}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Lista;
