import React, { useState } from "react";

function SimpleSplit() {
  const [total, setTotal] = useState("");
  const [people, setPeople] = useState("");

  // const splitting = () => {
  //   let total = parseInt(document.querySelector("#total").value);
  //   let people = parseInt(document.querySelector("#people").value);
  //   let tipPercent = document.querySelector("#tipPercent");

  //   if (tipPercent.value !== "") {
  //     let calcPercent = parseInt(tipPercent.value);
  //     const totalWithTip = total + (calcPercent * total) / 100;
  //     document.querySelector("#perPerson").innerHTML = (
  //       totalWithTip / people
  //     ).toFixed(2);
  //   } else {
  //     const result = total / people;
  //     document.querySelector("#perPerson").innerHTML = result.toFixed(2);
  //   }
  // };

  // const splitBtn = document.querySelector("#splitBtn");
  // splitBtn.addEventListener("click", (e) => {
  //   e.preventDefault();
  //   splitting();
  // });

  // document.querySelector("#resetBtn").addEventListener("click", (e) => {
  //   e.preventDefault();
  //   document.querySelector("form").reset();
  //   document.querySelector("#perPerson").innerHTML = "0";
  // });
  return (
    <div>
      <form>
        <div>
          <input placeholder="Amount" />
          <br />
          <br />
          <input placeholder="No of Participant" />
        </div>
        <br />
        <div>
          <button className="btn btn-info">Split!</button>
          &nbsp;&nbsp;
          <button className="btn btn-danger">Reset</button>
        </div>
      </form>
    </div>
  );
}

export default SimpleSplit;
