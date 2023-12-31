import { FC } from 'react'
import { WB_TYPES, MEXICO_CITIES } from "@/contants";
import { 
  DropdownFilter,
  FilterButton,
  Footer,
  Navigation,
  SignInModal,
  BackgroundImage
} from '@/components';
import { TOTAL_FILTERS } from '@/types';

interface Children{
  children: any;
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
        <BackgroundImage image={'/placeholders/hero.png'} className='d-flex align-items-center justify-content-center'>
          <h1 className='text-white text-center position-relative' style={{"zIndex": "9"}}>La base de datos de las empresas de mexico</h1>
        </BackgroundImage>
        <div 
          className='position-absolute top-100 start-50 translate-middle w-50 rounded rounded-5 d-flex align-items-center justify-content-center gap-3'
          style={{"minHeight": "100px","backgroundColor": "#F7F7FC", "zIndex": "9", "minWidth" : "800px"}}
        >
          <DropdownFilter options={Object.values(WB_TYPES)} entity={TOTAL_FILTERS.TRADES}/>
          <DropdownFilter options={MEXICO_CITIES} entity={TOTAL_FILTERS.CITIES}/>
          <DropdownFilter options={["0 a 5 empleados","6 a 10 empleados"]} entity={TOTAL_FILTERS.SIZES}/>
          <FilterButton/>
        </div>
      </div>
      {children}
      <Footer/>
    </>
  )
}

export { BaseLayout } ;