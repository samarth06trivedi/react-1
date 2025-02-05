import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content Wrapper - Adds margin to avoid overlap */}
      <div className="flex flex-col flex-1 ml-16"> 
        <Header />
        <main className="p-6"><Outlet/></main>
      </div>
    </div>
  );
};

export default MainLayout;
