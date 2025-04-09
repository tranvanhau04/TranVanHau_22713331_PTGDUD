import React from "react";
import Sidebar from '../component/Sidebar';
import Topbar from '../component/Topbar';
import OverviewCards from '../component/OverviewCards';
import DataTable from '../component/DataTable';
import Pagination from '../component/Pagination';
const Projects = () => {
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

export default Projects;