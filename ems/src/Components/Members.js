import React, { useState,useEffect } from "react";
import SidebarBillSplit from "./SidebarBillSplit";
import axios from "axios";
import UsersDDL from "./UsersDDL";

function Members() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    GetData();
  }, []);

  const GetData = async () => {
    const result = await axios.get("http://localhost:56758/api/user");
    setUsers(result.data);
  };

     const DeleteMember = (UserId) => {
       axios
         .delete(`http://localhost:56758/api/user/${UserId}`)
         .then((result) => {
           GetData();
         })
        }
  return (
    <div>
      <SidebarBillSplit />
      <UsersDDL />
      <div className="col-sm-9  offset-2">
        <h2
          className="text-center text-dark
            "
        >
          Users Data
        </h2>
        <table className="table table-striped table-bordered text-center">
          <thead>
            <tr
              className="bg-secondary text-white
            "
            >
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Date of Birth</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr key={u.UserId}>
                <td>{u.UserId}</td>
                <td>{u.UserName}</td>
                <td>{u.UserEmail}</td>
                <td>{u.UserDOB}</td>
                <td>
                  <button
                    type="button"
                    className="btn-danger"
                    onClick={() => DeleteMember(u.UserId)}
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

export default Members;
