
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import InvestmentDetails from "./pages/InvestmentDetails";
import AssetsLiabilities from "./pages/AssetsLiabilities";
import AdvisorRecommendationsPage from "./pages/AdvisorRecommendationsPage";
import TasksPage from "./pages/TasksPage";
import MeetingsPage from "./pages/MeetingsPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/investments" element={<InvestmentDetails />} />
          <Route path="/assets-liabilities" element={<AssetsLiabilities />} />
          <Route path="/recommendations" element={<AdvisorRecommendationsPage />} />
          <Route path="/tasks" element={<TasksPage />} />
          <Route path="/meetings" element={<MeetingsPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
