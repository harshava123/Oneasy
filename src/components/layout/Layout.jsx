import React from 'react';
import Header from '../header/Header';
import Sidebar from '../sidebar/Sidebar';
import Footer from '../footer/Footer';
import Routers from '../routers/Routers';
import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import { LogoutModalProvider } from '../common/LogoutModalContext';

const MainLayout = () => {
  const location = useLocation();
  const isAuthPage = location.pathname === '/' || 
                    location.pathname === '/verify-otp' || 
                    location.pathname === '/referral';

  return (
    <div className="min-h-screen bg-gray-50">
      {!isAuthPage && <Sidebar />}
      <div className={!isAuthPage ? "ml-64" : ""}> {/* ml-64 matches sidebar width */}
        {!isAuthPage && <Header />}
        <main className="min-h-[calc(100vh-4rem)]"> {/* Adjust based on header height */}
          <Routers />
        </main>
        {!isAuthPage && <Footer />}
      </div>
    </div>
  );
};

function Layout() {
  return (
    <Router>
      <LogoutModalProvider>
        <MainLayout />
      </LogoutModalProvider>
    </Router>
  );
}

export default Layout;