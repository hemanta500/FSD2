import { useState } from 'react';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';

const RatingComponent = () => {
  const [value, setValue] = useState(2);

  const handleChange = (_, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <section>
        <h3>Basic Rating</h3>
        <Rating value={5} onChange={handleChange} />
      </section>

      <section>
        <h3>Read-only Rating</h3>
        <Rating readOnly value={1} />
      </section>
    </Box>
  );
};

export default RatingComponent;
