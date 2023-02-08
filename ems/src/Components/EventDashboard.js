import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SidebarBillSplit from "./SidebarBillSplit";

function EventDashboard() {
  return (
    <div>
      <SidebarBillSplit/>
      <div className="col-sm-9  offset-2">
        <br></br>
        <nav className="btn btn-warning navbar navbar-expand-lg navheader">
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to={"/addevent"} className="nav-link">
                  Add New Event
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/eventlist"} className="nav-link">
                  Event List
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <br />
      </div>
    </div>
  );
}

export default EventDashboard;
