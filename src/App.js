import React, { Component} from 'react';
import Example from './components/example';
import ConnectedComponentExample from './components/connected_component';
import styles from './app.css';

class App extends Component{
  render(){
    return(
      <div className="App">
        <Example />
        <ConnectedComponentExample />
      </div>
    );
  }
}

export default App;
