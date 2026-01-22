import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import CheckboxComponent from './Checkbox';
import RatingComponent from './Rating';

const About = () => {
  return (
    <Box sx={{ p: 2 }}>
      <h2>About Page</h2>

      <section>
        <h3>Checkboxes:</h3>
        <CheckboxComponent></CheckboxComponent>
      </section>
    </Box>
  );
};

export default About;
