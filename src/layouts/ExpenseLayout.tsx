import { Outlet } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import PromoCard from "../components/PromoCard";
import { fetchTatianaData } from "../utils/api";
import { useEffect, useState } from "react";

const ExpenseLayout = () => {
  const [tatianaData, setTatianaData] = useState<any>(null);

  useEffect(() => {
    fetchTatianaData().then((data) => setTatianaData(data));
  }, []);

  if (!tatianaData) return <p className="text-center">Loading...</p>;

  return (
    <div className="flex gap-4">
      {/* Main Content (Uses MainLayout's Canvas) */}
      <div className="flex-1">
        <Outlet />
      </div>

      {/* Right Sidebar: Fixed Content */}
      <div className="w-1/4 flex flex-col gap-4">
        {/* Top Products */}
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

        {/* Promo Card */}
        <PromoCard />
      </div>
    </div>
  );
};

export default ExpenseLayout;
