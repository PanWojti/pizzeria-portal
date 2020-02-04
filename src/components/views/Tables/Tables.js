import React from 'react';
import styles from './Tables.module.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const demoContent = [
  {time: '12:00 - 12:30', table1: '123', table2: null, table3: '456', table4: null, table5: null, table6: null},
  {time: '12:30 - 13:00', table1: '123', table2: null, table3: '456', table4: null, table5: null, table6: null},
  {time: '13:00 - 13:30', table1: '123', table2: '345', table3: '456', table4: null, table5: '890', table6: null},
  {time: '13:30 - 14:00', table1: null, table2: '345', table3: '456', table4: null, table5: '890', table6: null},
  {time: '14:00 - 14:30', table1: '234', table2: null, table3: '567', table4: '789', table5: null, table6: null},
  {time: '14:30 - 15:00', table1: '234', table2: null, table3: '567', table4: '789', table5: null, table6: '901'},
];

const renderActions = status => {
  switch (status) {
    case 'free':
      return (
        <>
          <Button>thinking</Button>
          <Button>new order</Button>
        </>
      );
    case 'thinking':
      return (
        <Button>new order</Button>
      );
    case 'ordered':
      return (
        <Button>prepared</Button>
      );
    case 'prepared':
      return (
        <Button>delivered</Button>
      );
    case 'delivered':
      return (
        <Button>paid</Button>
      );
    case 'paid':
      return (
        <Button>free</Button>
      );
    default:
      return null;
  }
};


const Tables = () => (
  <Paper className={styles.component}>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell></TableCell>
          <TableCell align="center">1</TableCell>
          <TableCell align="center">2</TableCell>
          <TableCell align="center">3</TableCell>
          <TableCell align="center">4</TableCell>
          <TableCell align="center">5</TableCell>
          <TableCell align="center">6</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {demoContent.map(row => (
          <TableRow key={row.time}>
            <TableCell component="th" scope="row" align="center">
              {row.time}
            </TableCell>
            <TableCell align="center">
              {row.table1 ? (
                <Button href={`${process.env.PUBLIC_URL}/tables/booking/${row.table1}`} variant="outlined" color="secondary">
                  {row.table1}
                </Button>
              ) : (
                <Button href={`${process.env.PUBLIC_URL}/tables/booking/new`} variant="outlined" color="primary">
                  NEW
                </Button>
              )}
            </TableCell>
            <TableCell align="center">
              {row.table2 ? (
                <Button href={`${process.env.PUBLIC_URL}/tables/booking/${row.table2}`} variant="outlined" color="secondary">
                  {row.table2}
                </Button>
              ) : (
                <Button href={`${process.env.PUBLIC_URL}/tables/booking/new`} variant="outlined" color="primary">
                  NEW
                </Button>
              )}
            </TableCell>
            <TableCell align="center">
              {row.table3 ? (
                <Button href={`${process.env.PUBLIC_URL}/tables/booking/${row.table3}`} variant="outlined" color="secondary">
                  {row.table3}
                </Button>
              ) : (
                <Button href={`${process.env.PUBLIC_URL}/tables/booking/new`} variant="outlined" color="primary">
                  NEW
                </Button>
              )}
            </TableCell>
            <TableCell align="center">
              {row.table4 ? (
                <Button href={`${process.env.PUBLIC_URL}/tables/booking/${row.table4}`} variant="outlined" color="secondary">
                  {row.table4}
                </Button>
              ) : (
                <Button href={`${process.env.PUBLIC_URL}/tables/booking/new`} variant="outlined" color="primary">
                  NEW
                </Button>
              )}
            </TableCell>
            <TableCell align="center">
              {row.table5 ? (
                <Button href={`${process.env.PUBLIC_URL}/tables/booking/${row.table5}`} variant="outlined" color="secondary">
                  {row.table5}
                </Button>
              ) : (
                <Button href={`${process.env.PUBLIC_URL}/tables/booking/new`} variant="outlined" color="primary">
                  NEW
                </Button>
              )}
            </TableCell>
            <TableCell align="center">
              {row.table6 ? (
                <Button href={`${process.env.PUBLIC_URL}/tables/booking/${row.table6}`} variant="outlined" color="secondary">
                  {row.table6}
                </Button>
              ) : (
                <Button href={`${process.env.PUBLIC_URL}/tables/booking/new`} variant="outlined" color="primary">
                  NEW
                </Button>
              )}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Paper>
);

export default Tables;
