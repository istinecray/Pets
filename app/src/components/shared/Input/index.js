import React from 'react';
import PropTypes from 'prop-types';

const Input = ({name, placeholder, type, onChange}) => {
  return (
    <input type={type}
      className="form-control mb-3"
      placeholder={placeholder}
      onChange={onChange} />
  );
}

Input.propTypes = {
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.oneOf([
    'text',
    'number',
    'password'
  ]),
  onChange: PropTypes.func.isRequired
}

export default Input;