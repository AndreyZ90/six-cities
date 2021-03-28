import React from 'react';
import PropTypes from 'prop-types';

const SignInInput = (props) => {
  const {type, label, onDataChange} = props;

  return (
    <div className="login__input-wrapper form__input-wrapper">
      <label className="visually-hidden">{label}</label>
      <input
        className="login__input form__input"
        type={type} name={type}
        placeholder={label}
        required
        value={type}
        onChange={(evt) => onDataChange(evt.target.name, evt.target.value)}
      />
    </div>
  );
};

SignInInput.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onDataChange: PropTypes.func.isRequired
};

export default SignInInput;
