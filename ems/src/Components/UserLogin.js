import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      //navigate.push("/home");
    }
  }, []);

  async function LogIn() {
    let item = { email, password };
    console.warn(item);

    let result = await fetch("http://localhost:3000/login", {
      method: "POST",
      body: JSON.stringify(item),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    result = await result.json();
    localStorage.setItem("user-info", JSON.stringify(result));
  }

    function validateForm() {
      return email.length > 0 && password.length > 0;
    }
  return (
    <div className="login">
      <div className="col-sm-3 offset-sm-4">
        <br/>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-control"
          placeholder="Enter Email"
        />
        <br />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="form-control"
          placeholder="Enter Password"
        />
        <br />
        <button
          onClick={(e) => LogIn()}
          className="btn btn-primary col-12"
          disabled={!validateForm()}
        >
          Sign In
        </button>

        <p>
          Don't have an account? <a href="/register">Sign Up</a>
        </p>
      </div>
    </div>
  );
}

export default Login;

// import React, { useState } from "react";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
// import "./Login.css";

// export default function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   function validateForm() {
//     return email.length > 0 && password.length > 0;
//   }

//   function handleSubmit(event) {
//     event.preventDefault();
//   }

//   return (
//     <div className="Login">
//       <Form onSubmit={handleSubmit}>
//         <Form.Group size="lg" controlId="email">
//           <Form.Label>Email</Form.Label>
//           <Form.Control
//             autoFocus
//             type="email"
//             value={email}
//             placeholder="Enter email"
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </Form.Group>
//         <Form.Group size="lg" controlId="password">
//           <Form.Label>Password</Form.Label>
//           <Form.Control
//             type="password"
//             value={password}
//             placeholder="Enter Password"
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </Form.Group>
//         <br />
//         <div className="mb-3">
//           <div className="custom-control custom-checkbox">
//             <input
//               type="checkbox"
//               className="custom-control-input"
//               id="customCheck1"
//             />
//             &nbsp;
//             <label className="custom-control-label" htmlFor="customCheck1">
//               Remember me
//             </label>
//           </div>
//         </div>
//         <div>
//           <Button block size="md" type="submit" disabled={!validateForm()}>
//             Sign In
//           </Button>
//           <p>
//             Don't have an account? <a href="/register">Sign Up</a>
//           </p>
//         </div>
//       </Form>
//     </div>
//   );
// }
