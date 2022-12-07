import { BrowserRouter, Routes, Route } from "react-router-dom";
import Employee from "./Components/Employee";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Employee />} path="/employee" />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
