import { FC } from "react";
import useModal from "@/hooks/useModal";
import {
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
} from "@stripe/react-stripe-js";
import { Container, Row, Col } from "react-bootstrap";
import { PaymentMethodSelector } from "./PaymentMethodSelector";

interface Props{
  setStep: (state: number)=>void;
}

const CheckoutForm: FC<Props> = () => {
  const { handleModal, MyModal } = useModal();
  return (
    <Container className="h-100">
      <Row className="h-100">
        <Col className="p-5">
          <Row>
            <h3 className="text-center">Seleccione un método de pago</h3>
          </Row>
          <PaymentMethodSelector/>
          <div className="input-group mb-3">
            <label htmlFor="text-input" className="form-label">
              Numero de Tarjeta
            </label>
            <CardNumberElement
              id="pay-card-element"
              className="form-control"
              options={{
                showIcon: true,
                placeholder: "4035 3005 3890 4083",
                disabled: false,
              }}
              onChange={(event) => console.log(event)}
            />
          </div>
          <div className="input-group mb-3">
            <label htmlFor="text-input" className="form-label">
              Nombre y apellido
            </label>
            <input
              id="pay-card-element"
              className="form-control"
              placeholder="BRUCE WAYNE'S"
              onChange={(event) => console.log(event)}
            />
          </div>
          <Row>
            <Col>
              <div className="input-group mb-3">
                <label htmlFor="text-input" className="form-label">
                  Vencimiento
                </label>
                <CardExpiryElement
                  id="pay-card-element"
                  className="form-control"
                  options={{
                    placeholder: "12/25",
                  }}
                  onChange={(event) => console.log(event)}
                />
              </div>
            </Col>
            <Col>
              <div className="input-group mb-3">
                <label htmlFor="text-input" className="form-label">
                  CVV
                </label>
                <CardCvcElement
                  id="pay-card-element"
                  className="form-control"
                  options={{
                    placeholder: "* * * *",
                  }}
                  onChange={(event) => console.log(event)}
                />
              </div>
            </Col>
          </Row>
          <div>
            <span>
              Los datos de su tarjeta no serán almacenados y solo se utilizarán
              para procesar la compra actual.
            </span>
          </div>
          {/* <AddressElement options={{mode:'shipping'}}/> */}
          <div className="mt-3 d-flex align-items-center justify-content-center">
            <button className="btn btn-success" onClick={handleModal}>
              Comprar
            </button>
          </div>
          {MyModal}
        </Col>
        <Col className="bg-dark" style={{ borderBottomRightRadius: "20px" }}>
          Mundo
        </Col>
      </Row>
    </Container>
  );
};

export { CheckoutForm };
