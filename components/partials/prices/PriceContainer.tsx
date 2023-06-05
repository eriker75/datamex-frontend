import { Container, Row } from "react-bootstrap";
import { PriceSelector } from "./PriceSelector";
import { PriceList } from "./PriceList";
import { useRef, useEffect, useState } from 'react';

export const PriceContainer = () => {
  const refHeight = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number| undefined>(0);
  useEffect(()=>{
    setHeight(refHeight.current?.clientHeight);
  }, [refHeight.current?.clientHeight])
  return (
    <Container className="w-75 my-5">
      <Row className="my-5">
        <PriceSelector ref={refHeight} />
        <PriceList height={height}/>
      </Row>
    </Container>
  );
};
