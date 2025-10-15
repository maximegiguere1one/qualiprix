import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PrixDelais from "./pages/PrixDelais";
import ZonesDesservies from "./pages/ZonesDesservies";
import Blog from "./pages/Blog";
import ArmoiresMontreal from "./pages/ArmoiresMontreal";
import ArmoiresLaval from "./pages/ArmoiresLaval";
import ArmoiresRiveNord from "./pages/ArmoiresRiveNord";
import ArmoiresRiveSud from "./pages/ArmoiresRiveSud";
import ArmoiresQuebec from "./pages/ArmoiresQuebec";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/prix-delais" element={<PrixDelais />} />
          <Route path="/zones-desservies" element={<ZonesDesservies />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/armoires-montreal" element={<ArmoiresMontreal />} />
          <Route path="/armoires-laval" element={<ArmoiresLaval />} />
          <Route path="/armoires-rive-nord" element={<ArmoiresRiveNord />} />
          <Route path="/armoires-rive-sud" element={<ArmoiresRiveSud />} />
          <Route path="/armoires-quebec" element={<ArmoiresQuebec />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
