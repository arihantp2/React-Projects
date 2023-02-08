import React, { useState, useEffect } from "react";
import EventDashboard from "./EventDashboard";
import { Link } from "react-router-dom";

function EventList() {
  const [event, setEvent] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch("http://localhost:56758/api/event")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setEvent(data);
      });
  };

  function deleteData(EventId) {
    fetch(`http://localhost:56758/api/event/${EventId}`, {
      method: "DELETE",
    }).then((result) => {
      fetchData();
      result.json().then(() => {});
    });
  }
  return (
    <div>
      <EventDashboard />
      <div className="col-sm-9  offset-2">
        <h2 className="text-center ">Event List</h2>

        <table className="table table-striped table-bordered">
          <thead>
            <tr
              className="bg-secondary text-white
            "
            >
              <th>Event Id</th>
              <th>Event Name</th>
              <th>Event Description</th>
              <th>Event Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {event.map((e) => (
              <tr key={e.EventId}>
                <td>{e.EventId}</td>
                <td>{e.EventName}</td>
                <td>{e.EventDescription}</td>
                <td>{e.EventDate}</td>

                <td>
                  <Link to={`/updateevent/${e.EventId}`}>
                    <button className="btn btn-success">Edit</button>
                  </Link>
                  &nbsp;&nbsp;
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteData(e.EventId)}
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

export default EventList;
