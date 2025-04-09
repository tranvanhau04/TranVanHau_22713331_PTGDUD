import React from "react";
import Sidebar from '../component/Sidebar';
import Topbar from '../component/Topbar';
import OverviewCards from '../component/OverviewCards';
import DataTable from '../component/DataTable';
import Pagination from '../component/Pagination';
const Teams = () => {
    return (
       
        <>
        <OverviewCards />
         <DataTable />
         <Pagination />
        </>
         
      
   );
};

export default Teams;