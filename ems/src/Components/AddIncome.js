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
import IncomeDashboard from "./IncomeDashboard";
import { useNavigate } from "react-router-dom";

function AddIncome() {
  let navigate = useNavigate();
  const [income, setIncome] = useState([]);
  const [IncomeId, setIncomeId] = useState();
  const [SourceOfIncome, setSourceOfIncome] = useState();
  const [Amount, setAmount] = useState();
  const [DateOfCredit, setDateOfCredit] = useState();

  const getData = () => {
    fetch("http://localhost:56758/api/income")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setIncome(data);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  const AddNewIncome = (e) => {
    let item = { SourceOfIncome, Amount, DateOfCredit };
    e.preventDefault();
    axios.post("http://localhost:56758/api/income/", item).then((resp) => {
      navigate("/incomelist");
      //console.log(resp)
    });
  };

  return (
    <div className="app flex-row align-items-center">
      <IncomeDashboard />
      <Container>
        <br />
        <Row className="justify-content-center">
          <Col md="12" lg="10" xl="8">
            <Card className="mx-4">
              <CardBody className="p-4">
                <Form onSubmit={AddNewIncome}>
                  <h1 className="text-center">Add New Income</h1>
                  <InputGroup className="mb-3">
                    <Input
                      type="text"
                      name="SourceOfIncome"
                      id="SourceOfIncome"
                      placeholder="Source of Income"
                      value={SourceOfIncome}
                      onChange={(e) => {
                        setSourceOfIncome(e.target.value);
                      }}
                    />
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <Input
                      type="text"
                      placeholder="Amount"
                      name="Amount"
                      id="Amount"
                      value={Amount}
                      onChange={(e) => {
                        setAmount(e.target.value);
                      }}
                    />
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <Input
                      type="date"
                      name="DateOfCredit"
                      id="DateOfCredit"
                      value={DateOfCredit}
                      onChange={(e) => {
                        setDateOfCredit(e.target.value);
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

export default AddIncome;
