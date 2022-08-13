import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import AppLayout from '../components/layout';

const GlobalLayout = () => {
  return (
    <AppLayout>
      <Suspense fallback={<div>로딩 중..</div>}>
        <Outlet />
      </Suspense>
    </AppLayout>
  )
}

export default GlobalLayout;