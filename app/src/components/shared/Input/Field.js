import React from 'react';
import PropTypes from 'prop-types';
import Input from 'components/shared/Input'
 
const Field = ({label, type, onChange}) => {
    return (
        <div className="row no-gutters">

          <div className="col-lg-2 col-md-3 col-sm-12 pr-3">
            <label className="p-2">
              {label}:
            </label>
          </div>

          <div className="col">
            <Input placeholder={label}
              type={type}
              onChange={onChange} />
          </div>

        </div>
    )
}

Field.propTypes = {
  label: PropTypes.string, 
  type: PropTypes.oneOf([
    'text',
    'number',
    'password'
  ]),
  onChange: PropTypes.func.isRequired
}

export default Field;