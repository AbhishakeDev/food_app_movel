import React, { useEffect } from 'react';
import { Row } from 'react-bootstrap';
import Hotel from '../components/Hotel';
import { useDispatch, useSelector } from 'react-redux';
import { listHotels } from '../actions/hotelActions';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { Link } from 'react-router-dom';

const HomeScreen = ({ match }) => {
  const keyword = match.params.keyword;

  const dispatch = useDispatch();

  const hotelList = useSelector((state) => state.hotelList);

  const { loading, error, hotels } = hotelList;

  useEffect(() => {
    dispatch(listHotels(keyword));
  }, [dispatch, keyword]);

  return (
    <>
      {!keyword ? null : (
        <Link to='/' className='btn btn-light'>
          Go Back
        </Link>
      )}
      {hotels && (
        <h1>
          {hotels.length != 0
            ? keyword
              ? 'List of Hotels based on your search'
              : 'List of Hotels'
            : ''}
        </h1>
      )}
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger' children={error} />
      ) : (
        <>
          {hotels.length === 0 ? (
            <h1>
              Sorry , No Availablity! Try searching for another time or date.
            </h1>
          ) : (
            <Row>
              {hotels.map((hotel, index) => (
                <Hotel key={index} hotel={hotel}></Hotel>
              ))}
            </Row>
          )}
        </>
      )}
    </>
  );
};

export default HomeScreen;
