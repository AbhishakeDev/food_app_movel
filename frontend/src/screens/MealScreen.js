import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import Loader from '../components/Loader';
import Message from '../components/Message';
import { useDispatch, useSelector } from 'react-redux';
import { getHotelDetails } from '../actions/hotelActions';
import Meals from '../components/Meals';
import { addToCart } from '../actions/cartActions';

const MealScreen = ({ history, match }) => {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const hotelDetails = useSelector((state) => state.hotelDetails);
  const { hotelInfo, loading, error } = hotelDetails;

  useEffect(() => {
    // console.log(match.params.id);
    dispatch(getHotelDetails(match.params.id));
  }, [match.params.id, dispatch]);

  const addToCartHandler = (item, id) => {
    var obj = {
      ...item,
      orderedFromId: match.params.id,
      orderedFromName: hotelInfo.name,
      orderedBy: id,
    };
    dispatch(addToCart(obj));
    history.push(`/cart/${userInfo._id}`);
  };

  return (
    <>
      <Row>
        <Col>
          <Link className='btn btn-light my-3' to='/'>
            Go Back
          </Link>
        </Col>
        {hotelInfo && (
          <Col>
            <h1>{hotelInfo.name}</h1>
            <p>
              Open from {hotelInfo.openingTime}:00am to{' '}
              {hotelInfo.closingTime - 12}:00pm
            </p>
          </Col>
        )}
      </Row>

      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          {hotelInfo && (
            <Row>
              {hotelInfo.meals.map((el) => (
                <Meals
                  key={el._id}
                  item={el}
                  hotelId={match.params.id}
                  addToCartHandler={addToCartHandler}
                />
              ))}
            </Row>
          )}
        </>
      )}
    </>
  );
};

export default MealScreen;
