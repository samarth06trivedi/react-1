import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import navigation hook
import { fetchTatianaData } from "../utils/api";
import ExpenseItem from "../components/ExpenseItem";

const Expenses = () => {
  const [tatianaData, setTatianaData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate(); // Initialize navigation

  useEffect(() => {
    fetchTatianaData()
      .then((data) => {
        setTatianaData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center">Loading...</p>;
  if (!tatianaData) return <p className="text-center text-red-500">Error loading data</p>;

  return (
    <>
      <div className="grid grid-cols-12 gap-4">
        {/* Main Content */}
        <div className=" col-span-full bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-lg font-semibold">{tatianaData.name}'s Dashboard</h2>

          {/* Expense List (EXACTLY as in Dashboard.tsx) */}
          <h3 className="text-lg font-semibold mt-4">All Expenses</h3>
          <div className="relative">
            <div className="flex flex-col gap-2">
              <div onClick={() => navigate(`/expenses/1`)} className="cursor-pointer">
                <ExpenseItem
                  name={tatianaData.expenses[0].company}
                  date={tatianaData.expenses[0].date}
                  amount={tatianaData.expenses[0].amount}
                  positive={tatianaData.expenses[0].amount.startsWith("+")}
                  photo="/src/assets/logos/avanade.jpg"
                />
              </div>
              <div onClick={() => navigate(`/expenses/2`)} className="cursor-pointer">
                <ExpenseItem
                  name={tatianaData.expenses[1].company}
                  date={tatianaData.expenses[1].date}
                  amount={tatianaData.expenses[1].amount}
                  positive={tatianaData.expenses[1].amount.startsWith("+")}
                  photo="/src/assets/logos/Bougue.png"
                />
              </div>
              <div onClick={() => navigate(`/expenses/3`)} className="cursor-pointer">
                <ExpenseItem
                  name={tatianaData.expenses[2].company}
                  date={tatianaData.expenses[2].date}
                  amount={tatianaData.expenses[2].amount}
                  positive={tatianaData.expenses[2].amount.startsWith("+")}
                  photo="/src/assets/logos/magesty.jpg"
                />
              </div>
              <div onClick={() => navigate(`/expenses/4`)} className="cursor-pointer">
                <ExpenseItem
                  name={tatianaData.expenses[3].company}
                  date={tatianaData.expenses[3].date}
                  amount={tatianaData.expenses[3].amount}
                  positive={tatianaData.expenses[3].amount.startsWith("+")}
                  photo="/src/assets/profile-pictures/Angela.jpg"
                />
              </div>
              <div onClick={() => navigate(`/expenses/5`)} className="cursor-pointer">
                <ExpenseItem
                  name={tatianaData.expenses[4].company}
                  date={tatianaData.expenses[4].date}
                  amount={tatianaData.expenses[4].amount}
                  positive={tatianaData.expenses[4].amount.startsWith("+")}
                  photo="/src/assets/logos/Star-train.jpg"
                />
              </div>
              <div onClick={() => navigate(`/expenses/6`)} className="cursor-pointer">
                <ExpenseItem
                  name={tatianaData.expenses[5].company}
                  date={tatianaData.expenses[5].date}
                  amount={tatianaData.expenses[5].amount}
                  positive={tatianaData.expenses[5].amount.startsWith("+")}
                  photo="/src/assets/logos/Star-train.jpg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Expenses;
