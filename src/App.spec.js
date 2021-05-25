import React from 'react';
import App from './App';

describe('App', () => {
  it('should mount without crashing', () => {
    const wrapper = shallow(<App />);

    expect(wrapper).toBeDefined();
  });
});
