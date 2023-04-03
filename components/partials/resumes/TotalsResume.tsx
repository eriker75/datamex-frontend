import { FC } from "react";
import { TotalResults } from "@/components/uxux";
import { Container, Row, Col } from "react-bootstrap";

export interface Props{
  setStep: (state: number)=>void;
}

const TotalsResume: FC<Props> = ({setStep}) => {
  return (
    <>
      <TotalResults />
      <Container>
        <Row>
          <Col></Col>
          <Col>
            <div>¿Qué recibirás al realizar la compra?</div>
            <ul>
              <li>Glosario Datamex</li>
              <li>Base de datos en excel</li>
              <li>Instrucciones para convertir de .csv a Excel</li>
            </ul>
          </Col>
        </Row>
        <button
          className="btn btn-primary float-end mr-3"
          onClick={() => setStep(2)}
        >
          Siguiente Paso
        </button>
      </Container>
    </>
  );
};

export default TotalsResume;
