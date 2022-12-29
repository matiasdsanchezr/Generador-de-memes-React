import React from 'react';
import { Outlet } from 'react-router-dom';

import './PublicLayout.css';

import Header from '../Header';
import Footer from '../Footer';

const Main = (): JSX.Element => {
  return (
    <>
      <Header />
      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Main;
