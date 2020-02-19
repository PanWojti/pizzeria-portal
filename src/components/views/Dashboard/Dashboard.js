import React from 'react';
//import PropTypes from 'prop-types';
import styles from './Dashboard.module.scss';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const demoContent = [
  {id: '1', time: '12:00 - 14:00', table: '2', name: 'Jane Doe', persons: '3', phone: '123456789'},
  {id: '2', time: '12:00 - 13:30', table: '1', name: 'John Doe', persons: '4', phone: '123456789'},
];

const Dashboard = () => (
  <Paper className={styles.component}>
    <TableHead>
      <TableRow>
        <TableCell align="left" colSpan={12} className={styles.tableHeader}>
          Orders Statistics
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell>
          Dine in orders today:
        </TableCell>
        <TableCell>
            17
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell>
          Value of dine in orders today:
        </TableCell>
        <TableCell>
          $550.00
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell>
          Takeaway orders today:
        </TableCell>
        <TableCell>
          9
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell>
          Value of takeaway orders today:
        </TableCell>
        <TableCell>
          $312.00
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell>
          Total orders today:
        </TableCell>
        <TableCell>
          26
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell>
          Total value of orders today:
        </TableCell>
        <TableCell>
          $862.00
        </TableCell>
      </TableRow>
    </TableHead>
    <TableHead>
      <TableRow>
        <TableCell align="left" colSpan={12} className={styles.tableHeader}>
          Todays Bookings
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Id.</TableCell>
        <TableCell>Time</TableCell>
        <TableCell>Table No.</TableCell>
        <TableCell>Name</TableCell>
        <TableCell>No. of Persons</TableCell>
        <TableCell>Telephone number</TableCell>
      </TableRow>
      {demoContent.map(row => (
        <TableRow key={row.id}>
          <TableCell component="th" scope="row">
            {row.id}
          </TableCell>
          <TableCell>
            {row.time}
          </TableCell>
          <TableCell>
            {row.table}
          </TableCell>
          <TableCell>
            {row.name}
          </TableCell>
          <TableCell>
            {row.persons}
          </TableCell>
          <TableCell>
            {row.phone}
          </TableCell>
        </TableRow>
      ))}
    </TableHead>
  </Paper>
);

export default Dashboard;
