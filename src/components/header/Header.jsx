import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../header/Header.css';

const Header = () => {
  return (
    <Container fluid>
      <Row>
        <Col xs={12} md={4}>
          <h1>React Bootstrap</h1>
        </Col>
        <Col xs={12} md={4}>
          <h1>React Bootstrap</h1>
        </Col>
        <Col xs={12} md={4}>
          <h1>React Bootstrap</h1>
        </Col>
      </Row>
      <Container>
        <Row>
          {/* Additional content goes here */}
        </Row>
      </Container>
    </Container>
  );
};

export default Header;
