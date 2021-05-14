import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const SearchBox = ({ history }) => {
  const [keyword, setKeyword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword) {
      var date = new Date(keyword);
      var arr = date.toString().split(' ');

      var day = arr[0];
      var hours = arr[4].split(':')[0];
      var key = day.toLowerCase() + '_' + hours;

      if (day && hours) {
        setKeyword('');
        history.push(`/search/${key}`);
      }
    } else {
      setKeyword('');
    }
  };

  return (
    <Form onSubmit={submitHandler} inline>
      <Form.Control
        type='datetime-local'
        name='q'
        onChange={(e) => setKeyword(e.target.value)}
        placeholder='Search Products...'
        className='mr-sm-2 ml-sm-5'
        value={keyword}
      ></Form.Control>
      <Button type='submit' className='btn-sm btn-search btn-dark'>
        Search
      </Button>
    </Form>
  );
};

export default SearchBox;
