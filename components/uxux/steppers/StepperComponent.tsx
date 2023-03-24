import { TotalResults } from "../totals/TotalResults";
import { Col, Container, Row } from "react-bootstrap";
import StepperHeader from "./StepperHeader";
import { useState } from "react";
import classNames from "classnames/bind";
import styles from "./StepperStyles.module.scss";
import { UserTypes } from "@/contants/userTypes";
import PersonTypeButton from "../buttons/PersonTypeButton";
import { RegisterFormNatural } from "@/components/partials/auth/RegisterFormNatural";
import { RegisterFormCompany } from "@/components/partials/auth/RegisterFormCompany";

const StepperComponent = () => {
  const [step, setStep] = useState(1);
  const [userType, setUserType] = useState<UserTypes>(UserTypes.NATURAL);

  let cx = classNames.bind(styles);

  return (
    <>
      <StepperHeader step={step} setStep={setStep} />
      <hr
        className="bg-primary"
        style={{ height: "1px", width: "80%", margin: "0 auto" }}
      />
      <div className={cx({ "d-none": step !== 1 })}>
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
          <button className="btn btn-primary float-end mr-3" onClick={()=>setStep(2)}>Siguiente Paso</button>
        </Container>
      </div>
      <div className={cx({ "d-none": step !== 2 })}>
        <div
          className="btn-group py-3 d-flex w-50 text-center  mx-auto justify-content-center align-items-center"
          role="group"
          aria-label="Solid button group"
        >
          <PersonTypeButton
            text="Persona natural"
            type={userType}
            baseType={UserTypes.NATURAL}
            setUserType={setUserType}
          />
          <PersonTypeButton
            text="Empresa"
            type={userType}
            baseType={UserTypes.COMPANY}
            setUserType={setUserType}
          />
        </div>
        <div className={cx({ "d-none": userType !== UserTypes.NATURAL })}>
          <RegisterFormNatural />
        </div>
        <div className={cx({ "d-none": userType !== UserTypes.COMPANY })}>
          <RegisterFormCompany />
        </div>
      </div>
      <div className={cx("flex-grow-1 ", { "d-none": step !== 3 })}>
        <Container className="h-100">
          <Row className="h-100">
            <Col>Hola</Col>
            <Col
              className="bg-dark"
              style={{ borderBottomRightRadius: "20px" }}
            >
              Mundo
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export { StepperComponent };
