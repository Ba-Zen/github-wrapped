import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userData: []
    };
  }

  componentDidMount() {
    axios.get(`https://api.github.com/users/ba-zen`).then(response => {
      console.log('anything here??', response.data);
      this.setState({ userData: response.data });
    });
  }

  render() {
    const { userData } = this.state;
    console.log(userData);
    return (
      <div className='App'>
        <h1>Howdy Meng!</h1>
        <h4>{userData.login}</h4>
      </div>
    );
  }
}
export default App;
