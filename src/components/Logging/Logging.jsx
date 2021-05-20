import React from 'react';
import './index.css';

const Logging = (props) => {
  const { log } = props;
  return(
    <div>
        <h1> Hover squares </h1>
        {
          log && log.map(item => (
            <div className='appear'>
              <div className='text'>
                 row {
                   item.row
                  }
                </div>
              
              <div className='text'>
                col {
                  item.column
                }
                </div>
              
            </div>
          ))
        }
      </div>
  )
}

export default Logging;