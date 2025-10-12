import React from 'react';
import Header from '../header/Header';
import Sidebar from '../sidebar/Sidebar';
import Footer from '../footer/Footer';
import Routers from '../routers/Routers';
import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import { LogoutModalProvider } from '../common/LogoutModalContext';
import { SidebarProvider, useSidebar } from '../common/SidebarContext';

const MainLayout = () => {
  const location = useLocation();
  const { isCollapsed } = useSidebar();
  const isAuthPage = location.pathname === '/' || 
                    location.pathname === '/verify-otp' || 
                    location.pathname === '/referral';

  return (
    <div className="min-h-screen bg-gray-50">
      {!isAuthPage && <Sidebar />}
      <div className={!isAuthPage ? `transition-all duration-300 ${isCollapsed ? 'lg:ml-[70px]' : 'lg:ml-60'}` : ""}> {/* Adjust margin based on sidebar state */}
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
        <SidebarProvider>
          <MainLayout />
        </SidebarProvider>
      </LogoutModalProvider>
    </Router>
  );
}

export default Layout;