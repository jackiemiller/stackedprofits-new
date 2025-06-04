import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import ThankYou from "@/pages/ThankYou";
import MobileView from "@/components/MobileView";
import ChatWidget from "@/components/ChatWidget";

// Inline CFO Services component to avoid import issues
function CFOServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto py-16 px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Fractional CFO Services</h1>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Starter</h3>
            <p className="text-3xl font-bold text-blue-600 mb-4">$2,500/month</p>
            <p>Basic financial oversight for small businesses</p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Growth</h3>
            <p className="text-3xl font-bold text-blue-600 mb-4">$4,500/month</p>
            <p>Comprehensive financial management for growing businesses</p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Enterprise</h3>
            <p className="text-3xl font-bold text-blue-600 mb-4">$7,500/month</p>
            <p>Full CFO services for established businesses</p>
          </div>
        </div>
        
        <div className="text-center">
          <p className="text-lg">Contact: 904-424-3664 | john@stackedprofits.com</p>
        </div>
      </div>
    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/cfo-services" component={CFOServicesPage} />
      <Route path="/thank-you" component={ThankYou} />
      <Route path="/mobile-preview" component={MobileView} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toaster />
      <ChatWidget />
    </QueryClientProvider>
  );
}

export default App;
