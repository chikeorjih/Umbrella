import React from 'react';
import ReactDOM from 'react-dom';

class Address extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
        <input type="text" className="address" />
        <button className="address-submit btn">Search</button>
      </div>
    );
  }
}

export default Address;
