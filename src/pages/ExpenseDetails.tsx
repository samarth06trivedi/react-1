import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchTatianaData } from "../utils/api";
import MainLayout from "../layouts/MainLayout";
import ExpenseItem from "../components/ExpenseItem";

const ExpenseDetails = () => {
  const { expenseId } = useParams(); // Get the expense index from URL
  const [tatianaData, setTatianaData] = useState<any>(null);
  const [expense, setExpense] = useState<any>(null);

  useEffect(() => {
    fetchTatianaData().then((data) => {
      setTatianaData(data);

      // Convert expenseId to a number and check if it's valid
      const index = Number(expenseId);
      if (!isNaN(index) && data.expenses[index]) {
        setExpense(data.expenses[index]);
      }
    });
  }, [expenseId]);

  if (!tatianaData || !expense) return <p className="text-center">Loading...</p>;

  return (
    <MainLayout>
      <div className="p-6">
        <h2 className="text-lg font-semibold mb-4">Transaction Details</h2>
        <div className="relative">
          <div className="flex flex-col gap-2">
            <ExpenseItem
              name={expense.company}
              date={expense.date}
              amount={expense.amount}
              positive={expense.amount.startsWith("+")}
              photo={
                expense.company === "Avanada Inc."
                  ? "/src/assets/logos/avanade.jpg"
                  : expense.company === "Bougue Mc"
                  ? "/src/assets/logos/Bougue.png"
                  : expense.company === "Magesty"
                  ? "/src/assets/logos/magesty.jpg"
                  : expense.company === "Angela Stant"
                  ? "/src/assets/profile-pictures/Angela.jpg"
                  : expense.company === "Star Train&J"
                  ? "/src/assets/logos/Star-train.jpg"
                  : "/src/assets/logos/default.jpg"
              }
            />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ExpenseDetails;
