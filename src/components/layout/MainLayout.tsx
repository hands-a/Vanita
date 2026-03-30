import React, { ReactNode } from 'react';
import TopBar from './TopBar';

// We will import these later when we build them
import Header from './Header';
import Navbar from './Navbar';
import Footer from './Footer';

// Define the expected props for MainLayout
interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    // Main wrapper with background color applied directly
    <div className="font-['Ubuntu'] bg-[#f9fafb] min-h-screen flex flex-col">
      
      {/* Global Navigation Components */}
      <TopBar />
      <Header />
      <Navbar />

      {/* Dynamic Page Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
};

export default MainLayout;