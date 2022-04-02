import React from 'react';
import { Form, Field } from 'react-final-form';
import { connect } from 'react-redux';

import { fetchUser } from '../../actions';

const imgPath = process.env.PUBLIC_URL;

const SearchBar = (props) => {
  const onSubmit = (formValues) => {
    props.fetchUser(formValues.userName);
  };

  const validate = (formValues) => {
    const errors = {};

    if (!formValues.userName) {
      errors.userName = 'You must enter an user name';
    }

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
          data-theme={localStorage.getItem('theme')}
        />
        {renderError(meta)}
      </div>
    );
  };

  const renderError = ({ touched, error }) => {
    if (touched && error) {
      return (
        <div className='error'>
          <div className='heading heading--error'>{error}</div>
        </div>
      );
    }
  };

  const userNotFound = () => {
    if (props.userReducer.error) {
      return <React.Fragment>No results</React.Fragment>;
    }

    return null;
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

            <button
              type='submit'
              className='btn heading heading--btn'
              data-theme={localStorage.getItem('theme')}
            >
              Search
            </button>
            <div className='heading heading--error user-not-found'>
              {userNotFound()}
            </div>
          </form>
        )}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return { userReducer: state.userReducer, themeReducer: state.themeReducer };
};

export default connect(mapStateToProps, { fetchUser })(SearchBar);
