import React from 'react';
import ReactDOM from 'react-dom';
import Main from './component/main';

const keepItList = [
  {
    id: 1,
    genTitle: 'Javascript',
    genIcon: 'js.png',
    subGen: [
      {
        id: '1',
        subGenTitle: 'React Stateless Functional Components',
        tags: ['es6', 'react', 'js'],
        date: '2 days ago',
        detail: 'React .14 introduced ...'
      },
      {
        id: '2',
        subGenTitle: 'React Stateless Functional Components',
        tags: ['es6', 'react', 'js'],
        date: '3 days ago',
        detail: 'React .14 introduced ...'   
      }
    ]
  },
];
ReactDOM.render(<Main />, document.getElementById('root'));
