import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Col,
  Container,
  Form,
  Input,
  InputGroup,
  Row,
} from "reactstrap";

import EventDashboard from "./EventDashboard";
import { useNavigate } from "react-router-dom";

function AddEvent() {
  let navigate = useNavigate();
  const [event, setEvent] = useState([]);
  const [EventName, setEventName] = useState();
  const [EventDescription, setEventDescription] = useState();
  const [EventId, setEventId] = useState();
  const [EventDate, setEventDate] = useState();

  const getData = () => {
    fetch("http://localhost:56758/api/event")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setEvent(data);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  const AddNewEvent = (e) => {
    let item = { EventName, EventDescription, EventDate };
    e.preventDefault();
    axios.post("http://localhost:56758/api/event/", item).then((resp) => {
      navigate("/eventlist");
      //console.log(resp);
    });
  };

  return (
    <div className="app flex-row align-items-center">
      <EventDashboard />
      <Container>
        <br />
        <Row className="justify-content-center">
          <Col md="12" lg="10" xl="8">
            <Card className="mx-4">
              <CardBody className="p-4">
                <Form onSubmit={AddNewEvent}>
                  <h1 className="text-center">Add New Income</h1>
                  <InputGroup className="mb-3">
                    <Input
                      type="text"
                      name="EventName"
                      id="EventName"
                      placeholder="Event Name"
                      value={EventName}
                      onChange={(e) => {
                        setEventName(e.target.value);
                      }}
                    />
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <Input
                      type="text"
                      name="EventDescription"
                      id="EventDescription"
                      placeholder="Event Description"
                      value={EventDescription}
                      onChange={(e) => {
                        setEventDescription(e.target.value);
                      }}
                    />
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <Input
                      type="date"
                      name="EventDate"
                      id="EventDate"
                      value={EventDate}
                      onChange={(e) => {
                        setEventDate(e.target.value);
                      }}
                    />
                  </InputGroup>
                  <CardFooter className="p-4">
                    <Row>
                      <Col xs="12" sm="6">
                        <Button
                          type="submit"
                          className="btn btn-info mb-1"
                          block
                        >
                          <span>Save</span>
                        </Button>
                      </Col>
                      <Col xs="12" sm="6">
                        <Button className="btn btn-danger mb-1" block>
                          <span>Cancel</span>
                        </Button>
                      </Col>
                    </Row>
                  </CardFooter>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AddEvent;
