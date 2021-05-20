import axios from 'axios';
import React, {useState, useEffect} from 'react';
import Matrix from './components/Matrix';
import Picker from './components/Picker';


const App = () => {
  const [start, setStart] = useState(false);
  const [fields, setFields] = useState();
  const [selected, setSelected] = useState();

  useEffect(() => {
    axios.get('http://demo1030918.mockable.io/').then((res) => {
      setFields(res.data);
      setSelected(res.data.easyMode.field) 
    }).catch((e) => console.log('error', e))
  }, []);
  return (
    <div style={{marginLeft: '50px'}}>
      <Picker 
        fields={fields} 
        selected={selected} 
        setSelected={setSelected} 
        setStart={setStart}
        start={start}
      />
      <Matrix field={selected} start={start}/>
    </div>
  );
}

export default App;
