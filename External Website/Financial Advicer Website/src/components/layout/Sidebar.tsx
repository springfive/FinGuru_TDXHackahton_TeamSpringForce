
import React from "react";
import { Link } from "react-router-dom";
import { Home, TrendingUp, Wallet, MessageSquare, ListTodo, Calendar } from "lucide-react";

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

interface NavItem {
  name: string;
  path: string;
  icon: React.FC<{ className?: string }>;
}

const navItems: NavItem[] = [
  { name: "Home", path: "/", icon: Home },
  { name: "Investment Details", path: "/investments", icon: TrendingUp },
  { name: "Assets & Liabilities", path: "/assets-liabilities", icon: Wallet },
  { name: "Advisor Recommendations", path: "/recommendations", icon: MessageSquare },
  { name: "Tasks", path: "/tasks", icon: ListTodo },
  { name: "Meetings", path: "/meetings", icon: Calendar },
];

const Sidebar: React.FC<SidebarProps> = ({ isOpen, setIsOpen }) => {
  return (
    <aside
      className={`${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } fixed inset-y-0 left-0 z-50 w-64 bg-sidebar border-r border-sidebar-border transform transition-transform duration-300 ease-in-out md:translate-x-0 md:relative`}
    >
      <div className="flex h-16 items-center justify-between px-4 border-b border-sidebar-border">
        <Link to="/" className="flex items-center">
          <div className="h-8 w-8 rounded bg-wealth-blue-400 flex items-center justify-center mr-2">
            <span className="text-white font-bold">F</span>
          </div>
          <h1 className="text-xl font-bold text-sidebar-foreground">Finguru</h1>
        </Link>
        <button
          onClick={() => setIsOpen(false)}
          className="rounded-md p-2 text-sidebar-foreground hover:bg-sidebar-accent md:hidden"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
        </button>
      </div>

      <nav className="mt-6 px-4 space-y-1">
        {navItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className="flex items-center px-4 py-3 text-sidebar-foreground hover:bg-sidebar-accent rounded-md transition-colors group"
          >
            <item.icon className="h-5 w-5 mr-3 text-sidebar-foreground opacity-75 group-hover:opacity-100" />
            <span>{item.name}</span>
          </Link>
        ))}
      </nav>

      <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-sidebar-border">
        <div className="flex items-center space-x-3">
          <div className="h-10 w-10 rounded-full bg-wealth-blue-500 text-white flex items-center justify-center font-medium">
            GS
          </div>
          <div>
            <p className="text-sidebar-foreground font-medium">Gokul S</p>
            <p className="text-sidebar-foreground opacity-75 text-sm">Client</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
