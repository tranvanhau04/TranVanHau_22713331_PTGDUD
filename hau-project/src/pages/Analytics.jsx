import React from "react";
import OverviewCards from '../component/OverviewCards';
import DataTable from '../component/DataTable';
import Pagination from '../component/Pagination';
const Analytics = () => {
    return (
       
           <>
           <OverviewCards />
            <DataTable />
            <Pagination />
           </>
            
         
      );
};

export default Analytics;