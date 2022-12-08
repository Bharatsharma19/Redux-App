import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Employee from "./Components/Employee";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<Employee />} path="/employee" />
        </Routes>
      </Router>
    </>
  );
}

export default App;
