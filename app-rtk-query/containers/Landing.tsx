import { Container, Row, Card, Button } from 'react-bootstrap';
//import { GetHomepageApiResponse, useGetHomepageQuery } from '@libs/cms-request';
import { GetHomepageApiResponse, useGetHomepageQuery } from '~lib/hydrogen-api';
import { Loading } from '~components/Loading';

export function Landing() {
  const { data: response, error, isLoading, isSuccess, isFetching, refetch } = useGetHomepageQuery({});
  if (isFetching) return (<Loading/>);

  const { data, meta } = response as GetHomepageApiResponse || {};
  const attributes = data?.attributes;
  return (
    <Container>
      <Row className="justify-content-md-between">
        <Card className="sml-card">
          <Card.Body>
            <Card.Title>{!isLoading && attributes?.title}</Card.Title>
            <Card.Text>
              {!isLoading && attributes?.slug}
            </Card.Text>
            <Button variant="primary" disabled={isFetching} onClick={refetch}>
              Refetch
            </Button>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
}
