import * as React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { withTranslation, WithTranslation } from 'react-i18next';


interface FooterViewProps extends WithTranslation {
}

const View = ({
  t
}: FooterViewProps) => (
  <footer className="footer py-4">
    <Container>
      <Row className="align-items-center">
        <Col lg="4" className="text-lg-start">Copyright © Hydrogen 2022</Col>
        <Col lg="4" className="my-3 my-lg-0">
          <Button variant="dark" className="btn-social mx-2" href="#!" aria-label="Twitter"><FaTwitter/></Button>
          <Button variant="dark" className="btn-social mx-2" href="#!" aria-label="Facebook"><FaFacebookF/></Button>
          <Button variant="dark" className="btn-social mx-2" href="#!" aria-label="LinkedIn"><FaLinkedinIn/></Button>
        </Col>
        <Col lg="4" className="text-lg-end">
          <Button variant="link" className="text-decoration-none me-3" href="#!">{t('footer.privacy-policy')}</Button>
          <Button variant="link" className="text-decoration-none" href="#!">{t('footer.terms-of-use')}</Button>
        </Col>
      </Row>
    </Container> 
  </footer>
);

export default withTranslation()(View);
