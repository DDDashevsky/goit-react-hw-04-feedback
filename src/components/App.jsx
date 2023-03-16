import { useState } from 'react';

// import Feedback from './Feedback';
import Stats from './Stats';
import Section from './Section';
import FeedbackOptions from './FeedbackOptions';
import Notification from './Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = e => {
    const name = e.target.name;

    if (name === 'good') {
      setGood(good + 1);
    }

    if (name === 'neutral') {
      setNeutral(neutral + 1);
    }

    if (name === 'bad') {
      setBad(bad + 1);
    }
  };

  const countTotalFeedback = () => good + neutral + bad;

  const countPositiveFeedbackPercentage = () => {
    if (good === 0) {
      return 0;
    }
    return Math.round((good / countTotalFeedback()) * 100);
  };

  const options = ['good', 'neutral', 'bad'];

  return (
    <>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback} />
      </Section>
      <Section title={'Statistics'}>
        {countTotalFeedback() ? (
          <Stats
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </>
  );
};

// import React from 'react';

// // import Feedback from './Feedback';
// import Stats from './Stats';
// import Section from './Section';
// import FeedbackOptions from './FeedbackOptions';
// import Notification from './Notification';

// export class App extends React.Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   onLeaveFeedback = evt => {
//     this.setState(prevState => ({
//       [evt.target.name]: prevState[evt.target.name] + 1,
//     }));
//   };

//   countTotalFeedback = () => {
//     return this.state.good + this.state.neutral + this.state.bad;
//   };

//   countPositiveFeedbackPercentage = () => {
//     if (this.state.good === 0) {
//       return 0;
//     }
//     return Math.round((this.state.good / this.countTotalFeedback()) * 100);
//   };

//   render() {
//     const { good, neutral, bad } = this.state;
//     const options = ['good', 'neutral', 'bad'];

//     return (
//       <>
//         <Section title={'Please leave feedback'}>
//           <FeedbackOptions
//             options={options}
//             onLeaveFeedback={this.onLeaveFeedback}
//           />
//         </Section>
//         <Section title={'Statistics'}>
//           {this.countTotalFeedback() ? (
//             <Stats
//               good={good}
//               neutral={neutral}
//               bad={bad}
//               total={this.countTotalFeedback()}
//               positivePercentage={this.countPositiveFeedbackPercentage()}
//             />
//           ) : (
//             <Notification message="There is no feedback" />
//           )}
//         </Section>
//       </>
//     );
//   }
// }
