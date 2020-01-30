import React from 'react';
import axios from 'axios';

import Form from './components/form.component';
import GitHub from './components/github.component';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {},
      userRepos: []
    };
  }

  getUser = e => {
    const removeWhitespace = field => {
      return field.replace(/\s/g, '');
    };

    const name = removeWhitespace(e.target.name.value);

    e.preventDefault();

    axios
      .get(`https://api.github.com/users/${name}`)
      .then(res => {
        this.setState({
          user: {
            username: res.data.login,
            avatar_url: res.data.avatar_url,
            html_url: res.data.html_url,
            name: res.data.name,
            bio: res.data.bio,
            location: res.data.location,
            public_repos: res.data.public_repos,
            following: res.data.following,
            followers: res.data.followers,
            created_at: res.data.created_at,
            blog: res.data.blog
          }
        });
      })

      .catch(err => {
        console.log(err);
      });
    axios
      .get(`https://api.github.com/users/${name}/repos?per_page=100`)
      .then(res => {
        console.log(res.data.language);

        this.setState({
          userRepos: {
            ...res.data
          }
        });
      });
  };

  render() {
    const { user, userRepos } = this.state;
    return (
      <div className='App'>
        <h1>Github Wrapped</h1>
        <Form loadUser={this.getUser} />
        <GitHub user={user} userRepos={userRepos} />
      </div>
    );
  }
}

export default App;
