import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import { Link } from 'react-router-dom';
import { Row, Col, ListGroup, Image, Button, Card } from 'react-bootstrap';
import { removeFromCart } from '../actions/cartActions';

const CartScreen = ({ match, location, history }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (!userInfo) {
      history.push('/login');
    }
  }, [userInfo]);

  const removeFromCartHandler = (id) => {
    // console.log('remove');
    dispatch(removeFromCart(id));
  };

  const checkoutHandler = () => {
    history.push('/login?redirect=shipping');
  };

  return (
    <Row>
      <Col md={8}>
        <h1>Food Cart</h1>
        {cartItems.length === 0 ? (
          <Message>
            Your Cart is Empty <Link to='/'>Go back</Link>
          </Message>
        ) : (
          <ListGroup variant='flush'>
            {cartItems.map((item) => (
              <ListGroup.Item key={item._id}>
                <Row>
                  <Col md={2}>
                    <Image
                      src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8yMIHkxs901EzRfpvMq6gIEfDADZcfbJxLw&usqp=CAU'
                      fluid
                      rounded
                    />
                  </Col>
                  <Col md={6}>{item.meal}</Col>
                  <Col md={2}>
                    {item.price.substr(0, 3) + ' ' + item.price.substr(3)}
                  </Col>
                  <Col md={2}>
                    <Button
                      type='button'
                      variant='light'
                      onClick={() => removeFromCartHandler(item._id)}
                    >
                      <i className='fas fa-trash'></i>
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </Col>
      <Col md={4}>
        <Card
          style={{ padding: '30px', display: 'flex', flexDirection: 'column' }}
        >
          <div></div>
          <div>
            <h2>Subtotal ({cartItems.length}) items</h2>
            MYR{' '}
            {cartItems
              .reduce((acc, item) => acc + parseInt(item.price.substr(3)), 0)
              .toFixed(2)}
          </div>
          <div>
            <Button
              type='button'
              className='btn-md cart'
              disabled={cartItems.length === 0}
              onClick={checkoutHandler}
            >
              Proceed To Checkout
            </Button>
          </div>
          {/* <ListGroup variant='flush'>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <ListGroup.Item>
                <h2>Subtotal ({cartItems.length}) items</h2>
                MYR{' '}
                {cartItems
                  .reduce(
                    (acc, item) => acc + parseInt(item.price.substr(3)),
                    0
                  )
                  .toFixed(2)}
              </ListGroup.Item>
              <ListGroup.Item>
                <Button
                  type='button'
                  className='btn-sm'
                  disabled={cartItems.length === 0}
                  onClick={checkoutHandler}
                >
                  Proceed To Checkout
                </Button>
              </ListGroup.Item>
            </div>
          </ListGroup> */}
        </Card>
      </Col>
    </Row>
  );
};

export default CartScreen;
