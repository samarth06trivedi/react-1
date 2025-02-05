import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchTatianaData } from "../utils/api";


const ExpenseDetails = () => {
  const { expenseId } = useParams();
  const [tatianaData, setTatianaData] = useState<any>(null);
  const [expense, setExpense] = useState<any>(null);

  useEffect(() => {
    fetchTatianaData().then((data) => {
      setTatianaData(data);

      // Convert expenseId to a number and check if it's valid
      const index = Number(expenseId) - 1;
      if (!isNaN(index) && data.expenses[index]) {
        setExpense(data.expenses[index]);
      }
    });
  }, [expenseId]);

  if (!tatianaData || !expense) return <p className="text-center">Loading...</p>;

  return (
    <>
      <div className="grid grid-cols-12 gap-4 p-6">
        {/* Left Column - Expense Details */}
        <div className="col-span-full bg-white p-6 rounded-xl shadow-md">
          {/* Profile Photo and Company Name */}
          <div className="flex items-center space-x-4 mb-6">
            <img
              src={
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
              alt="Profile"
              className="w-16 h-16 rounded-full object-cover"
            />
            <div>
              <h3 className="text-xl font-semibold">{expense.company}</h3>
            </div>
          </div>

          {/* Transaction Date */}
          <div className="mb-4">
            <p className="font-medium">Transaction Date:</p>
            <p>{expense.date}</p>
          </div>

          {/* Transaction Amount */}
          <div>
            <p className="font-medium">Transaction Amount:</p>
            <p className={`text-xl ${expense.amount.startsWith("+") ? "text-green-500" : "text-red-500"}`}>
              {expense.amount}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExpenseDetails;
