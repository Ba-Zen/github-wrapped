import React from 'react';
import { Input, Button } from '@chakra-ui/core';
import './form.styles.scss';

const Form = props => {
  console.log(props);
  return (
    <div className='search'>
      <form onSubmit={props.loadUser} autocomplete='off'>
        <Input
          type='text'
          placeholder='enter a username'
          name='name'
          variant='outline'
          isFullWidth={false}
        />
      </form>
      <Button
        rightIcon='search'
        variantColor='pink'
        variant='solid'
        onClick={props.loadUser}
      >
        Search
      </Button>
      {/* <button onClick={props.loadUser}>Fetch data</button> */}
    </div>
  );
};

export default Form;
