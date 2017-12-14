import React from "react";
import { Card, Button, CardHeader, CardBody, CardText, Col } from 'reactstrap';

export const JobBox = (props) => {
  return (
    <Col sm="6" md="6" xl="4">
      <Card className="job-box" body>
        <CardHeader tag="h3" className="text-center">Company Name</CardHeader>
        <CardBody className="job-body">
          <h5 className="job-title">Web Developer</h5>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          <Button>More Info</Button>
        </CardBody>
      </Card>
    </Col>
  );
}