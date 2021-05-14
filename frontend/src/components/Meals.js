import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const Hotel = ({ item, addToCartHandler }) => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  return (
    <div>
      <Card className='my-3 p-3 rounded'>
        <Card.Body
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Card.Title as='div'>
            <h4>
              <strong>{item.meal}</strong>
            </h4>
          </Card.Title>
          <Card.Text style={{ marginBottom: '25px' }} as='div'>
            {item.price.substr(0, 3) + ' ' + item.price.substr(3)}
          </Card.Text>
        </Card.Body>
        <Button
          onClick={() => addToCartHandler(item, userInfo._id)}
          className='btn-sm meal'
          disabled={!userInfo}
        >
          Add to Cart
        </Button>
      </Card>
    </div>
  );
};

export default Hotel;
