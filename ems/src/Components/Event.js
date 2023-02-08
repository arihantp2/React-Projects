import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import SidebarBillSplit from "./SidebarBillSplit";

function Event() {
  //const [DateOfCredit,setDateOfCredit]=useState();

  return (
    <div>
      <div>
        <SidebarBillSplit />
      </div>
      <div className="col-sm-4 offset-sm-4">
        <h2 className="text-center">Add A Event</h2>
        <form>
          <label>
            <b>Event Name</b>
          </label>
          <input
            className="form-control"
            type="text"
            placeholder="Event Name"
          />
          <br />
          <label>
            <b>Event Date</b>
          </label>
          <input
            className="form-control"
            type="date"
            placeholder="Event date"
          />
          <br />
          <label>
            <b>Event Description</b>
          </label>
          <input
            className="form-control"
            type="text"
            placeholder="Event Description"
          />
          <br />
          <label>
            <b>Add Participants</b>
          </label>
          <br />
          <select>
            <option>Arihant</option>
            <option>Akshay</option>
            <option>Amit</option>
            <option>Sadhana</option>
            <option>Akash</option>
            <option>vaishnavi</option>
            <option>Shubham</option>
          </select>
          <br />
          <br />
          <button className="btn btn-primary">Save</button>
          &nbsp;&nbsp;
          <button className="btn btn-danger">Cancel</button>
        </form>
      </div>
    </div>
  );
}

export default Event;
