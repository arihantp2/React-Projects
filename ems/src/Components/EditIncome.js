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

function EditIncome() {
  const [income, setIncome] = useState([]);
  //const [totalincome, setTotalIncome] = useState(0);
  const [SourceOfIncome, setSourceOfIncome] = useState();
  const [Amount, setAmount] = useState();
  const [DateOfCredit, setDateOfCredit] = useState();

  const { IncomeId } = useParams();

  let navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:56758/api/income/${IncomeId}`).then((res) => {
      res.json().then((resp) => {
        setIncome(resp);
      });
    });
  }, []);

  const UpdateIncome = (e) => {
    e.preventDefault();
    let item = { SourceOfIncome, Amount, DateOfCredit };
    axios
      .put(`http://localhost:56758/api/income/${IncomeId}`, item)
      .then((resp) => {
        alert("Data Updated", resp.data);
        navigate("/incomelist");
      });
  };

  const onCancel = () => {
    navigate("/incomelist");
  };

  return (
    <div className="app flex-row align-items-center">
      <Container>
        <br />
        <Row className="justify-content-center">
          <Col md="12" lg="10" xl="8">
            <Card className="mx-4">
              <CardBody className="p-4">
                <Form>
                  <h1 className="text-center">Update Income</h1>
                  <InputGroup className="mb-3">
                    <Input
                      type="text"
                      name="SourceOfIncome"
                      id="SourceOfIncome"
                      placeholder="Source of Income"
                      defaultValue={income.SourceOfIncome}
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
                      defaultValue={income.Amount}
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
                      defaultValue={income.DateOfCredit}
                      onChange={(e) => {
                        setDateOfCredit(e.target.value);
                      }}
                      placeholder="Date Of Credit"
                    />
                  </InputGroup>
                  <CardFooter className="p-4">
                    <Row>
                      <Col xs="12" sm="6">
                        <Button
                          type="submit"
                          className="btn btn-info mb-1"
                          block
                          onSubmit={UpdateIncome}
                        >
                          <span>Save</span>
                        </Button>
                      </Col>
                      <Col xs="12" sm="6">
                        <Button
                          className="btn btn-danger mb-1"
                          block
                          onClick={onCancel}
                        >
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

export default EditIncome;
