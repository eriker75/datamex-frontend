import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import styles from './PaymentMethodSelector.module.scss'
import { PaymentMethodCheckbox } from "./PaymentMethodCheckbox";

enum PaymentMethod {
  CARD = "card",
  OXXO = "oxxo",
}

const PaymentMethodSelector = () => {
  
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>(
    PaymentMethod.CARD
  );

  const handlePaymentMethod = (method: PaymentMethod) => {
    setPaymentMethod(method);
  };

  return (
    <Row>
      <Col onClick={() => handlePaymentMethod(PaymentMethod.CARD)}>
        <PaymentMethodCheckbox
          status={paymentMethod === PaymentMethod.CARD}
          text={"card payment"}
          value={"card"}
        />
      </Col>
      <Col onClick={() => handlePaymentMethod(PaymentMethod.OXXO)}>
        <PaymentMethodCheckbox
           status={paymentMethod === PaymentMethod.OXXO}
          text={"oxxo payment"}
          value={"oxxo"}
        />
      </Col>
    </Row>
  );
};

export { PaymentMethodSelector };
