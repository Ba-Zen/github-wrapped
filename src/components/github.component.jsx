import React from 'react';
import { Avatar } from '@chakra-ui/core';
import { Doughnut } from 'react-chartjs-2';

class GitHub extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    label: [],
    num: []
  };

  uniqueOccurrences = arr => {
    var end = [];
    var hash = {};
    arr.forEach(num => (hash[num] = (hash[num] || 0) + 1));
    console.log('HASH', hash);
    const val = Object.values(hash).sort((a, b) => a - b);
    console.log('val', val);
    end.push(hash);
    console.log('end', end);
    // for (let i = 0; i < val.length - 1; i++) {
    //   if (val[i] === val[i + 1]) return false;
    // }
    return true, hash;
  };

  componentDidMount() {
    this.setState({
      ...this.state
    });
  }

  render() {
    let arr = [];
    let label = [];
    let num = [];
    const data = {
      labels: this.state.label[3],
      datasets: [
        {
          data: this.state.num[3],
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
          hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
        }
      ]
    };
    console.log('DATASETS', data.datasets.data);
    return (
      <>
        {this.props.user.username && <span> {this.props.user.username}</span>}
        {this.props.user.avatar_url && (
          <Avatar size='2xl' src={this.props.user.avatar_url} />
        )}
        {this.props.user.html_url && (
          <a href={this.props.user.html_url}>Link</a>
        )}
        {this.props.user.name && <span> {this.props.user.name}</span>}
        {this.props.user.bio && <span> {this.props.user.bio} </span>}
        {this.props.user.location && <span> {this.props.user.location} </span>}
        {this.props.user.error && <span>{this.props.user.error}</span>}
        {/* 
      {this.props.userRepos.language &&
        Object.keys(this.props.userRepos.language).map(key => <p>{key.language}</p>)}
      {console.log(this.props.userRepos.language)} */}
        <Doughnut
          data={data}
          width={100}
          height={50}
          options={{ maintainAspectRatio: false }}
        />

        {this.props.userRepos &&
          Object.keys(this.props.userRepos).map(key => (
            <>{arr.push(this.props.userRepos[key].language)}</>
          ))}

        {this.state.label.push(Object.keys(this.uniqueOccurrences(arr)))}
        {this.state.num.push(Object.values(this.uniqueOccurrences(arr)))}
        {console.log('DATA', this.state.label, this.state.num)}
      </>
    );
  }
}

//const getKeys = Object.keys(uniqueOccurrences(arr));

export default GitHub;
