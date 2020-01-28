import React from 'react';
import {Link} from 'react-router-dom';
//import PropTypes from 'prop-types';
import styles from './Tables.module.scss';

const Tables = () => (
  <div className={styles.component}>
    <h2>Tables Page</h2>
    <div>
      <Link to={`${process.env.PUBLIC_URL}/tables/booking/new`}>
      New Booking
      </Link>
      <Link to={`${process.env.PUBLIC_URL}/tables/booking/:id`}>
      Change Booking
      </Link>
      <Link to={`${process.env.PUBLIC_URL}/tables/events/new`}>
      New Event
      </Link>
      <Link to={`${process.env.PUBLIC_URL}/tables/events/:id`}>
      Change Event
      </Link>
    </div>
  </div>
);

export default Tables;
