import React from 'react';
import App from './App';

describe('App', () => {
  it('should mount up and render app', () => {
    const app = shallow(<App />);

    expect(app).toBeDefined();
  });
});
