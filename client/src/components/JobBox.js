import React from "react";
import { Card, Button, CardHeader, CardBody, CardText, Col } from 'reactstrap';

export const JobBox = (props) => {
  return (
    <Col sm="6" md="6" xl="4">
      <Card className="job-box" body>
        <CardHeader tag="h3" className="text-center">{props.company}</CardHeader>
        <CardBody className="job-body">
          <h5 className="job-title">{props.title}</h5>
          <CardText>{props.description}</CardText>
          <a href={props.url}>{props.url}</a>
          <Button>More Info</Button>
        </CardBody>
      </Card>
    </Col>
  );
}