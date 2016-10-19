// good examples of code here: https://facebook.github.io/react/docs/reusable-components.html
import React, { Component } from 'react';

import './App.css';

import TheGrid from './TheGrid';

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-body">
          <TheGrid />
        </div>
        <div className="footer"></div>
      </div> // end app div
    );
  }
}

// class Title extends Component {
//   render() {
//     return (
//       <h1 {...this.props}>
//       </h1>
//     );
//   }
// }

export default App;
