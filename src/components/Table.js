import React from 'react';
import BTable from 'react-bootstrap/Table';


const Table = ({table}) => {

  return (
      <React.Fragment>
        <BTable striped bordered hover size="sm" {...table.getTableProps()}>
          <thead>
          {table.headerGroups.map(headerGroup => (
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
          <tbody {...table.getTableBodyProps()}>
          {table.rows.map(row => {
            table.prepareRow(row)
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
      </React.Fragment>
  );
};
export default Table;