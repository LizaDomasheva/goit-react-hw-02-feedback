import React from 'react';
import styles from './feedbackOptions.module.css';
import PropTypes from 'prop-types';

export function FeedbackOptions({ handleClick }) {
  return (
    <>
      <h2 className={styles.title}>Please, leave feedback</h2>
      <button className={styles.buttonGood} type="button" name="good" onClick={handleClick}>
        Good
      </button>
      <button className={styles.buttonNeutral} type="button" name="neutral" onClick={handleClick}>
        Neutral
      </button>
      <button className={styles.buttonBad} type="button" name="bad" onClick={handleClick}>
        Bad
      </button>
    </>
  );
}

FeedbackOptions.propTypes = {
    handleClick: PropTypes.func
}