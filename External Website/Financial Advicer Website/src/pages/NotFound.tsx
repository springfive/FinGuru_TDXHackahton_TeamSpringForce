
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-wealth-gray-50 px-4">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-bold text-wealth-blue-700 mb-4">404</h1>
        <p className="text-xl text-wealth-gray-600 mb-6">
          Oops! We couldn't find the page you're looking for.
        </p>
        <Button asChild className="bg-wealth-blue-600 hover:bg-wealth-blue-700">
          <Link to="/">Return to Dashboard</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
