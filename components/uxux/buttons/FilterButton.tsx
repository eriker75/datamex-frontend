import Link from 'next/link';
import styles from './FilterButton.module.scss'

const FilterButton = () => {
  return (
    <Link 
      href="/order" 
      className='bg-primary border rounded p-2 text-white'
    >Seleccionar</Link>
  )
}

export { FilterButton };