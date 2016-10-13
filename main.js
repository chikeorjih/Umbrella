import './sass/styles.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './js/components/App';

class Root extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return <App/>;
  }
}

let root = <Root/>

ReactDOM.render(root, document.getElementById('app'));
