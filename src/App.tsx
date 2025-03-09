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
import VocationalBooks from "./pages/VocationalBooks";
import DElEdBooks from "./pages/DElEdBooks";
import BEdBooks from "./pages/BEdBooks";
import CompetitiveBooks from "./pages/CompetitiveBooks";
import Biography from "./pages/Biography";
import StoryBooks from "./pages/StoryBooks";
import Dictionary from "./pages/Dictionary";
import FestivalOffered from "./pages/FestivalOffered";
import RequestBook from "./pages/RequestBook";
import AboutUs from "./pages/AboutUs";
import NotFound from "./pages/NotFound";
import Contact from "./pages/Contact";

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
              <Route path="/vocational-books" element={<VocationalBooks />} />
              <Route path="/d-el-ed-books" element={<DElEdBooks />} />
              <Route path="/b-ed-books" element={<BEdBooks />} />
              <Route path="/competitive-books" element={<CompetitiveBooks />} />
              <Route path="/biography" element={<Biography />} />
              <Route path="/story-books" element={<StoryBooks />} />
              <Route path="/dictionary" element={<Dictionary />} />
              <Route path="/festival" element={<FestivalOffered />} />
              <Route path="/request" element={<RequestBook />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </React.StrictMode>
  );
};

export default App;