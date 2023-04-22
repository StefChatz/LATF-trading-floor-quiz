import { IQuiz } from '../interfaces';

export const mockQuizzes: IQuiz[] = [
  {
    question: {
      id: 0,
      title: 'What is a key aspect of risk management in trading?',
    },
    answers: [
      {
        value: '1',
        label: 'Ignoring market trends',
      },
      {
        value: '2',
        label: 'Betting your entire capital on a single trade',
      },
      {
        value: '3',
        label: 'Defining your risk tolerance',
      },
      {
        value: '4',
        label: 'Trading solely based on emotions',
      },
    ],
    correctAnswer: '3',
  },
  {
    question: {
      id: 1,
      title:
        'What do support and resistance levels indicate in technical analysis?',
    },
    answers: [
      {
        value: '1',
        label: 'Levels where buying or selling pressure is expected to change',
      },
      {
        value: '2',
        label: 'The emotional state of traders',
      },
      {
        value: '3',
        label: 'The overall market direction',
      },
      {
        value: '4',
        label: 'The number of trades executed at specific prices',
      },
    ],
    correctAnswer: '1',
  },
  {
    question: {
      id: 2,
      title:
        'What is the primary purpose of using Fibonacci retracements in trading?',
    },
    answers: [
      {
        value: '1',
        label: 'To predict future prices',
      },
      {
        value: '2',
        label: 'To identify potential reversal points in price trends',
      },
      {
        value: '3',
        label: 'To determine the overall market direction',
      },
      {
        value: '4',
        label: 'To choose the best entry and exit points for trades',
      },
    ],
    correctAnswer: '2',
  },
  {
    question: {
      id: 3,
      title: 'What does a volume profile show in technical analysis?',
    },
    answers: [
      {
        value: '1',
        label: 'The price at which the most shares were traded',
      },
      {
        value: '2',
        label: 'The total number of shares traded',
      },
      {
        value: '3',
        label: 'The highest and lowest prices for a trading session',
      },
      {
        value: '4',
        label: 'The amount of shares traded at different price levels',
      },
    ],
    correctAnswer: '4',
  },
  {
    question: {
      id: 4,
      title: 'What is the Cumulative Volume Delta (CVD) used for?',
    },
    answers: [
      {
        value: '1',
        label: 'Measuring the difference between buying and selling pressure',
      },
      {
        value: '2',
        label: 'Identifying market trends',
      },
      {
        value: '3',
        label: 'Calculating average trading volume',
      },
      {
        value: '4',
        label: 'Predicting future price movements',
      },
    ],
    correctAnswer: '1',
  },
  {
    question: {
      id: 5,
      title: 'What is the basic structure of an Elliott Wave impulse pattern?',
    },
    answers: [
      {
        value: '1',
        label: '3 waves up, 2 waves down',
      },
      {
        value: '2',
        label: '2 waves up, 3 waves down',
      },
      {
        value: '3',
        label: '5 waves up, 3 waves down',
      },
      {
        value: '4',
        label: '4 waves up, 4 waves down',
      },
    ],
    correctAnswer: '3',
  },
  {
    question: {
      id: 6,
      title:
        'What are the necessary predefined steps that should be taken before opening a trade?',
    },
    answers: [
      {
        value: '1',
        label:
          'Identifying the entry point, setting a stop loss, and determining a take profit level',
      },
      {
        value: '2',
        label: 'Relying on intuition and emotions to make trading decisions',
      },
      {
        value: '3',
        label: 'Ignoring market trends and focusing on individual trades',
      },
      {
        value: '4',
        label: 'Betting your entire capital on a single trade',
      },
    ],
    correctAnswer: '1',
  },
  {
    question: {
      id: 7,
      title: 'What is the main characteristic of a Swing Failure Pattern?',
    },
    answers: [
      {
        value: '1',
        label:
          'A reversal pattern that occurs when a swing high or low fails to break previous levels',
      },
      {
        value: '2',
        label: 'A continuation pattern that indicates a strong trend',
      },
      {
        value: '3',
        label: 'A consolidation pattern that occurs before a breakout',
      },
      {
        value: '4',
        label: 'A topping pattern that signals the end of an uptrend',
      },
    ],
    correctAnswer: '1',
  },
  {
    question: {
      id: 8,
      title:
        'Which strategy can help a trader lock in profits while still giving a trade room to grow?',
    },
    answers: [
      {
        value: '1',
        label:
          'Doubling down / Opening a second position in the same direction',
      },
      {
        value: '2',
        label: 'Scaling out / Removing risk',
      },
      {
        value: '3',
        label:
          'Closing the trade as soon as it starts to move in the unfavorable direction',
      },
      {
        value: '4',
        label: 'Moving your stop loss further away from the entry point',
      },
    ],
    correctAnswer: '2',
  },
  {
    question: {
      id: 9,
      title: 'What is the primary purpose of hedging a position in trading?',
    },
    answers: [
      {
        value: '1',
        label: 'To eliminate all risks associated with a trade',
      },
      {
        value: '2',
        label: 'To increase the potential return of a trade',
      },
      {
        value: '3',
        label: 'To reduce the risk of a trade by taking an offsetting position',
      },
      {
        value: '4',
        label: 'To speculate on the direction of the market',
      },
    ],
    correctAnswer: '3',
  },
  {
    question: {
      id: 10,
      title: 'What is an important aspect of managing expectations in trading?',
    },
    answers: [
      {
        value: '1',
        label: 'Believing that every trade will be a winner',
      },
      {
        value: '2',
        label: 'Focusing on the potential rewards rather than risks',
      },
      {
        value: '3',
        label: 'Accepting that losses are a part of trading',
      },
      {
        value: '4',
        label: 'Relying on intuition and emotions to make trading decisions',
      },
    ],
    correctAnswer: '3',
  },
  {
    question: {
      id: 11,
      title: 'What does having a probabilistic mindset in trading involve?',
    },
    answers: [
      {
        value: '1',
        label: 'Ignoring probabilities and focusing on gut feelings',
      },
      {
        value: '2',
        label: 'Believing in the certainty of specific trade outcomes',
      },
      {
        value: '3',
        label: 'Viewing trading as a game of chance',
      },
      {
        value: '4',
        label: 'Evaluating trades based on their potential risk and reward',
      },
    ],
    correctAnswer: '4',
  },
];
