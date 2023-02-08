import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
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
import axios from "axios";
function UpdateEvent() {
  const [data, setData] = useState([]);
  const [EventName, setEventName] = useState();
  const [EventDescription, setEventDescription] = useState();
  const [EventDate, setEventDate] = useState();

  const { EventId } = useParams();
  let navigate = useNavigate();
  useEffect(() => {
    fetch(`http://localhost:56758/api/event/${EventId}`).then((res) => {
      res.json().then((resp) => {
        setData(resp);
      });
    });
  }, []);

  const UpdateEvent = (e) => {
    e.preventDefault();
    let item = { EventName, EventDescription, EventDate };
    axios
      .put(`http://localhost:56758/api/event/${EventId}`, item)
      .then((resp) => {
        alert("Data Updated", resp.data);
        navigate("/eventlist")
      });
  };

  return (
    <div>
      <div className="app flex-row align-items-center">
        <br />
        <Container>
          <Row className="justify-content-center">
            <Col md="12" lg="10" xl="8">
              <Card className="mx-4">
                <CardBody className="p-4">
                  <Form>
                    <h1>Update Event</h1>
                    <InputGroup className="mb-3">
                      <Input
                        type="text"
                        defaultValue={data.EventName}
                        onChange={(e) => setEventName(e.target.value)}
                      />
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <Input
                        type="text"
                        defaultValue={data.EventDescription}
                        onChange={(e) => setEventDescription(e.target.value)}
                      />
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <Input
                        type="date"
                        defaultValue={data.EventDate}
                        onChange={(e) => setEventDate(e.target.value)}
                      />
                    </InputGroup>
                    <CardFooter className="p-4">
                      <Row className="justify-content-center">
                        <Col xs="9" sm="6">
                          <Button
                            type="submit"
                            className="btn btn-success"
                            block
                            onClick={UpdateEvent}
                          >
                            <span>Save</span>
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
    </div>
  );
}

export default UpdateEvent;
