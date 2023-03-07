import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Statistics = () => {
  return (
    <>
        <Container fluid="md">
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
      <div className='bg-primary my-5' style={{"height": "500px"}}></div>
      <h1 className='text-center'> Preguntas Frecuentes</h1>
    </>
  )
}

export { Statistics };