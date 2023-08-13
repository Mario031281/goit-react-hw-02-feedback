import { Component } from 'react';
import { Feedback } from './Feedback/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { NotificationMessage } from './Notification/Notification';
import { GlobalStyle } from './GlobalStyled';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  onLeaveFeedback = evt => {
    const option = evt.currentTarget.textContent;
    this.setState(prevState => {
      return {
        [option]: prevState[option] + 1,
      };
    });
  };

  countTotalFeedback() {
    return this.state.good + this.state.neutral + this.state.bad;
  }
  countPositiveFeedbackPercentage() {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  }
  render() {
    return (
      <div>
        <Section title={'Please leave feedback'}>
          <Feedback
            onLeaveFeedback={this.onLeaveFeedback}
            options={Object.keys(this.state)}
          />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() === 0 ? (
            <NotificationMessage />
          ) : (
            <Statistics
              Good={this.state.good}
              Neutral={this.state.neutral}
              Bad={this.state.bad}
              Total={this.countTotalFeedback()}
              Percentage={this.countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
        <GlobalStyle />
      </div>
    );
  }
}
