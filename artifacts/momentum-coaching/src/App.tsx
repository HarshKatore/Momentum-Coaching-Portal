import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

// Layout Components
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingContact from "@/components/layout/FloatingContact";

// Effects Components
// import TawkToChat from "@/components/effects/TawkToChat";

// Pages
import Home from "@/pages/Home";
import Courses from "@/pages/Courses";
import Faculty from "@/pages/Faculty";
import Results from "@/pages/Results";
import Branches from "@/pages/Branches";
import Gallery from "@/pages/Gallery";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/not-found";

const queryClient = new QueryClient();

// ScrollToTop component to handle route changes
function ScrollToTop() {
  const [pathname] = WouterRouter.useLocation?.() ?? ["/"];

  if (typeof window !== "undefined") {
    window.scrollTo(0, 0);
  }

  return null;
}

function Router() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-[80px]">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/courses" component={Courses} />
          <Route path="/faculty" component={Faculty} />
          <Route path="/results" component={Results} />
          <Route path="/branches" component={Branches} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
      <FloatingContact />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
        {/* <TawkToChat propertyId="YOUR_PROPERTY_ID" widgetId="YOUR_WIDGET_ID" /> */}
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
