import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-12 col-md-10 col-md-offset-1">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
