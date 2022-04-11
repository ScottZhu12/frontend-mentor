import React from 'react';
import { Form, Field } from 'react-final-form';

import { imgPath } from '../App';

interface myFormValues {
  bill?: string;
  people?: string;
}

const TipMain = (): JSX.Element => {
  const onSubmit = (formValues: myFormValues): void => {
    console.log(formValues);
  };

  const validate = (formValues: myFormValues): {} => {
    const errors: myFormValues = {};

    if (Number(formValues.bill) <= 0)
      errors.bill = 'cannot be negative or zero';

    if (Number(formValues.people)) errors.people = 'cannot be negative or zero';

    return errors;
  };

  const renderInput = ({
    input,
    meta,
    label,
  }: {
    input: any;
    meta: any;
    label: string;
  }) => {
    return (
      <div className='form-input'>
        <img src={`${imgPath}/images/icon-person.svg`} alt='icon person' />
        <label htmlFor={label} className='heading heading--label'>
          {label}
        </label>
        <input
          className='tip-main-input'
          type='text'
          {...input}
          autoComplete='off'
          placeholder='0'
        />
      </div>
    );
  };

  const renderError = ({ meta }: { meta: any }) => {
    console.log(meta);
  };

  const renderForm = (handleSubmit: any) => {
    return (
      <form onSubmit={handleSubmit} className='form'>
        <Field name='bill' component={renderInput} label='Bill' />

        <div className='form-tip-container'>
          <h2 className='heading heading--tip-selection'>Select Tip %</h2>
          <div className='form__btn-group'>
            <button type='submit' className='btn btn--tip-selection'>
              5%
            </button>
            <button type='submit' className='btn btn--tip-selection'>
              10%
            </button>
            <button type='submit' className='btn btn--tip-selection'>
              15%
            </button>
            <button type='submit' className='btn btn--tip-selection'>
              25%
            </button>
            <button type='submit' className='btn btn--tip-selection'>
              50%
            </button>
            <div className='btn btn--tip-selection btn--tip-selection--custom'>
              <Field name='customTip' component='input' placeholder='Custom' />
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

export default TipMain;
