import React, { FC, useState } from "react";
import { Col } from "react-bootstrap";

interface Props{
  status: boolean;
  text: string;
  value: 'oxxo' | 'card';
}

const PaymentMethodCheckbox: FC<Props> = ({value, text, status}) => {
  const borderColor = status ? '#47D985' : '#DFDFEB'; 
  return (
    <Col>
      <label
        htmlFor={value}
        className="p-3 my-3 text-center d-flex align-items-center justify-content-center cursor"
        style={{
          border: `1px solid ${borderColor}`,
          borderRadius: "12px",
          minHeight: "100px",
        }}
      >
        {text}
      </label>
      <input type="radio" name="rGroup" value={value} id={value} />
    </Col>
  );
};

export default PaymentMethodCheckbox;
