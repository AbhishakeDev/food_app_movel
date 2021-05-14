import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Hotel = ({ hotel }) => {
  var close1 = hotel.offDays.substr(0, 3);
  var close2 = hotel.offDays.substr(4);
  return (
    <div>
      <Card className='my-3 p-3 rounded'>
        <Card.Body>
          <Link style={{ textDecoration: 'none' }} to={`/hotel/${hotel._id}`}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Card.Title as='div'>
                <h4>
                  <strong>{hotel.name}</strong>
                </h4>
              </Card.Title>
              <Card.Title as='div'>
                <div style={{ marginBottom: '10px' }}>
                  Open from {hotel.openingTime}:00am to {hotel.closingTime - 12}
                  :00pm
                </div>
                <div>
                  <strong>
                    Closed on{' '}
                    <span style={{ textTransform: 'capitalize' }}>
                      {close1}
                    </span>{' '}
                    {close2 != '' && (
                      <>
                        and{' '}
                        <span style={{ textTransform: 'capitalize' }}>
                          {close2}
                        </span>
                      </>
                    )}
                  </strong>
                </div>
              </Card.Title>
            </div>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Hotel;
