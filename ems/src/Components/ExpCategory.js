import React, { Component } from "react";

export default class ExpCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expcategory: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:56758/api/categorymapping")
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          expcategory: result,
        });
      });
  }

  render() {
    return (
      <div className="col-sm-6 offset-sm-3">
        <br />
        <h2
          className="text-center text-dark
            "
        >
          Expense Category Details
        </h2>
        <br />
        <table className="table table-striped table-bordered">
          <thead>
            <tr
              className="bg-secondary text-white
            "
            >
                <th>Id</th>
              <th>Expense Category Name</th>
              <th>Expense SubCategory Name</th>
            </tr>
          </thead>
          <tbody>
            {this.state.expcategory.map((e) => (
              <tr>
                <td>{e.ExpenseCategoryId}</td>
                <td>{e.ExpenseCategoryName}</td>
                <td>{e.ExpenseSubCategoryName}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
