
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import AnimatedButton from "@/components/ui/shared/AnimatedButton";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="container-padding mx-auto">
        <div className="glass-card max-w-xl mx-auto p-10 rounded-2xl">
          <div className="text-center">
            <h1 className="text-9xl font-display font-bold text-primary mb-6">404</h1>
            <h2 className="heading-lg mb-6">Page Not Found</h2>
            <p className="text-muted-foreground mb-8">
              The page you are looking for doesn't exist or has been moved.
            </p>
            <AnimatedButton text="Return to Home" href="/" size="lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
