import React, { Component } from 'react';
import LoginArea from './login/LoginArea';
import Profile from './profile/Profile';

class App extends Component {
  render() {
    return (
      <div className="App">
          {/* <LoginArea/> */}
          <Profile/>
      </div>
    );
  }
}

export default App;
