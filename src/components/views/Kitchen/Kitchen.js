import React from 'react';
import styles from './Kitchen.module.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const demoContent = [
  {order: 1, table: '2', meals:'chicken breast', status: 'completed'},
  {order: 2, table: 'TakeAway', meals:'fish', status: 'completed'},
  {order: 3, table: '1', meals:'pizza', status: 'in progress'},
  {order: 4, table: '3', meals:'chicken wings', status: 'in progress'},
  {order: 5, table: 'TakeAway', meals:'pasta', status: 'in progress'},
  {order: 6, table: '4', meals:'chicken wings', status: 'in progress'},
];

const renderActions = status => {
  switch (status) {
    case 'in progress':
      return (
        <>
          <Button>Complete</Button>
        </>
      );
    case 'completed':
      return (
        null
      );

    default:
      return null;
  }
};

const Kitchen = () => (
  <Paper className={styles.component}>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Order</TableCell>
          <TableCell>Table</TableCell>
          <TableCell>Meals</TableCell>
          <TableCell>Status</TableCell>
          <TableCell>Action</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {demoContent.map(row => (
          <TableRow key={row.order}>
            <TableCell component="th" scope="row">
              {row.order}
            </TableCell>
            <TableCell>
              {row.table}
            </TableCell>
            <TableCell>
              {row.meals}
            </TableCell>
            <TableCell>
              {row.status}
            </TableCell>
            <TableCell>
              {renderActions(row.status)}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Paper>
);

export default Kitchen;
