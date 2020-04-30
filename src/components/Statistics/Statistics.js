import React from 'react';
import { NotificationMessage } from '../Notification/NotificationMessage';
import styles from './statistics.module.css';
import PropTypes from 'prop-types';

export function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <>
      <h2 className={styles.title}>Statistics</h2>
      {total === 0 ? (
        <NotificationMessage message="No feedback given" />
      ) : (
        <ul className={styles.list}>
          <li className={styles.item}>Good: {good}</li>
          <li className={styles.item}>Neutral: {neutral}</li>
          <li className={styles.item}>Bad: {bad}</li>
          <li className={styles.item}>Total: {total}</li>
          <li className={styles.item}>
            Positive feedback: {positivePercentage}%
          </li>
        </ul>
      )}
    </>
  );
}

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number
};
