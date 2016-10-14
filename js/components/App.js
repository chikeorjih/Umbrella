import React from 'react';
import ReactDOM from 'react-dom';
import Address from './Address';

class App extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="content">
        <Address/>
      </div>
    );
  }
}

export default App;
