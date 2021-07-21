import React from 'react';
import {POINT_COLUMNS, POINT_DATA} from "../util/constants";
import {useTable} from "react-table";
import Table from "./Table";


const PointTable = () => {
  const data = React.useMemo(() => POINT_DATA, []);
  const columns = React.useMemo(() => POINT_COLUMNS, []);
  const table = useTable({columns, data});

  return (
      <React.Fragment>
        <Table table={table}/>
      </React.Fragment>
  );
};
export default PointTable;