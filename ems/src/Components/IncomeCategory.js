import React, { Component } from "react";

export default class IncomeCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      incomecategory: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:56758/api/incomecategory")
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          incomecategory: result,
        });
      });
  }

  render() {
    return (
      <div className="col-sm-4 offset-sm-4">
        <br />
        <h2
          className="text-center text-dark
            "
        >
          Income Category Details
        </h2>
        <br />
        <table className="table table-striped table-bordered">
          <thead>
            <tr
              className="bg-secondary text-white
            "
            >
              <th>Id</th>
              <th>Income Category Name</th>
            </tr>
          </thead>
          <tbody>
            {this.state.incomecategory.map((u) => (
              <tr key={u.IncomeCatgoryId}>
                <td>{u.IncomeCatgoryId}</td>
                <td>{u.IncomeCategoryName}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
