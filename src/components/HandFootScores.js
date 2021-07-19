import React from 'react';
import BTable from 'react-bootstrap/Table';
import {COLUMNS, DATA} from "../util/constants";
import { useTable } from "react-table";


const HandFootScores = () => {
  const data = React.useMemo(() => DATA, []);
  const columns = React.useMemo(() => COLUMNS, []);
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
    columns,
    data,
  })

  return (
      <React.Fragment>
        <div className="hand-foot-scores">
          <BTable striped bordered hover size="sm" {...getTableProps()}>
            <thead>
            {headerGroups.map(headerGroup => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map(column => (
                      <th
                          {...column.getHeaderProps()}
                          style={{
                            borderBottom: 'solid 3px red',
                            background: 'aliceblue',
                            color: 'black',
                            fontWeight: 'bold',
                          }}
                      >
                        {column.render('Header')}
                      </th>
                  ))}
                </tr>
            ))}
            </thead>
            <tbody {...getTableBodyProps()}>
            {rows.map(row => {
              prepareRow(row)
              return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map(cell => {
                      return (
                          <td
                              {...cell.getCellProps()}
                              style={{
                                padding: '10px',
                                border: 'solid 1px gray',
                                background: 'papayawhip',
                              }}
                          >
                            {cell.render('Cell')}
                          </td>
                      )
                    })}
                  </tr>
              )
            })}
            </tbody>
          </BTable>
        </div>
      </React.Fragment>
  );
};
export default HandFootScores;