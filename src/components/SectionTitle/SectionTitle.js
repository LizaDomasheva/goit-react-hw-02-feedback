import React from 'react';
import { FeedbackOptions } from '../FeedbackBtn/FeedbackOptions';
import { Statistics } from '../Statistics/Statistics';
import PropTypes from 'prop-types';

export function SectionTitle({
  handleClick,
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <>
      <FeedbackOptions onLeaveFeedback={handleClick} />
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={total}
        positivePercentage={positivePercentage}
      />
    </>
  );
}

SectionTitle.propTypes = {
    handleClick: PropTypes.func,
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.number,
    positivePercentage: PropTypes.number
  };