import React from 'react';
import PropTypes from 'prop-types';
import styles from './Waiter.module.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

class Waiter extends React.Component {
  static propTypes = {
    fetchTables: PropTypes.func,
    tables: PropTypes.any,
    loading: PropTypes.shape({
      active: PropTypes.bool,
      error: PropTypes.oneOfType([PropTypes.bool,PropTypes.string]),
    }),
    updateStatus: PropTypes.func,
  }

  componentDidMount(){
    const { fetchTables } = this.props;
    fetchTables();
  }

  changeTableStatus(tableId, status) {
    const statusChangeMap = {
      free: 'thinking',
      thinking: 'ordered',
      ordered: 'prepared',
      prepared: 'delivered',
      delivered: 'paid',
      paid: 'free',
    };
    const {updateStatus} = this.props;
    updateStatus(tableId, statusChangeMap[status]);
  }

  renderActions(status, tableId){
    const actionsButtonsMap = {
      free: ['thinking','new order'],
      thinking: 'ordered',
      ordered: 'prepared',
      prepared: 'delivered',
      delivered: 'paid',
      paid: 'free',
    };

    if (typeof(actionsButtonsMap[status]) === 'string') {
      return (
        <Button onClick={() => this.changeTableStatus(tableId, status)}>{actionsButtonsMap[status]}</Button>
      );
    } else {
      return (
        <>
          <Button onClick={() => this.changeTableStatus(tableId, status)}>{actionsButtonsMap[status][0]}</Button>
          <Button onClick={() => this.changeTableStatus(tableId, status)}>{actionsButtonsMap[status][1]}</Button>
        </>
      );
    }
  }

  render() {
    const { loading: { active, error }, tables } = this.props;

    if(active || !tables.length){
      return (
        <Paper className={styles.component}>
          <p>Loading...</p>
        </Paper>
      );
    } else if(error) {
      return (
        <Paper className={styles.component}>
          <p>Error! Details:</p>
          <pre>{error}</pre>
        </Paper>
      );
    } else {
      return (
        <Paper className={styles.component}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Table</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Order</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tables.map(row => (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell>
                    {row.status}
                  </TableCell>
                  <TableCell>
                    {row.order && (
                      <Button to={`${process.env.PUBLIC_URL}/waiter/order/${row.order}`}>
                        {row.order}
                      </Button>
                    )}
                  </TableCell>
                  <TableCell>
                    {this.renderActions(row.status, row.id)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      );
    }
  }
}

export default Waiter;
