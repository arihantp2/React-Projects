import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Select from "react-select";
import { Col, Form } from "react-bootstrap";
import SidebarBillSplit from './SidebarBillSplit'

function BillSplit() {
  const [users, setUsers] = useState([]);
  const [UserId, setUserId] = useState();
  const [EventId, setEventId] = useState();
  const [PaidBy, setPaidBy] = useState();
  const [IsHost, setIsHost] = useState();
  const [SplitAmount, setSplitAmount] = useState();

  useEffect(() => {
    GetData();
  }, []);

  const GetData = async () => {
    const result = await axios.get("http://localhost:56758/api/user");
    setUsers(result.data);
  };

  // const GetEvent = async () => {
  //   const result = await axios.get("http://localhost:56758/api/event");
  //   setUsers(result.data);
  // };
  const [value, setValue] = useState("");
  // const handleOnchange = (val) => setValue(val);
  const handleSelect = (e) => {
    console.log(e);
    setValue(e);
  };

  const AddBillSplit = (e) => {
    e.preventDefault();
    let item = { EventId, PaidBy, IsHost, SplitAmount, UserId };
    axios.post("http://localhost:56758/api/billsplit", item).then((resp) => {
      console.log(resp);
    });
  };

  return (
    <div>
      <SidebarBillSplit />
      <div className="col-sm-12 offset-4">
        <br />
        <h2>Bill Split</h2>
        <div>
          <form onSubmit={AddBillSplit}>
            <label>
              <b>Event Id</b>
            </label>
            <br />
            <input
              type="text"
              placeholder="Event Id"
              onChange={(e) => setEventId(e.target.value)}
            />
            <br />
            <br />
            <label>
              <b>Are you a Host?</b>
            </label>
            <br />
            <input
              type="radio"
              name="ishost"
              value="1"
              onChange={(e) => setIsHost(e.target.value)}
            />
            <label htmlFor="yes">Yes</label>
            &nbsp;&nbsp;
            <input
              type="radio"
              name="ishost"
              value="0"
              onChange={(e) => setIsHost(e.target.value)}
            />
            <label htmlFor="no">No</label>
            <br />
            <br />
            <label>
              <b>Split Amount</b>
            </label>
            <br />
            <input
              type="number"
              placeholder="Split Amount"
              onChange={(e) => setSplitAmount(e.target.value)}
            />
            <br />
            <br />
            <label>
              <b>Paid By</b>
            </label>
            <br />
            <select
              onSelect={handleSelect}
              onChange={(e) => {
                setPaidBy(e.target.value);
              }}
            >
              {users.map((item, i) => (
                <option key={i} value={UserId}>
                   {item.UserName}
                </option>
              ))}
            </select>
            <br />
            <br />
            <label>
              <b>Participants</b>
              <p>
                Hold down the Ctrl (windows) button to select multiple options.
              </p>
            </label>
            <br />
            <select
              onSelect={handleSelect}
              multiple
              onChange={(e) => {
                setUserId(e.target.value);
              }}
            >
              {users.map((item, i) => (
                <option key={i} value={UserId}>
                  {item.UserName}
                </option>
              ))}
            </select>
            <br /> <br />
            <button className="btn btn-info">Save</button>
            &nbsp;&nbsp;
            <button className="btn btn-success">Calculate</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default BillSplit;
