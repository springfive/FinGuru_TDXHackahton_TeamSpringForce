
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ClientsPage from "./pages/ClientsPage";
import InvestmentsPage from "./pages/InvestmentsPage";
import MeetingsPage from "./pages/MeetingsPage";
import TasksPage from "./pages/TasksPage";
import FinancialsPage from "./pages/FinancialsPage";
import SettingsPage from "./pages/SettingsPage";
import LogoutPage from "./pages/LogoutPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/clients" element={<ClientsPage />} />
          <Route path="/investments" element={<InvestmentsPage />} />
          <Route path="/meetings" element={<MeetingsPage />} />
          <Route path="/tasks" element={<TasksPage />} />
          <Route path="/financials" element={<FinancialsPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/logout" element={<LogoutPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
