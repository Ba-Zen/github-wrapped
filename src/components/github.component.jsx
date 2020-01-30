import React from 'react';
import { Avatar } from '@chakra-ui/core';

const GitHub = props => {
  return (
    <>
      {props.user.username && <span> {props.user.username}</span>}
      {props.user.avatar_url && (
        <Avatar size='2xl' src={props.user.avatar_url} />
      )}
      {props.user.html_url && <a href={props.user.html_url}>Link</a>}
      {props.user.name && <span> {props.user.name}</span>}
      {props.user.bio && <span> {props.user.bio} </span>}
      {props.user.location && <span> {props.user.location} </span>}
      {props.user.error && <span>{props.user.error}</span>}

      {props.userRepos &&
        Object.keys(props.userRepos).map(key => (
          <>
            <span key={props.userRepos[key].id}>
              <p>{props.userRepos[key].name}</p>
              <p>{props.userRepos[key].language}</p>
              {console.log(props.userRepos[key])}
            </span>
          </>
        ))}
    </>
  );
};

export default GitHub;
