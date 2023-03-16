import styles from './FilterButton.module.scss'

const FilterButton = () => {
  return (
    <button 
        /* className={styles.button} */ 
        className='bg-primary border rounded p-2 text-white'
    >Seleccionar</button>
  )
}

export { FilterButton };