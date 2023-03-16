import React, { FC } from 'react'
import { DropdownFilter, FilterButton, Footer, Navigation, SignInModal } from '@/components';
import { BackgroundImage } from '@/components';
import hero from '@/assets/placeholders/hero.png';

interface Children{
  children: JSX.Element | JSX.Element[] | string | string[];
}

const BaseLayout : FC<Children> = ({children}) => {
  return (
    <>
      <SignInModal/>
      <Navigation/>
      <div 
        style={{"backgroundColor": "red", "minHeight": '60vh',}}
        className='position-relative mb-5'
      >
        <BackgroundImage image={hero.src} className='d-flex align-items-center justify-content-center'>
          <h1 className='text-white text-center position-relative' style={{"zIndex": "9"}}>La base de datos de las empresas de mexico</h1>
        </BackgroundImage>
        <div 
          className='position-absolute top-100 start-50 translate-middle w-50 rounded rounded-5 d-flex align-items-center justify-content-center gap-3'
          style={{"minHeight": "100px","backgroundColor": "#F7F7FC", "zIndex": "9", "minWidth" : "800px"}}
        >
          <DropdownFilter/>
          <DropdownFilter/>
          <FilterButton/>
        </div>
      </div>
      {children}
      <Footer/>
    </>
  )
}

export { BaseLayout } ;