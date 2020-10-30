import React from 'react';
import Example from './components/example';
import ConnectedComponent from './components/connected_component';
import './app.css';

class App extends React.PureComponent {
  render() {
    return (
      <div>
        <Example />
        <ConnectedComponent />
      </div>
    );
  }
}

export default App;
