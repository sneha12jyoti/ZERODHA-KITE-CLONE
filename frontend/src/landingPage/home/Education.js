import React from 'react';

function Education() {
  return (
    <div className='container mt-5'>
      <div className='row align-items-center'>
        
        {/* Left Side: Your Image */}
        <div className='col-12 col-md-6 text-center'>
          <img 
            src='media/images/education.svg' 
            alt='Education Graphic' 
            className='img-fluid' 
            style={{ width: '90%' }} 
          />
        </div>

        {/* Right Side: Your Written Text */}
        <div className='col-12 col-md-6 mt-4 mt-md-0'>
          <h1 className='mb-4 fs-2'>Free and open market education</h1>
          
          <p>
            Varsity, the largest online stock market education book in the world 
            covering everything from the basics to advanced trading.
          </p>
          <a href='' className='text-decoration-none d-inline-block mb-4'>
            varsity <i className="fa fa-long-arrow-right ms-2" aria-hidden="true"></i>
          </a>

          <p className='mt-5'>
            TradingQ&A, the most active trading and investment community in India 
            for all your market related queries.
          </p>
          <a href='' className='text-decoration-none'>
            TradingQ&A <i className="fa fa-long-arrow-right ms-2" aria-hidden="true"></i>
          </a>
        </div>

      </div>
    </div>
  );
}

export default Education;