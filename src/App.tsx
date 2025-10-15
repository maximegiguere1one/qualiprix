import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Skeleton } from "@/components/ui/skeleton";
import Index from "./pages/Index";

// Lazy load pages for better performance
const NotFound = lazy(() => import("./pages/NotFound"));
const PrixDelais = lazy(() => import("./pages/PrixDelais"));
const ZonesDesservies = lazy(() => import("./pages/ZonesDesservies"));
const Blog = lazy(() => import("./pages/Blog"));
const ArmoiresMontreal = lazy(() => import("./pages/ArmoiresMontreal"));
const ArmoiresLaval = lazy(() => import("./pages/ArmoiresLaval"));
const ArmoiresRiveNord = lazy(() => import("./pages/ArmoiresRiveNord"));
const ArmoiresRiveSud = lazy(() => import("./pages/ArmoiresRiveSud"));
const ArmoiresQuebec = lazy(() => import("./pages/ArmoiresQuebec"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><Skeleton className="w-full h-full" /></div>}>
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
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
