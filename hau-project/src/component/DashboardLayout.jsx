import React from 'react';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import OverviewCards from './OverviewCards';
import DataTable from './DataTable';
import Pagination from './Pagination';

const DashboardLayout = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex-1 p-6 overflow-auto bg-white">
        <Topbar />
        <OverviewCards />
        <DataTable />
        <Pagination />
      </main>
    </div>
  );
};

export default DashboardLayout;
