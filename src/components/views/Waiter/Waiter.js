import React from 'react';
import {Link} from 'react-router-dom';
//import PropTypes from 'prop-types';
import styles from './Waiter.module.scss';

const Waiter = () => (
  <div className={styles.component}>
    <h2>Waiter Page</h2>
    <div>
      <Link to={`${process.env.PUBLIC_URL}/waiter/order/new`}>
      New Order
      </Link>
      <Link to={`${process.env.PUBLIC_URL}/waiter/order/:id`}>
      Change Order
      </Link>
    </div>
  </div>
);

export default Waiter;
