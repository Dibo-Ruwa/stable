import React from 'react'

export const LaundryPricing = () => {
  return (
    <div className="OurLaundryServiceContainer">
      <p>Our Services</p>

      <div className='OurLaundryServiceCards'>
        <div className='OurLaundryServiceCard'>
          <div className='OurLaundryServiceImage'>
            <img
              src="/images/image 207.png"
              alt=""
              className="OurLaundryServiceCardImage"
            />
          </div>
          <p className='OurLaundryServiceCardText'>Wash and Fold</p>
        </div>
        <div className='OurLaundryServiceCard'>
          <div className='OurLaundryServiceImage'>
            <img
              src="/images/image 208.png"
              alt=""
              className='OurLaundryServiceCardImage'
            />
          </div>
          <p className='OurLaundryServiceCardText'>Iron and Fold</p>
        </div>
        <div className='OurLaundryServiceCard'>
          <div className='OurLaundryServiceImage'>
            <img
              src="/images/image 153.png"
              alt=""
              className='OurLaundryServiceCardImage'
            />
          </div>
          <p className='OurLaundryServiceCardText'>Dry clean</p>
        </div>
        <div className='OurLaundryServiceCard'>
          <div className='OurLaundryServiceImage'>
            <img
              src="/images/image 155.png"
              alt=""
              className="OurLaundryServiceCardImage"
            />
          </div>
          <p className='OurLaundryServiceCardText'>Household clean</p>
        </div>
      </div>
    </div>
  );
}
