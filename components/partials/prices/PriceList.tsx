import { Col } from "react-bootstrap";
import styles from "./PriceList.module.scss";

interface Props {
  height: number | undefined;
}

export const PriceList = ({ height }: Props) => {
  console.log(height);
  return (
    <Col xs={5} className="p-0 my-5 d-flex flex-column justify-content-center">
      <div
        className="p-5"
        style={{
          height: `${(height as number) - 50}px`,
          borderTopRightRadius: '20px',
          boxShadow: "10px 5px 8px #00000029",
          borderBottomRightRadius: '20px'
        }}
      >
        2
      </div>
    </Col>
  );
};
