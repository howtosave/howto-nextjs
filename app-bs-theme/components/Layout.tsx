import * as React from 'react';
import { Container } from 'react-bootstrap';
import { Footer } from './Footer';

type LayoutProps = {
  children: JSX.Element,
}

export const Layout: React.FC<LayoutProps> = ({
  children,
  ...props
}) => (
  <Container {...props}>
    {children}
    <Footer/>
  </Container>
);
