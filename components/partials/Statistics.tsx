import React from 'react'
import  Image  from 'next/image';
import { Container, Row, Col } from 'react-bootstrap'

const Statistics = () => {
  return (
    <>
        <Container fluid="md" className='py-5'>
            <Row className='gap-5'>
                <Col className='d-flex justify-content-center'>
                    <h1 
                        style={{height: '150px'}}
                        className='rounded-3 text-white bold bg-primary flex align-items justify-content w-100 text-center'>
                        100
                    </h1>
                </Col>
                <Col className='d-flex justify-content-center'>
                    <h1 
                        style={{height: '150px'}}
                        className='rounded-3 text-white bold bg-primary flex align-items justify-content w-100 text-center'>
                        50
                    </h1>
                </Col>
                <Col className='d-flex justify-content-center'>
                    <h1 
                        style={{height: '150px'}}
                        className='rounded-3 text-white bold bg-primary flex align-items justify-content w-100 text-center'>
                        375
                    </h1>
                </Col>
                <Col className='d-flex justify-content-center'>
                    <h1 
                        style={{height: '150px'}}
                        className='rounded-3 text-white bold bg-primary flex align-items justify-content w-100 text-center'>
                        22
                    </h1>
                </Col>
            </Row>
      </Container>
      <div className='my-5 p-5 bg-primary' style={{"height": "500px"}}>
        <Container fluid="md">
            <Row>
                <Col>
                    <h2 className='text-white'>¿ Porque usar Datamex ?</h2>
                    <p className='text-white h6'>
                        Información de valor agregado, Muy fácil de usar, Descarga de información en diferentes formatos, Base de datos personalizable por medio de filtros, los precios más bajos.
                    </p>
                    <Container className='gap-5 text-white'>
                        <Row>
                            <Col className='border'>
                                1
                            </Col>
                            <Col className='border'>
                                2
                            </Col>
                        </Row>
                        <Row>
                            <Col className='border'>
                                3
                            </Col>
                            <Col className='border'>
                                4
                            </Col>
                        </Row>
                    </Container>
                </Col>
                <Col>
                    <Image src="/assets/placeholders/hero.png" alt="hero" height={500} width={500}/>
                </Col>
            </Row>
        </Container>
      </div>
      <h1 className='text-center'> Preguntas Frecuentes</h1>
    </>
  )
}

export { Statistics };