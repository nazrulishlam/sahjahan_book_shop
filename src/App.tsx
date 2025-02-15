
import React from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Books from "./pages/Books";
import SecondaryBooks from "./pages/SecondaryBooks";
import PrimaryBooks from "./pages/PrimaryBooks";
import KgNurseryBooks from "./pages/KgNurseryBooks";
import HigherSecondaryBooks from "./pages/HigherSecondaryBooks";
import CollegeBooks from "./pages/CollegeBooks";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/books" element={<Books />} />
              <Route path="/secondary-books" element={<SecondaryBooks />} />
              <Route path="/kg-nursery-books" element={<KgNurseryBooks />} />
              <Route path="/primary-books" element={<PrimaryBooks />} />
              <Route path="/higher-secondary-books" element={<HigherSecondaryBooks />} />
              <Route path="/college-books" element={<CollegeBooks />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </React.StrictMode>
  );
};

export default App;
