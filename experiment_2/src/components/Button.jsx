import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const ButtonBasic = () => {
  return (
    <>
      <Button variant="outlined" size="small">Small</Button>
      <Button variant="outlined" size="medium">Medium</Button>
      <Button variant="outlined" size="large">XL</Button>

      <TextField
        variant="outlined"
        label="Outlined"
        id="outlined-basic"
      />
    </>
  );
};

export default ButtonBasic;
