import React from 'react';

export const Radio = props => (
  <div className="form-group">
    <div className="radio">
      <label>
        <input type="radio" value="yes" {...props} />
        Yes
      </label>
    </div>
    <div className="radio">
      <label>
        <input type="radio" value="no" {...props} />
        No
      </label>
    </div>
  </div>
);
