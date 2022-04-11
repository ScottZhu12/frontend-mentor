import React from 'react';

const TipSub = (): JSX.Element => {
  return (
    <div className='tip-sub'>
      <div className='tip-sub__show'>
        <div className='tip-sub__show-text'>
          <h3 className='heading heading--tip-sub__show'>
            <span>Tip Amount</span> <br />
            <span>/ person</span>
          </h3>
        </div>

        <div className='paragraph paragraph--tip-sub__show tip-sub__show-number'>
          $0.00
        </div>
      </div>

      <div className='tip-sub__show'>
        <div className='tip-sub__show-text'>
          <h3 className='heading heading--tip-sub__show'>
            <span>Total</span> <br />
            <span>/ person</span>
          </h3>
        </div>

        <div className='paragraph paragraph--tip-sub__show tip-sub__show-number'>
          $0.00
        </div>
      </div>

      <button className='btn btn--reset'>RESET</button>
    </div>
  );
};

export default TipSub;
