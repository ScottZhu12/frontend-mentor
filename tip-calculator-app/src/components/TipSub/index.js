import React from 'react';
import { connect } from 'react-redux';

import { reset } from '../../actions';

const TipSub = (props) => {
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
          {`$${props.tip.totalTip}`}
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
          {`$${props.tip.meanTip}`}
        </div>
      </div>

      <button
        className='btn btn--reset'
        onClick={() => {
          document.querySelector('.tip-main-input-bill').value = '';
          document.querySelector('.custom-input').value = '';
          document.querySelector('.tip-main-input-people').value = '';

          const btnList = document.querySelectorAll('.btn--tip-selection');
          for (let btn of btnList) {
            btn.classList.remove('btn--tip-selection-active');
          }

          props.dispatch(reset());
        }}
      >
        RESET
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    tip: state.tipReducer,
  };
};

export default connect(mapStateToProps)(TipSub);
