import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Expenses from "../pages/Expenses";
import ExpenseDetails from "../pages/ExpenseDetails";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/expenses" element={<Expenses />} />
        <Route path="/expenses/:expenseId" element={<ExpenseDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
