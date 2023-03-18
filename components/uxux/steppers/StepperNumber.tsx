import React, { FC } from 'react'

export interface Props{
    number: number;
}

const StepperNumber: FC<Props> = ({ number }) => {
  return (
    <div 
        className='
            rounded-circle
            bg-primary p-1
            text-center d-flex 
            justify-center
            align-items-center
            justify-content-center
            text-white
        '
        style={{"width":"50px", "height":"50px"}}
    >
        {number}
    </div>
  )
}

export default StepperNumber