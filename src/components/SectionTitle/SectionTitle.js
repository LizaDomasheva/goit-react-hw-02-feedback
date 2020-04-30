import React from 'react';
import { FeedbackOptions } from '../FeedbackBtn/FeedbackOptions';
import { Statistics } from '../Statistics/Statistics';
import PropTypes from 'prop-types';

export function SectionTitle({
  handleClick,
  good,
  neutral,
  bad,
  countTotalFeedback,
  countPositiveFeedbackPercentage,
}) {
  return (
    <>
      <FeedbackOptions handleClick={handleClick} />
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        countTotalFeedback={countTotalFeedback}
        countPositiveFeedbackPercentage={countPositiveFeedbackPercentage}
      />
    </>
  );
}

SectionTitle.propTypes = {
    handleClick: PropTypes.func,
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    countTotalFeedback: PropTypes.number,
    countPositiveFeedbackPercentage: PropTypes.number
  };