import React from 'react'
import  Image  from 'next/image';
import { Container, Row, Col } from 'react-bootstrap'
import { TotalCard } from '../uxux/counters/TotalCard';
import { WhyDatamex } from './WhyDatamex';

const Statistics = () => {
  return (
    <>
        <Container fluid="md" className='py-5'>
            <Row className='gap-5'>
                <TotalCard n={100}/>
                <TotalCard n={50}/>
                <TotalCard n={375}/>
                <TotalCard n={22}/>
            </Row>
        </Container>
        <WhyDatamex/>
        <h1 className='text-center'> Preguntas Frecuentes</h1>
    </>
  )
}

export { Statistics };