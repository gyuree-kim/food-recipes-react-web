import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function InputTextField() {
  const [value, setValue] = React.useState('Controlled');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '50ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="outlined-multiline-static"
          label="Title"
          multiline
          maxRows={4}
          defaultValue=""
        />
        <TextField
          id="outlined-multiline-static"
          label="Ingredients"
          multiline
          rows={4}
          defaultValue=""
        />
        <TextField
          id="outlined-multiline-static"
          label="Steps"
          multiline
          rows={4}
          defaultValue=""
        />
        <TextField
          id="outlined-multiline-static"
          label="Tips"
          multiline
          rows={4}
          defaultValue=""
        />
      </div>
    </Box>
  );
}
