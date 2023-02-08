import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Navbar,
  Nav,
  NavDropdown,
  Container,
  Form,
  Button,
} from "react-bootstrap";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./About";
import UserRegistration from "./UserRegistration";
import UserLogin from "./UserLogin";
import ExpCategory from "./ExpCategory";
import Contact from "./Contact";
import IncomeCategory from "./IncomeCategory";
import BillSplit from "./BillSplit";
import IncomeDashboard from "./IncomeDashboard";
import AddIncome from "./AddIncome";
import IncomeList from "./IncomeList";
import ExpensesDashboard from "./ExpensesDashboard";
import AddExpenses from "./AddExpenses";
import ExpensesList from "./ExpensesList";
import EventDashboard from "./EventDashboard";
import AddEvent from "./AddEvent";
import EventList from "./EventList";
import EditExpenses from "./EditExpenses";
import Members from "./Members";
import UpdateEvent from "./UpdateEvent";
import EditIncome from "./EditIncome";
import Home from "./Home";
import SidebarBillSplit from "./SidebarBillSplit";

export default class NavbarComp extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar fixed="top" bg="dark" variant="dark" expand="lg">
            <Container fluid>
              <Navbar.Brand className="nav-link" href="/">
                IEMS
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <a className="nav-link" href="/about">
                    About
                  </a>
                  <a className="nav-link" href="/contact">
                    Contact us
                  </a>
                  <a className="nav-link" href="/income">
                    Income
                  </a>
                  {/* <a className="nav-link" href="/personal">
                    Expenses
                  </a> */}
                  <a className="nav-link" href="/expenses">
                    Expenses
                  </a>
                  <a className="nav-link" href="/billsplitsidebar">
                    Split Bill
                  </a>
                  <NavDropdown
                    className="float-lg-end"
                    title="Data"
                    id="basic-nav-dropdown"
                  >
                    <NavDropdown.Item href="/incomecategory">
                      Income Category
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/expcategory">
                      Expense Category
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      Something
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <Form className="d-flex">
                  <a href="/login">
                    <Button variant="outline-primary">Sign In</Button>
                  </a>
                  &nbsp;&nbsp;
                  <a href="/register">
                    <Button variant="outline-success">Sign Up</Button>
                  </a>
                </Form>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />

            <Route path="/contact" element={<Contact />} />

            {/* <Route path="/users" element={<Users />} /> */}
            <Route path="/members" element={<Members />} />
            <Route path="/income/*" element={<IncomeDashboard />} />
            {/* <Route path="/personal"
               element={<Personal />}/> */}
            <Route path="/expenses" element={<ExpensesDashboard />} />
            <Route path="/event" element={<EventDashboard />} />

            <Route path="/register" element={<UserRegistration />} />
            <Route path="/login" element={<UserLogin />} />

            <Route path="/incomecategory" element={<IncomeCategory />} />
            <Route path="/expcategory" element={<ExpCategory />} />

            <Route path="/splitter" element={<BillSplit />} />
            <Route path="/billsplitsidebar" element={<SidebarBillSplit />} />
            <Route path="/addincome" element={<AddIncome />} />
            <Route path="/incomelist" element={<IncomeList />} />
            <Route path="/updateincome/:IncomeId" element={<EditIncome />} />

            <Route path="/addexpense" element={<AddExpenses />} />
            <Route path="/expenselist" element={<ExpensesList />} />
            <Route
              path="/updateexpense/:ExpenseItemId"
              element={<EditExpenses />}
            />
            <Route path="/addevent" element={<AddEvent />} />
            <Route path="/eventlist" element={<EventList />} />
            <Route path="/updateevent/:EventId" element={<UpdateEvent />} />
          </Routes>
        </div>
      </Router>
    );
  }
}
