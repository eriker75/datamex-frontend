import { LegacyRef, ReactNode, forwardRef } from "react";
import { Col } from "react-bootstrap";
import styles from "./PriceSelector.module.scss";

interface Props{
  children?: ReactNode;
}

const PriceSelectorRef = (props: Props, ref: LegacyRef<HTMLDivElement> | undefined) => {

  return (
    <Col xs={7} className="p-0 my-5">
      <div
        ref={ref}
        className="bg-dark text-white rounded-3 p-4"
        style={{ height: "50vh", boxShadow: 'box-shadow: 10px 5px 8px #00000029' }}
      >
        <h2 className="text-white text-center h4">Listado de precios</h2>
        <div className="d-flex flex-column text-center justify-content-center w-75 mx-auto gap-2">
          <span>¿Cuantos registros quieres comprar?</span>
          <div className="input-group">
            <input
              type="number"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
              placeholder="100000"
            />
          </div>
          <span className="text-primary">
            La compra mínima es de 0 - 100.000 registros
          </span>
        </div>
      </div>
    </Col>
  );
};

const PriceSelector = forwardRef<HTMLDivElement, Props>(PriceSelectorRef);

export { PriceSelector };
