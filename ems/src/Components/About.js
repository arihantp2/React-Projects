import React, { useEffect, useState } from "react";
import './About.css'

function About() {
  const [data, setData] = useState([]);

  function getData() {
    fetch("http://localhost:56758/api/menubar/1").then((result) => {
      result.json().then((resp) => {
        console.log(resp)
        setData(resp);
      });
    });
  }
  useEffect(() => {
    getData();
  }, []);

  return (
    <body className="aboutbody">
      <div className="aboutdiv">
        <div className="card col-6 offset-3">
          <div className="card-header">
            <h2 className="h21">{data.MenubarName}</h2>
          </div>
          <div className="card-body rounded bg-warning">
            <h5 className="card-title text-center h41">
              {data.MenubarDisplayData}
            </h5>
          </div>
        </div>
      </div>
    </body>
  );
}

export default About;
