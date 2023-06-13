import React from 'react';

import './SelectDropdown.css';
import '../../bootstrap-custom.css'


export const SelectDropdown: React.FC = () => {

  return (
    <article>

      <div className="card" style={{ width: '18rem' }}>
        <div className="card-body">
          <h5 className="card-title">Select & Dropdown title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </article>
  );
};
