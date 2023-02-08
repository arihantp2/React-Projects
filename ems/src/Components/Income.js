import React, { useState, useEffect } from "react";
import axios from "axios";

function Income() {
  const [income, setIncome] = useState([]);
  const [IncomeId, setIncomeId] = useState();
  const [SourceOfIncome, setSourceOfIncome] = useState();
  const [Amount, setAmount] = useState();
  const [DateOfCredit, setDateOfCredit] = useState();
  const [totalincome, setTotalIncome] = useState(0);

  const fetchData = () => {
    fetch("http://localhost:56758/api/income")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setIncome(data);
      });
  };

  function selectData(IncomeId) {
    let item = income[IncomeId - 1];
    console.log(IncomeId);
    setSourceOfIncome(item.SourceOfIncome);
    setAmount(item.Amount);
    setDateOfCredit(item.DateOfCredit);
    setIncomeId(item.IncomeId);
  }

  function getData() {
    fetch("http://localhost:56758/api/totalincome/").then((result) => {
      result.json().then((resp) => {
        console.log(resp);
        setTotalIncome(resp[0].TotalIncome);
      });
    });
  }
  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  const AddIncome = (e) => {
    let item = { SourceOfIncome, Amount };
    e.preventDefault();
    axios.post("http://localhost:56758/api/income/", item).then((resp) => {
      console.log(resp);
    });
  };

  const updateIncome = (e) => {
    e.preventDefault();
    let item = { SourceOfIncome, Amount };
    axios
      .put(`http://localhost:56758/api/income//${IncomeId}`, item)
      .then((resp) => {
        alert("Data Updated", resp.data);
      });
  };

  function deleteData(IncomeId) {
    fetch(`http://localhost:56758/api/income/${IncomeId}`, {
      method: "DELETE",
    }).then((result) => {
      result.json().then((resp) => {
        console.log(resp);
      });
    });
  }

  return (
    <div>
      <div className="col-sm-4  offset-4">
        <h2 className="text-center">Add Income</h2>
        <form onSubmit={AddIncome}>
          <label>
            <b>Source of Income</b>
          </label>
          <br />
          <input
            className="form-control"
            type="text"
            placeholder="Source of Income"
            value={SourceOfIncome}
            onChange={(e) => {
              setSourceOfIncome(e.target.value);
            }}
          />
          <br />
          <label>
            <b>Amount</b>
          </label>
          <input
            className="form-control"
            type="number"
            placeholder="Amount"
            value={Amount}
            onChange={(e) => {
              setAmount(e.target.value);
            }}
          />
          <br />
          {/* <label>
            <b>Date of Credit</b>
          </label>
          <input
            className="form-control"
            type="date"
            value={DateOfCredit}
            onChange={(e) => {
              setDateOfCredit(e.target.value);
            }}
          /> */}
          <br />
          <span className="col-sm-9  offset-2">
            <button className="btn btn-primary col-3">Save</button>
            &nbsp;&nbsp;
            <button className="btn btn-success col-3" onClick={updateIncome}>
              Update
            </button>
            &nbsp;&nbsp;
            <button className="btn btn-danger col-3">Cancel</button>
          </span>
        </form>
      </div>
      <br />
      <hr></hr>
      <div>
        <h2>Total Income : {totalincome}</h2>
      </div>
      <br />
      <div className="col-sm-9  offset-2">
        <h2 className="text-center ">Income Details</h2>
        <table className="table table-striped table-bordered">
          <thead>
            <tr
              className="bg-secondary text-white
            "
            >
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
                  <button
                    className="btn btn-primary"
                    onClick={() => selectData(i.IncomeId)}
                  >
                    Edit
                  </button>
                  &nbsp;&nbsp;
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteData(i.IncomeId)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Income;
