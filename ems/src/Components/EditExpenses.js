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

function EditExpenses() {
  const [expense, setExpense] = useState([]);
  const [ExpenseItemName, setExpenseItemName] = useState();
  const [ExpenseAmount, setExpenseAmount] = useState();
  const [ExpenseDate, setExpenseDate] = useState();

  const { ExpenseItemId } = useParams();
  let navigate = useNavigate();
  useEffect(() => {
    fetch(`http://localhost:56758/api/expense/${ExpenseItemId}`).then((res) => {
      res.json().then((resp) => {
        setExpense(resp);
      });
    });
  }, []);

  const UpdateExpense = (e) => {
    e.preventDefault();
    let item = { ExpenseItemName, ExpenseAmount, ExpenseDate };
    axios
      .put(`http://localhost:56758/api/expense/${ExpenseItemId}`, item)
      .then((resp) => {
        alert("Data Updated", resp.data);
        navigate("/expenselist");
      });
  };

  const onCancel = () => {
    navigate("/incomelist");
  };

  return (
    <div className="app flex-row align-items-center">
      <br />
      <Container>
        <Row className="justify-content-center">
          <Col md="12" lg="10" xl="8">
            <Card className="mx-4">
              <CardBody className="p-4">
                <Form>
                  <h1 className="text-center">Update Expense</h1>
                  <InputGroup className="mb-3">
                    <Input
                      type="text"
                      defaultValue={expense.ExpenseItemName}
                      onChange={(e) => {
                        setExpenseItemName(e.target.value);
                      }}
                    />
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <Input
                      type="text"
                      defaultValue={expense.ExpenseAmount}
                      onChange={(e) => {
                        setExpenseAmount(e.target.value);
                      }}
                    />
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <Input
                      type="date"
                      defaultValue={expense.ExpenseDate}
                      onChange={(e) => {
                        setExpenseDate(e.target.value);
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
                          onClick={UpdateExpense}
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

export default EditExpenses;
