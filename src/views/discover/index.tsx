import React, { memo, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '@/views/discover/cpns/nav-bar/nav-bar';

const Discover: React.FC = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Suspense fallback="">
        <Outlet />
      </Suspense>
    </div>
  );
};

export default memo(Discover);
