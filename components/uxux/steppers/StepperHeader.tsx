import { FC, SetStateAction, useState } from 'react'
import StepperNumber from './StepperNumber'
import StepperSeparator from './StepperSeparator'

interface Props{
    step: number;
    setStep: (value: SetStateAction<number>) => void
}

const StepperHeader: FC<Props> = ({step, setStep}) => {

    return (
    <div className='d-flex justify-content-between align-items-center gap-3 p-4'>
        <div 
            className='d-flex gap-2 align-items-center cursor'
            onClick={()=>setStep(1)}    
        >
            <StepperNumber number={1} />
            <div>Resultado de seleccion</div>
        </div>

        <StepperSeparator />

        <div 
            className='d-flex gap-2 align-items-center cursor'
            onClick={()=>setStep(2)}    
        >
            <StepperNumber number={2} />
            <div>Registro de usuario</div>
        </div>

        <StepperSeparator />

        <div 
            className='d-flex gap-2 align-items-center cursor'
            onClick={()=>setStep(3)}    
        >
            <StepperNumber number={3} />
            <div>Realizar pago</div>
        </div>
    </div>
    )
}

export default StepperHeader