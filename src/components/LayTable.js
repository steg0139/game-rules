import React from 'react';
import {LAY_COLUMNS, LAY_DATA} from "../util/constants";
import {useTable} from "react-table";
import Table from "./Table";


const LayTable = () => {
  const data = React.useMemo(() => LAY_DATA, []);
  const columns = React.useMemo(() => LAY_COLUMNS, []);
  const table = useTable({columns, data});

  return (
      <React.Fragment>
        <Table table={table}/>
      </React.Fragment>
  );
};
export default LayTable;