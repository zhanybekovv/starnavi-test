export const makeRow = (value, row, Element, setLog, log, start) => {
  const res = [];
  for(let i = 0; i < value; i++){
    res.push(<Element key={i} row={row} column={i} setLog={setLog} log={log} start={start}/>);
  }
  return res
}

export const makeMatrix = (value, Element, setLog, log, start) => {
  const res = [];
  for(let i = 0; i < value; i++){
    res.push(<Element key={i} field={value} row={i} setLog={setLog} log={log} start={start}/>);
  }
  return res;
}