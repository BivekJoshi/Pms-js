import React from 'react';

const Dashboard = React.lazy(() => import('../pages/dashboard/Dashboard'));

const routes = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    id: 1,
  },
];

export default routes;
