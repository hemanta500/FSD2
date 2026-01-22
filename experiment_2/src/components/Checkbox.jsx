import { useState } from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

const CheckboxComponent = () => {
  const [state, setState] = useState({
    checkedA: false,
    checkedB: true,
    checkedC: false,
  });

  const handleChange = (e) => {
    const { name, checked } = e.target;
    setState(prev => ({ ...prev, [name]: checked }));
  };

  return (
    <FormGroup>
      <FormControlLabel
        label="Option A"
        control={
          <Checkbox
            name="checkedA"
            checked={state.checkedA}
            onChange={handleChange}
          />
        }
      />

      <FormControlLabel
        label="Option B"
        control={
          <Checkbox
            name="checkedB"
            checked={state.checkedB}
            onChange={handleChange}
          />
        }
      />

      <FormControlLabel
        label="Option C"
        control={
          <Checkbox
            name="checkedC"
            checked={state.checkedC}
            onChange={handleChange}
          />
        }
      />
    </FormGroup>
  );
};

export default CheckboxComponent;
