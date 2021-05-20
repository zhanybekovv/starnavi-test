import React, {useState} from 'react';
import './index.css';

const Picker = (props) => {
  const { fields, setSelected, selected, setStart, start } = props;
  const [state, setState] = useState(selected);
  const keys = fields && Object.keys(fields)
  const handleChange = (event) => {
    setState(event.target.value)
  };

  const handleSubmit = (e) => {
    setSelected(state);
    setStart(!start);
    e.preventDefault();
  }


  return(
    <form onSubmit={(e) => handleSubmit(e)}>
        <label>
          <select value={state} onChange={(e) => handleChange(e)} className="custom-select">
            {
             keys && keys.map((item) => (
                <option value={fields[item].field}>{item}</option>
              ))
            }
          </select>
        </label>
        <input type="submit" value="START" className="button"/>
      </form>
  )
}

export default Picker;
