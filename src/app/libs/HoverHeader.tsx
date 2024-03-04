import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

interface MenuItem {
  link: string;
  text: string;
  icon: React.ReactNode;
}

interface HoverProps {
  title: string;
  items: MenuItem[];
  isMobile: boolean;
}

function HoverHeader({ title, items, isMobile }: HoverProps) {
  const [ativo, setAtivo] = useState(false)

  function toggle() {
    setAtivo((ativo) => !ativo);
  }

  return (
    <div>
      <div className='group items-start  flex lg:block:'>
        <div>
          <div className='w-[340px] lg:w-full flex justify-between items-center'>
            <h1 className='cursor-pointer'>{title}</h1>
            <button className='lg:hidden flex  lg:static lg:-ml-0' onClick={toggle}>
              {ativo ? <FiChevronUp className="mr-4" /> : <FiChevronDown className="mr-4" />}
            </button>
          </div>
          <div>
            <ul className={`lg:absolute pt-5 lg:bg-white rounded-md text-gray-900 lg:hidden lg:hover:flex lg:w-full lg:max-w-52 group-hover:block ${ativo ? 'text-lg mt-4 w-[230px] ' : ' bg-white text-gray-900 lg:h-auto h-0 text-transparent bg-transparent overflow-hidden '}`}>
              {items.map((item, index) => (
                <Link key={index} href="/">
                  <li className={` ${ativo ? "bg-gray-400 w-[350px] -ml-2 lg:-ml-0" : ""}`}>
                    <div className="flex ml-3 p-3 gap-3 lg:ml-0 lg:p-4 lg:pt-4 hover:bg-gray-400">
                      {item.icon}
                      <span className=' text-gray-900'>{item.text}</span>
                    </div>
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HoverHeader;

