import Head from 'next/head';
import { Container } from 'react-bootstrap';
import { Layout } from '~components/Layout';
import { NoopList } from '~containers/NoopList';
import { Landing } from '~containers/Landing';
import { Login } from '~containers/Login';

export default function PageIndex() {
  return (
    <Layout>
      <Container className="md-container">
        <Head>
          <title>ReactJS with react-bootstrap</title>
          <link rel="icon" href="/favicon-32x32.png" />
        </Head>        
        <Container>
          <h1>
            Welcome to <a href="https://nextjs.org">Next.js!</a>
          </h1>

          <Login/>

          <Landing/>

          <p> Noop Items </p>
          <NoopList/>
        </Container>
      </Container>
    </Layout>
  );
}
