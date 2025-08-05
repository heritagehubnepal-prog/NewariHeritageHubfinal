import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Character from "@/pages/character";
import Heritage from "@/pages/heritage";
import Stories from "@/pages/stories";
import Games from "@/pages/games";
import AdminLogin from "@/pages/admin/login";
import AdminDashboard from "@/pages/admin/dashboard";
import AdminGuide from "@/pages/admin-guide";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

function Router() {
  return (
    <Switch>
      {/* Admin routes - no navbar/footer */}
      <Route path="/admin/login" component={AdminLogin} />
      <Route path="/admin/dashboard" component={AdminDashboard} />
      
      {/* Admin guide with navbar/footer */}
      <Route path="/admin-guide">
        <div className="min-h-screen bg-newari-cream">
          <Navbar />
          <AdminGuide />
          <Footer />
        </div>
      </Route>
      
      {/* Main application routes */}
      <Route>
        <div className="min-h-screen bg-newari-cream">
          <Navbar />
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/character/:name" component={Character} />
            <Route path="/heritage" component={Heritage} />
            <Route path="/stories" component={Stories} />
            <Route path="/games" component={Games} />
            <Route component={NotFound} />
          </Switch>
          <Footer />
        </div>
      </Route>
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
