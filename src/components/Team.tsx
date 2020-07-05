import React, { Component } from "react";

import { Container, Row, Col } from "reactstrap";

export class Team extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col md="3" className="shadow-rounded-mini">
            <h1>Pulkit Midha</h1>
          </Col>
          <Col md="3" className="shadow-rounded-mini">
            <h1>Shivay Lamba</h1>
          </Col>
          <Col md="3" className="shadow-rounded-mini">
            <h1>Rahul Garg</h1>
          </Col>
          <Col md="3" className="shadow-rounded-mini">
            <h1>Raghav Dhingra</h1>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Team;
