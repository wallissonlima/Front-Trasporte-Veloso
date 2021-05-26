import React from 'react';

import {ContainerPage } from '../../components/Main';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

//import * as ReactBootStrap from 'react-bootstrap';

//import { IconName } from "react-icons/fa";

const Page = () => {
    return (
        <ContainerPage>
           <Container>
  <Row className="justify-content-md-center">
    <Col xs lg="2">
     Ola mundo
    </Col>
    <Col md="auto">Variable width content</Col>
    <Col xs lg="2">
      3 of 3
    </Col>
  </Row>
  
</Container>
        </ContainerPage>
    );
}

export default Page;

