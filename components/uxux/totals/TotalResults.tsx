import { Container, Row, Col } from 'react-bootstrap'
import { useAppSelector } from '@/hooks/redux';
import { 
  selectCompanies,
  selectEmails,
  selectPhones,
  selectWebs 
} from '@/redux/slices/totalResumeSlice';
import { RootState } from '@/redux/store';
import { useGlobalTotalsQuery } from '@/redux/api/totalCounterApi';


const TotalResults = () => {
  const filters = useAppSelector((state: RootState) => state.totalCounter);
  const { data, isLoading, isError, error, isSuccess, refetch } = useGlobalTotalsQuery(filters);
  return (
    <Container>
      <Row>
        <Col
          style={{
            "textAlign": "center",
            "letterSpacing": "0px",
            "color": "#4A4B65",
            "opacity": "1",
            "fontSize": "40px",
          }}
        >Companies: {(data?.companies as number)}</Col>
        <Col
          style={{
            "textAlign": "center",
            "letterSpacing": "0px",
            "color": "#4A4B65",
            "opacity": "1",
            "fontSize": "40px",
          }}
        >Emails: {(data?.emails as number)}</Col>
        <Col
          style={{
            "textAlign": "center",
            "letterSpacing": "0px",
            "color": "#4A4B65",
            "opacity": "1",
            "fontSize": "40px",
        }}
        >Phones: {(data?.phones as number)}</Col>
        <Col
          style={{
            "textAlign": "center",
            "letterSpacing": "0px",
            "color": "#4A4B65",
            "opacity": "1",
            "fontSize": "40px",
          }}
        >Webs: {(data?.webs as number)}</Col>
    </Row>
  </Container>
  )
}

export { TotalResults };