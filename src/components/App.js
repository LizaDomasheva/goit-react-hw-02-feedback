import React, { Component } from 'react';
// import { FeedbackOptions } from './FeedbackBtn/FeedbackOptions';
// import { Statistics } from './Statistics/Statistics';
import { SectionTitle } from './SectionTitle/SectionTitle';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    feedback: 0,
  };

  handleClick = e => {
    const name = e.target.name;
    this.setState(prev => ({
      [name]: prev[name] + 1,
    }));
    this.countPositiveFeedbackPercentage();
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    return Math.round((good * 100) / this.countTotalFeedback());
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <div>
        <SectionTitle
          handleClick={this.handleClick}
          good={good}
          neutral={neutral}
          bad={bad}
          countTotalFeedback={this.countTotalFeedback()}
          countPositiveFeedbackPercentage={this.countPositiveFeedbackPercentage()}
        />
      </div>
    );
  }
}
