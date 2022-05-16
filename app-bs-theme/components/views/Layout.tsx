import * as React from 'react';
import { Container } from 'react-bootstrap';
import { Footer } from '../Footer';

type LayoutProps = {
  children: JSX.Element,
}

const LayoutView: React.FC<LayoutProps> = ({
  children,
  ...props
}) => (
  <Container {...props}>
    {children}
    <Footer/>
  </Container>
);

export default LayoutView;
