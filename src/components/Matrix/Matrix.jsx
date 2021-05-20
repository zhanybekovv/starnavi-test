import React, {useState, useEffect} from 'react';
import Row from '../Row';
import Logging from '../Logging';
import {makeMatrix} from '../makeMatrix';
import './index.css';


const Matrix = (props) => {
  const { field, start } = props;
  const [log, setLog] = useState([]);
  useEffect(() => setLog([]), [start])
  return(
    <div style={{display: 'flex', flexDirection: 'row'}}>
      <div className="matrix" style={{marginRight: '50px'}}>
        {makeMatrix(field, Row, setLog, log, start)}
      </div>
      <Logging log={log} />
    </div>
  )
}

export default Matrix;