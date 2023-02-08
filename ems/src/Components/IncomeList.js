import React, { useState, useEffect } from "react";
import IncomeDashboard from "./IncomeDashboard";
import { Link } from "react-router-dom";
import { Card, CardBody, CardHeader, Col, Row, Table } from "reactstrap";

function IncomeList() {
  const [income, setIncome] = useState([]);
  // const [totalincome, setTotalIncome] = useState(0);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch("http://localhost:56758/api/income")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setIncome(data);
      });
  };

  function deleteData(IncomeId) {
    fetch(`http://localhost:56758/api/income/${IncomeId}`, {
      method: "DELETE",
    }).then((result) => {
      fetchData();
      result.json().then((resp) => {
        //console.log(resp);
      });
    });
  }
  const totalincome = income.reduce(
    (totalincome, currentIncome) =>
      (totalincome = totalincome + currentIncome.Amount),
    0
  );
  return (
    <div>
      <IncomeDashboard />
      <h2 className="totalincome">Total Income : {totalincome}</h2>
      <br />
      <div className="col-sm-9  offset-2">
        {/* <div><h2>Total Income : {income[0].TotalIncome} </h2></div> */}
        <div className="animated fadeIn">
          <Row>
            <Col>
              <Card>
                <CardHeader>
                  <h3 className="text-center">Income List</h3>
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
                        <th>Income Id</th>
                        <th>Source of Income</th>
                        <th>Amount</th>
                        <th>Date of Credit</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {income.map((i) => (
                        <tr key={i.IncomeId}>
                          <td>{i.IncomeId}</td>
                          <td>{i.SourceOfIncome}</td>
                          <td>{i.Amount}</td>
                          <td>{i.DateOfCredit}</td>
                          <td>
                            <div className="btn-group">
                              <Link to={`/updateincome/${i.IncomeId}`}>
                                <button className="btn btn-success">
                                  Edit
                                </button>
                              </Link>
                              &nbsp; &nbsp;
                              <button
                                className="btn btn-danger"
                                onClick={() => deleteData(i.IncomeId)}
                              >
                                Delete
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
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

export default IncomeList;
