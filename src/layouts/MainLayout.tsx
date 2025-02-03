import Sidebar from "./Sidebar";
import Header from "./Header";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content Wrapper - Adds margin to avoid overlap */}
      <div className="flex flex-col flex-1 ml-16"> 
        <Header />
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
};

export default MainLayout;
