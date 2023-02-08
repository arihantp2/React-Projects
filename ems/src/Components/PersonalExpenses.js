import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

function PersonalExpenses() {
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

  function selectData(ExpenseItemId) {
    let item = expense[ExpenseItemId - 1];
    console.log(ExpenseItemId);
    setExpenseItemName(item.ExpenseItemName);
    setExpenseAmount(item.ExpenseAmount);
    setExpenseDate(item.ExpenseDate);
    setExpenseItemId(item.ExpenseItemId);
  }

        const AddExpense = (e) => {
        let item = { ExpenseItemName, ExpenseAmount, ExpenseDate };
        e.preventDefault();
        axios.post('http://localhost:56758/api/expense/', item)
            .then(resp => {
                console.log(resp)               
            })
    }
  const updateExpense = (e) => {
    e.preventDefault();
    let item = { ExpenseItemName, ExpenseAmount, ExpenseDate };
    axios
      .put(`http://localhost:56758/api/expense/${ExpenseItemId}`, item)
      .then((resp) => {
        alert("Data Updated", resp.expense);
      });
  };
  function deleteData(ExpenseItemId) {
    fetch(`http://localhost:56758/api/expense/${ExpenseItemId}`, {
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
        <h2 className="text-center">Add Expense</h2>
        <form onSubmit={AddExpense}>
          <label>
            <b>Expense Item Name</b>
          </label>
          <br />

          <input
            className="form-control"
            type="text"
            placeholder="Expense Name"
            value={ExpenseItemName}
            onChange={(e) => {
              setExpenseItemName(e.target.value);
            }}
          />
          <br />
          <label>
            <b>Expense Amount</b>
          </label>
          <input
            className="form-control"
            type="number"
            placeholder="Expense Amount"
            value={ExpenseAmount}
            onChange={(e) => {
              setExpenseAmount(e.target.value);
            }}
          />
          <br />
          <label>
            <b>Expense Date</b>
          </label>
          <input
            className="form-control"
            type="datetime"
            value={ExpenseDate}
            onChange={(e) => {
              setExpenseDate(e.target.value);
            }}
          />
          <br />
          <span className="col-sm-9  offset-2">
            <button className="btn btn-primary col-3">Save</button>
            &nbsp;&nbsp;
            <button className="btn btn-success col-3 " onClick={updateExpense}>Update</button>
             &nbsp;&nbsp;
            <button className="btn btn-danger col-3">Cancel</button>
          </span>
        </form>
      </div>
      <br />
      <hr></hr>
      <br />
      <div className="col-sm-9  offset-2">
        <h3 className="text-center ">Personal Expenses</h3>
        <table className="table table-striped table-bordered text-center">
          <thead>
            <tr
              className="bg-secondary text-white
            "
            >
              <th>Expense Id</th>
              <th>ExpenseItemName</th>
              <th>Expense Amount</th>
              <th>Expense Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {expense.map((i) => (
              <tr key={i.ExpenseItemId}>
                <td>{i.ExpenseItemId}</td>
                <td>{i.ExpenseItemName}</td>
                <td>{i.ExpenseAmount}</td>
                <td>{i.ExpenseDate}</td>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={() => selectData(i.ExpenseItemId)}
                  >
                    Edit
                  </button>
                  &nbsp;&nbsp;
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteData(i.ExpenseItemId)}
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

export default PersonalExpenses;
