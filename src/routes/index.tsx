import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Expenses from "../pages/Expenses";
import ExpenseDetails from "../pages/ExpenseDetails";
import MainLayout from "../layouts/MainLayout";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/expenses" element={<Expenses/>} />
            <Route path="/expenses/:expenseId" element={<ExpenseDetails />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
