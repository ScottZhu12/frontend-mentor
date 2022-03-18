import React from 'react';
import { Form, Field } from 'react-final-form';

const imgPath = process.env.PUBLIC_URL;

const SearchBar = (props) => {
  const onSubmit = (formValues) => {
    console.log(formValues);
  };

  const validate = (formValues) => {
    const errors = {};

    if (!formValues.userName) errors.userName = 'You must enter an user name';

    return errors;
  };

  const renderInput = ({ input, meta }) => {
    const className = `field ${
      meta.error && meta.touched ? 'field-error' : ''
    }`;

    return (
      <div className={className}>
        <label htmlFor='userName'>
          <img src={`${imgPath}/assets/icon-search.svg`} alt='search icon' />
        </label>
        <input
          className='paragraph paragraph--input-field'
          {...input}
          autoComplete='off'
          placeholder='Search GitHub username'
        />
        {renderError(meta)}
      </div>
    );
  };

  const renderError = ({ error, touched }) => {
    if (touched && error) {
      return (
        <div className='error'>
          <div className='heading heading--error'>
            You must enter an user name
          </div>
        </div>
      );
    }
  };

  return (
    <div className='search-bar'>
      <Form
        // initialValues={props.initialValues}
        onSubmit={onSubmit}
        validate={validate}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit} className='search-bar__form'>
            <Field name='userName' component={renderInput} />
            <button type='submit' className='btn heading heading--btn'>
              Search
            </button>
          </form>
        )}
      />
    </div>
  );
};

export default SearchBar;
