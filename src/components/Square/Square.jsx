import React, {useState, useEffect} from 'react';
import './index.css';

const Square = (props) => {
  const { row, column, setLog, log, start } = props;
  const [entered, setEntered] = useState(false);
  useEffect(() => {
    setEntered(false)
  }, [start])

  const handleOnHover = (log, setLog) => {
    if(!entered){
      const newArr = [...log];
      newArr.push({row, column});
      setLog(newArr);
      setEntered(!entered);
    } else if (entered) {
      log.pop();
      const newArr = [...log];
      setLog(newArr)
      setEntered(!entered);
    } 
  }
  return(
    <div className="square" style={{backgroundColor: entered ? 'blue' : 'white'}} onMouseEnter={() => handleOnHover(log, setLog)}/>
  )
};

export default Square;