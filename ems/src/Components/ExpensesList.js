import React, { useState, useEffect } from "react";
import ExpensesDashboard from "./ExpensesDashboard";
import { Card, CardBody, CardHeader, Col, Row, Table } from "reactstrap";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

function ExpensesList(props) {
  const [expense, setExpense] = useState([]);

  // let navigate = useNavigate();
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

  function DeleteExpense(ExpenseItemId) {
    fetch(`http://localhost:56758/api/expense/${ExpenseItemId}`, {
      method: "DELETE",
    }).then((result) => {
      fetchData();
      result.json().then((resp) => {
        //console.log(resp);
      });
    });
  }

  const TotalExpense = expense.reduce(
    (TotalExpense, currentExpense) =>
      (TotalExpense = TotalExpense + currentExpense.ExpenseAmount),
    0
  );
  return (
    <div>
      <ExpensesDashboard />
      <h2 className="totalexpense">Total Expense : {TotalExpense}</h2>
      <div className="col-sm-9 offset-2">
        <div className="animated fadeIn">
          <Row>
            <Col>
              <Card>
                <CardHeader>
                  <h3 className="text-center">Expense List</h3>
                </CardHeader>
                <CardBody>
                  <Table
                    hover
                    bordered
                    striped
                    responsive
                    className="text-center"
                    size="sm"
                  >
                    <thead>
                      <tr>
                        <th>Expense Id</th>
                        <th>ExpenseItemName</th>
                        <th>Expense Amount</th>
                        <th>Expense Date</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {expense &&
                        expense.length > 0 &&
                        expense.map((e, idx) => {
                          return (
                            <tr key={idx}>
                              <td>{e.ExpenseItemId}</td>
                              <td>{e.ExpenseItemName}</td>
                              <td>{e.ExpenseAmount}</td>
                              <td>{e.ExpenseDate}</td>
                              <td>
                                <div className="btn-group">
                                  <Link
                                    to={`/updateexpense/${e.ExpenseItemId}`}
                                  >
                                    <button className="btn btn-success">
                                      Edit
                                    </button>
                                  </Link>
                                  &nbsp; &nbsp;
                                  <button
                                    className="btn btn-danger"
                                    onClick={() =>
                                      DeleteExpense(e.ExpenseItemId)
                                    }
                                  >
                                    Delete
                                  </button>
                                </div>
                              </td>
                            </tr>
                          );
                        })}
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default ExpensesList;
