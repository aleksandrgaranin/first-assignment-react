import React, { Component } from 'react';

import './App.css';
import UserInput from './User/UserInput';
import UserOutpus from './User/UserOutput';

class App extends Component {
  state = {
    username: 'Nick'
      
  };

  userChangerHandler = (event) =>{
    this.setState({username:event.target.value})}


  render() {
    return (
      <div className="App">
        <h1>hi app</h1>
        <UserInput 
          changed={this.userChangerHandler} 
          currentName={this.state.username}/>
        
        <UserOutpus 
          name={this.state.username}/>
        <UserOutpus 
          name={this.state.username}/>
      </div>
    );
  };
};

export default App;
