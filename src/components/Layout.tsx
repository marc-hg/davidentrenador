import React from 'react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({children}) => {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Header/>
      <main className="w-100">{children}</main>
      <Footer/>
    </div>
  );
};

export default Layout;
