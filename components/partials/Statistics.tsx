import { Container, Row } from "react-bootstrap";
import { TotalCard } from "../uxux/counters/TotalCard";
import { WhyDatamex } from "./WhyDatamex";
import { Filters, useGlobalTotalsQuery } from "@/redux/api/totalCounterApi";
import { useState } from "react";
import { RootState } from '../../redux/store';
import { useAppSelector } from "@/hooks/redux";

const Statistics = () => {
  const filters = useAppSelector((state: RootState) => state.totalCounter);
  const { data, isLoading, isError, error, refetch } = useGlobalTotalsQuery(filters);

  return (
    <>
      <div>{isLoading}</div>
      <Container fluid="md" className="py-5">
        <Row className="gap-5">
          {!isError ? (
            <>
              <TotalCard n={isLoading ? 1000 : (data?.companies as number)} />
              <TotalCard n={isLoading ? 1000 : (data?.emails as number)} />
              <TotalCard n={isLoading ? 1000 : (data?.phones as number)} />
              <TotalCard n={isLoading ? 1000 : (data?.webs as number)} />
            </>
          ) : (
            JSON.stringify(error)
          )}
        </Row>
      </Container>
      <WhyDatamex />
      <h1 className="text-center"> Preguntas Frecuentes</h1>
    </>
  );
};

export { Statistics };
