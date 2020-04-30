import React from 'react';
import styles from './feedbackOptions.module.css';
import PropTypes from 'prop-types';

export function FeedbackOptions({ onLeaveFeedback }) {
  return (
    <>
      <h2 className={styles.title}>Please, leave feedback</h2>
      <button className={styles.buttonGood} type="button" name="good" onClick={onLeaveFeedback}>
        Good
      </button>
      <button className={styles.buttonNeutral} type="button" name="neutral" onClick={onLeaveFeedback}>
        Neutral
      </button>
      <button className={styles.buttonBad} type="button" name="bad" onClick={onLeaveFeedback}>
        Bad
      </button>
    </>
  );
}

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func
}