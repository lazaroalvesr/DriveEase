import Link from 'next/link';
import React from 'react';

function Doubts() {
  return (
    <section className='w-full bg-gray-600 mt-12'>
      <div className='text-center p-4'>
        <h1 className='text-sm text-gray-50'>Nossos canais de atendimento são 100% digitais. Precisa de ajuda? <Link href="/" className='underline'>CLIQUE AQUI</Link></h1>
      </div>
    </section>
  );
}

export default Doubts;
