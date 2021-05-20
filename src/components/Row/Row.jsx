import React from 'react';
import Square from '../Square';
import {makeRow} from '../makeMatrix';
import './index.css';



const Row = (props) => {
  const { field, row, setLog, log, start } = props;
  return(
    <div className="row_main">
      {makeRow(field, row, Square, setLog, log, start)}
    </div>
  )
}


export default Row;