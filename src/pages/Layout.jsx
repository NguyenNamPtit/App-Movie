import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import GlobalLoading from '../components/LoadingGlobal/GlobalLoading';
import { Toaster } from 'react-hot-toast';
import { ModalProvider } from '../Contexts/useModal';
const Layout = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Thời gian chờ trước khi hiển thị loading (500ms ở đây)
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
    <>
      {isLoading && <GlobalLoading />}
      {!isLoading && <Header />}
      <Outlet />
      <Toaster
        position="bottom-right"
        reverseOrder={false}
      />
      <Footer />
    </>
  );
}

export default Layout;

