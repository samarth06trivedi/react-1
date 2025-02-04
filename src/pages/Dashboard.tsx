import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import ExpenseItem from "../components/ExpenseItem";
import PromoCard from "../components/PromoCard";
import { fetchTatianaData } from "../utils/api"; // Import API function
import { useNavigate } from "react-router-dom"; // Import navigation hook

const Dashboard = () => {
  const navigate = useNavigate(); // Initialize navigate
  const [tatianaData, setTatianaData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

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
        <div className="col-span-9 bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-lg font-semibold">{tatianaData.name}'s Dashboard</h2>
        </div>

        {/* Right Sidebar */}
        <div className="col-span-3 flex flex-col gap-4">
          {/* Top Products in Two Columns */}
          <h3 className="text-lg font-semibold">Top Products</h3>
          <div className="grid grid-cols-2 gap-4">
            <ProductCard
              title={tatianaData.topProducts[0].name}
              category={tatianaData.topProducts[0].category}
              amount={tatianaData.topProducts[0].price}
            />
            <ProductCard
              title={tatianaData.topProducts[1].name}
              category={tatianaData.topProducts[1].category}
              amount={tatianaData.topProducts[1].price}
            />
          </div>

          {/* Expenses Section */}
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold mt-4">Expenses</h3>
            <button
              className="px-3 py-1 text-sm text-white bg-blue-600 rounded-lg hover:bg-blue-700"
              onClick={() => navigate("/expenses")}
            >
              View All
            </button>
          </div>

          {/* Expense List */}
          <div className="relative">
            <div className="flex flex-col gap-2">
              <ExpenseItem
                name={tatianaData.expenses[0].company}
                date={tatianaData.expenses[0].date}
                amount={tatianaData.expenses[0].amount}
                positive={tatianaData.expenses[0].amount.startsWith("+")}
                photo="/src/assets/logos/avanade.jpg"
              />
              <ExpenseItem
                name={tatianaData.expenses[1].company}
                date={tatianaData.expenses[1].date}
                amount={tatianaData.expenses[1].amount}
                positive={tatianaData.expenses[1].amount.startsWith("+")}
                photo="/src/assets/logos/Bougue.png"
              />
              <ExpenseItem
                name={tatianaData.expenses[2].company}
                date={tatianaData.expenses[2].date}
                amount={tatianaData.expenses[2].amount}
                positive={tatianaData.expenses[2].amount.startsWith("+")}
                photo="/src/assets/logos/magesty.jpg"
              />
              <ExpenseItem
                name={tatianaData.expenses[3].company}
                date={tatianaData.expenses[3].date}
                amount={tatianaData.expenses[3].amount}
                positive={tatianaData.expenses[3].amount.startsWith("+")}
                photo="/src/assets/profile-pictures/Angela.jpg"
              />
              <ExpenseItem
                name={tatianaData.expenses[4].company}
                date={tatianaData.expenses[4].date}
                amount={tatianaData.expenses[4].amount}
                positive={tatianaData.expenses[4].amount.startsWith("+")}
                photo="/src/assets/logos/Star-train.jpg"
              />
              <ExpenseItem
                name={tatianaData.expenses[5].company}
                date={tatianaData.expenses[5].date}
                amount={tatianaData.expenses[5].amount}
                positive={tatianaData.expenses[5].amount.startsWith("+")}
                photo="/src/assets/logos/Star-train.jpg"
              />
            </div>

            {/* Fading Effect on Last Expense */}
            <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-gray-100 to-transparent"></div>
          </div>

          {/* Promo Card Below Expenses */}
          <PromoCard />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
