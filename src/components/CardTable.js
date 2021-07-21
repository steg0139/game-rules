import React from 'react';
import {CARD_COLUMNS, CARD_DATA} from "../util/constants";
import {useTable} from "react-table";
import Table from "./Table";


const CardTable = () => {
  const data = React.useMemo(() => CARD_DATA, []);
  const columns = React.useMemo(() => CARD_COLUMNS, []);
  const table = useTable({columns, data});

  return (
      <React.Fragment>
        <Table table={table}/>
      </React.Fragment>
  );
};
export default CardTable;