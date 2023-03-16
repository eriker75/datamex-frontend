import React, { ReactNode } from 'react'
import styles from './BackgroundImage.module.scss';

export interface BackgroundImageProps{
  children?: ReactNode | ReactNode[],
  image?: string,
  className?: string
}

const BackgroundImage = ({children, image, className} : BackgroundImageProps) => {
  return (
    <div style={{
        background: `
          url(${image}) 
          center / cover
          no-repeat
          scroll
          padding-box
          content-box
          #ffffff
          `,
        width: '100%',
        minHeight: '60vh',
        maxWidth: '100vw',
      }}
      className={className}
      >
        <div className={styles.layer}>
        </div>
        {children}
      </div>
  )
}

export { BackgroundImage }