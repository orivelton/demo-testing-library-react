import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../assets/scss/Checklist.scss';

export default function Checklist({ options }) {
  const [checked, setchecked] = useState(0);

  const handleCheck = ({ target }) => {
    target.checked ? setchecked(prev => prev + 1) : setchecked(prev => prev - 1);
  }

  return (
    <div className="checklist">
      {
        options.map(item => (
          <div key={item} className="checkbox-group">
            <input id={item} type="checkbox" name={item} value={item} onChange={handleCheck}/>
            <label htmlFor={item}>{item}</label>
          </div>
        ))
      }
      < hr />
      <p>
        Total: <input type="number" value={checked} disabled />
      </p>
    </div>
    
  )
};

Checklist.propTypes = {
  options: PropTypes.array.isRequired
};
