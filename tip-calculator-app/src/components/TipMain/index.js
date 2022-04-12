import React from 'react';
import { Form, Field } from 'react-final-form';
import { connect } from 'react-redux';

import { imgPath } from '../App';
import { calculateTip } from '../../actions';

const TipMain = (props) => {
  const onSubmit = (formValues) => {
    formValues.customTip = '';
  };

  const validate = (formValues) => {
    const errors = {};

    if (Number(formValues.bill) <= 0)
      errors.bill = 'cannot be negative or zero';

    if (Number(formValues.people) <= 0)
      errors.people = 'cannot be negative or zero';

    return errors;
  };

  const renderInput = ({ input, meta, label }) => {
    const className = meta.error ? 'tip-main-input-error' : '';

    return (
      <div className='form-input'>
        <img src={`${imgPath}/images/icon-person.svg`} alt='icon person' />
        <label htmlFor={label} className='heading heading--label'>
          {label}
        </label>
        <input
          className={`tip-main-input tip-main-input-${input.name} ${className}`}
          type='text'
          {...input}
          autoComplete='off'
          placeholder='0'
        />
        {renderError(meta.error)}
      </div>
    );
  };

  const renderCustomTip = ({ input, inputOnChange }) => {
    const inputProps = {
      ...input,
      onChange: (e) => {
        input.onChange(e);
        inputOnChange && inputOnChange(e);
      },
    };

    return (
      <React.Fragment>
        <input
          type='text'
          placeholder='Custom'
          autoComplete='off'
          className='custom-input'
          {...inputProps}
        />
      </React.Fragment>
    );
  };

  const handleChange = (e) => {
    const btnList = document.querySelectorAll('.btn--tip-selection');
    for (let btn of btnList) {
      btn.classList.remove('btn--tip-selection-active');
    }

    setTimeout(() => {
      if (!e.target.value) return;

      const bill = Number(document.querySelector('.tip-main-input-bill').value);
      const percent = parseInt(e.target.value) / 100;
      const people = Number(
        document.querySelector('.tip-main-input-people').value
      );
      props.dispatch(calculateTip(bill, percent, people));
    }, 1000);
  };

  const renderError = (err) => {
    return <div className='input-error'>{err}</div>;
  };

  const onClick = (e) => {
    const bill = Number(document.querySelector('.tip-main-input-bill').value);
    const percent = parseInt(e.target.innerText) / 100;
    const people = Number(
      document.querySelector('.tip-main-input-people').value
    );

    const btnList = document.querySelectorAll('.btn--tip-selection');
    for (let btn of btnList) {
      btn.classList.remove('btn--tip-selection-active');
    }

    e.target.classList.add('btn--tip-selection-active');

    if (!bill || !percent || !people) return;

    props.dispatch(calculateTip(bill, percent, people));
  };

  const renderForm = (handleSubmit) => {
    return (
      <form onSubmit={handleSubmit} className='form'>
        <Field name='bill' component={renderInput} label='Bill' />

        <div className='form-tip-container'>
          <h2 className='heading heading--tip-selection'>Select Tip %</h2>
          <div className='form__btn-group'>
            <button
              type='submit'
              className='btn btn--tip-selection'
              onClick={(e) => {
                onClick(e);
              }}
            >
              5%
            </button>
            <button
              type='submit'
              className='btn btn--tip-selection'
              onClick={(e) => {
                onClick(e);
              }}
            >
              10%
            </button>
            <button
              type='submit'
              className='btn btn--tip-selection'
              onClick={(e) => {
                onClick(e);
              }}
            >
              15%
            </button>
            <button
              type='submit'
              className='btn btn--tip-selection'
              onClick={(e) => {
                onClick(e);
              }}
            >
              25%
            </button>
            <button
              type='submit'
              className='btn btn--tip-selection'
              onClick={(e) => {
                onClick(e);
              }}
            >
              50%
            </button>
            <div className='btn btn--tip-selection btn--tip-selection--custom'>
              <Field
                name='customTip'
                component={renderCustomTip}
                inputOnChange={handleChange}
              />
            </div>
          </div>
        </div>

        <Field name='people' component={renderInput} label='Number of People' />
      </form>
    );
  };

  return (
    <div className='tip-main'>
      <Form
        onSubmit={onSubmit}
        validate={validate}
        render={({ handleSubmit }) => renderForm(handleSubmit)}
      />
    </div>
  );
};

export default connect()(TipMain);
