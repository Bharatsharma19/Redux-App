import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DisplayAllEmployee from "./Components/DisplayAllEmployee";
import Employee from "./Components/Employee";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<Employee />} path="/" />
          <Route element={<DisplayAllEmployee />} path="/employee" />
        </Routes>
      </Router>
    </>
  );
}

export default App;
