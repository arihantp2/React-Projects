import React, {useState,useEffect} from 'react';
import axios  from 'axios';
import { Button, Card, CardBody, CardFooter, Col, Container, Form, Input, InputGroup, Row } from 'reactstrap';
import ExpensesDashboard from './ExpensesDashboard'
import { useNavigate } from 'react-router-dom';

function AddExpenses(props) {
    let navigate = useNavigate();
  const [expense, setExpense] = useState([]);
  const [ExpenseItemName, setExpenseItemName] = useState("");
  const [ExpenseAmount, setExpenseAmount] = useState("");
  const [ExpenseDate, setExpenseDate] = useState("");
  const [ExpenseItemId, setExpenseItemId] = useState(null);

  const fetchData = () => {
  fetch("http://localhost:56758/api/expense")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setExpense(data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const AddNewExpense = (e) => {
        let item = { ExpenseItemName, ExpenseAmount, ExpenseDate };
        e.preventDefault();
        axios.post('http://localhost:56758/api/expense/', item)
            .then(resp => {
                navigate("/expenselist")
                //console.log(resp)               
            })
         }

  return (
    <div className="app flex-row align-items-center">
      <ExpensesDashboard/>
      <Container>
          <br/>
            <Row className="justify-content-center">
                <Col md="12" lg="10" xl="8">
                    <Card className="mx-4">
                        <CardBody className="p-4">
                            <Form onSubmit={AddNewExpense}>
                                <h1 className='text-center'>Add New Expense</h1>
                                <InputGroup className="mb-3">
                                    <Input type="text" name="ExpenseItemName" id="ExpenseItemName" placeholder="Expense Item Name" value={ExpenseItemName} onChange={(e) => { setExpenseItemName(e.target.value) }} />
                                </InputGroup>
                                <InputGroup className="mb-3">
                                    <Input type="text" placeholder="Expense Amount" name="ExpenseAmount" id="ExpenseAmount" value={ExpenseAmount} onChange={(e) => { setExpenseAmount(e.target.value) }} />
                                </InputGroup>
                                <InputGroup className="mb-3">
                                    <Input type="date" placeholder="Expense Date"  name="ExpenseDate" id="ExpenseDate" value={ExpenseDate} onChange={(e) => { setExpenseDate(e.target.value) }} />
                                </InputGroup>
                                <CardFooter className="p-4">
                                    <Row>
                                        <Col xs="12" sm="6">
                                            <Button type="submit"  className="btn btn-info mb-1" block><span>Save</span></Button>
                                        </Col>
                                        <Col xs="12" sm="6">
                                            <Button className="btn btn-danger mb-1" block><span>Cancel</span></Button>
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
  )
}

export default AddExpenses