import React from 'react'
import Lista from '../libs/Lista'

function NavList() {
  return (
    <div className='bg-gray-800 pb-8'>
      <section className='max-w-7xl m-auto'>
        <div className='grid lg:grid-cols-5 lg:pt-14 pt-4 gap-4 lg:gap-12'>
          <div><Lista
            TextPrincipal='Comprar'
            item1='Carros usados'
            item2='Carros novos'
            item3='Motos usadas'
            item4='Motos novas'
            item5='Vistoriado'
          /></div>

          <div><Lista
            TextPrincipal='Serviços'
            item1='Tabela Fipe'
            item2='Financiamento'
            item3='Catálogo 0Km'
            item4='Vistoriado'
            item5='Plataforma revendedores'
            item6='Seguro veículo'
            item7='Autoinsights'
            item8='Publicidade'
            item9='Comparar veículos'
            item10='Multas e Débitos'
          /></div>

          <div><Lista
            TextPrincipal='Noticias DriveEase'
            item1='Portal'
            item2='Últimas notícias'
            item3='Testes'
            item4='Comparativos'
            item5='Vídeos'
            item6='Segredos'
            item7='Dicas'
            item8='Bolso'
          /></div>

          <div className='mb-'><Lista
            TextPrincipal='Ajuda'
            item1='Para você'
            item2='Para a sua loja'
            item3='Segurança'
            item4='Sobre nós'
            item5='Trabalhe com a gente'
            item6='Mapa do site'
          /></div>

          <div><Lista
            TextPrincipal='Institucional'
            item1='Canal de ética'
            item2='Código de conduta DriveEase'
            item3='Código de conduta Fornecedores'
            item4='Código defesa do consumidor'
            item5='Gerenciamento de cookies'
            item6='Termos de Uso e Política de privacidade'
            item7='LGPD'
          /></div>

          <div className='lg:-mt-44'><Lista
            TextPrincipal='Vender'
            item1='Vender carro'
            item2='Vender moto'
            item3='Catálogo 0Km'
            item4='Gerenciar meu anúncio'
            item5='Plataforma revendedores'
          /></div>
        </div>
      </section>
    </div>
  )
}

export default NavList