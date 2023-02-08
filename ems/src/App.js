import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComp from "./Components/NavbarComp";

function App() {
  return (
    <div className="App">
      <h2 className="text-center text-secondary">Expense Management System</h2>
      <NavbarComp />
      <br />
    </div>
  );
}

export default App;
