import { Container, Row } from "react-bootstrap";
import { TotalCard } from "../../uxux/counters/TotalCard";
import { WhyDatamex } from "./WhyDatamex";
import { Filters, useGlobalTotalsQuery } from "@/redux/api/totalCounterApi";
import { useState, useEffect } from "react";
import { RootState } from "../../../redux/store";
import { useAppSelector, useAppDispatch } from "@/hooks/redux";
import { setTotalResume } from "../../../redux/slices/totalResumeSlice";

const Statistics = () => {
  const dispatch = useAppDispatch();
  const filters = useAppSelector((state: RootState) => state.totalCounter);
  const { data, isLoading, isError, error, isSuccess, refetch } =
    useGlobalTotalsQuery(filters);

  useEffect(() => {
    if (isSuccess) {
      dispatch(
        setTotalResume({
          webs: +data?.webs,
          emails: +data?.emails,
          phones: +data?.phones,
          companies: +data?.companies,
        })
      );
    }
  }, [
    data?.companies,
    data?.emails,
    data?.phones,
    data?.webs,
    dispatch,
    isSuccess,
  ]);

  return (
    <>
      <div>{isLoading}</div>
      <Container fluid="md" className="py-5">
        <Row className="gap-5">
          {!isError ? (
            <>
              <TotalCard
                n={isLoading ? 100000 : (data?.companies as number)}
                title="companies"
              />
              <TotalCard
                n={isLoading ? 100000 : (data?.emails as number)}
                title="emails"
              />
              <TotalCard
                n={isLoading ? 100000 : (data?.phones as number)}
                title="phones"
              />
              <TotalCard
                n={isLoading ? 100000 : (data?.webs as number)}
                title="web"
              />
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
