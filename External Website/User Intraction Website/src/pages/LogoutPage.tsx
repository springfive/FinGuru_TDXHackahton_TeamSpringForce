
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

const LogoutPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // In a real application, here you would handle logout logic
    // like clearing tokens, user session, etc.
    
    // Show logout notification
    toast.success('You have been logged out successfully');
    
    // Redirect to home page after a brief delay
    const timer = setTimeout(() => {
      navigate('/');
    }, 1500);
    
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Logging out...</h1>
        <p>You will be redirected to the dashboard shortly.</p>
      </div>
    </div>
  );
};

export default LogoutPage;
