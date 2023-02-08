import React from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';


function IncomeDashboard() {
  return (
     
        <div className="col-sm-9  offset-2">
            <br></br>
          <nav className="btn btn-warning navbar navbar-expand-lg navheader">
            <div className="collapse navbar-collapse" >
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link to={'/addincome'} className="nav-link">Add New Income</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/incomelist'} className="nav-link">Income List</Link>
                </li>
              </ul>
            </div>
          </nav> 
          <br />
        
        </div>
     
  )
}

export default IncomeDashboard