import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Expenses from "../pages/Expenses";
import ExpenseDetails from "../pages/ExpenseDetails";
import IncreasePlan from "../pages/IncreasePlan"; // Import IncreasePlan page
import MainLayout from "../layouts/MainLayout";
import ExpenseLayout from "../layouts/ExpenseLayout"; // Importing ExpenseLayout

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Main Layout for all pages */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Dashboard />} /> {/* Dashboard at / */}

          {/* ExpenseLayout wraps Expenses & ExpenseDetails */}
          <Route path="expenses" element={<ExpenseLayout />}>
            <Route index element={<Expenses />} /> {/* Expenses at /expenses */}
            <Route path=":expenseId" element={<ExpenseDetails />} /> {/* ExpenseDetails at /expenses/:expenseId */}
          </Route>

          {/* Increase Plan Page */}
          <Route path="increase-plan" element={<IncreasePlan />} /> {/* Increase Plan at /increase-plan */}
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
