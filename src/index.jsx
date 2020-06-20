import React from 'react';
import ReactDOM from 'react-dom';

import App from './app/App';

if (process && process.env) {
  console.warn(`node environment: ${process.env.NODE_ENV}`);
}

ReactDOM.render(<App />, document.getElementById('root'));
