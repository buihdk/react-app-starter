import React from 'react';
import ReactDOM from 'react-dom';

import App from './app/App';

ReactDOM.render = jest.fn();

describe('root', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    div.setAttribute('id', 'root');
    document.body.appendChild(div);

    import('./index.jsx').then(() =>
      expect(ReactDOM.render).toHaveBeenCalledWith(<App />, div),
    );
  });
});
