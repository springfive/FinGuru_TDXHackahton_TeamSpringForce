
import React from "react";
import Sidebar from "./Sidebar";
import { useIsMobile } from "@/hooks/use-mobile";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const isMobile = useIsMobile();
  const [sidebarOpen, setSidebarOpen] = React.useState(!isMobile);

  return (
    <div className="flex min-h-screen bg-wealth-gray-50">
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
      
      <div className="flex-1 flex flex-col">
        <header className="bg-white border-b border-wealth-gray-200 py-4 px-6 flex items-center justify-between">
          {!sidebarOpen && (
            <button 
              onClick={() => setSidebarOpen(true)}
              className="p-2 rounded-md text-wealth-gray-500 hover:bg-wealth-gray-100"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
            </button>
          )}
          <div className="ml-auto flex items-center space-x-4">
            <span className="text-wealth-gray-700">Gokul S</span>
            <div className="h-10 w-10 rounded-full bg-wealth-blue-600 text-white flex items-center justify-center font-medium">
              GS
            </div>
          </div>
        </header>
        
        <main className="flex-1 p-6 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
