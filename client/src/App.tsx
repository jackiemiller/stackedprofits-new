import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import ThankYou from "@/pages/ThankYou";
import MobileView from "@/components/MobileView";
import ChatWidget from "@/components/ChatWidget";
import MobileOnlyHero from "@/components/MobileOnlyHero";
import { useEffect, useState } from "react";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/thank-you" component={ThankYou} />
      <Route path="/mobile-preview" component={MobileView} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    // Simple mobile detection
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Check on initial load
    checkMobile();
    
    // Add resize listener
    window.addEventListener('resize', checkMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  return (
    <QueryClientProvider client={queryClient}>
      {isMobile && <MobileOnlyHero />}
      <Router />
      <Toaster />
      <ChatWidget />
    </QueryClientProvider>
  );
}

export default App;

