import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import GlobalLoading from '../components/LoadingGlobal/GlobalLoading';
const Layout = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000); // Thời gian chờ trước khi hiển thị loading (500ms ở đây)
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isLoading]);
  return (
    <div>
      {isLoading && <GlobalLoading/>}
      {!isLoading && <Header/>}
      <Outlet/>
      <Footer/>
    </div>
  );
}

export default Layout;

