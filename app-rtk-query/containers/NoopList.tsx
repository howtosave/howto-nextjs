import { Container, Row, Card, Button } from 'react-bootstrap';
//import { GetNoopsApiResponse, useGetNoopsQuery } from '@libs/cms-request';
import { GetNoopsApiResponse, useGetNoopsQuery } from '~lib/hydrogen-api';

export function NoopList() {
  const { data: response, error, isLoading } = useGetNoopsQuery({});
  if (isLoading) return (<></>);
  const { data, meta } = response as GetNoopsApiResponse;

  return (
    <Container>
      <Row className="justify-content-md-between">
        {data?.map((e) => (
          <Card className="sml-card" key={e.id}>
            <Card.Body>
              <Card.Title>{e.attributes?.short_text}</Card.Title>
              <Card.Text>
                {e.attributes?.long_text}
              </Card.Text>
              <Button variant="primary" href="https://nextjs.org/docs">
                More &rarr;
              </Button>
            </Card.Body>
          </Card>
        ))}
      </Row>
    </Container>
  );
}
