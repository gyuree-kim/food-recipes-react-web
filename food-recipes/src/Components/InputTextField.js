import React from 'react';
import TextField from '@mui/material/TextField';

function InputTextField() {

    return ( 
      <div> 
          <div> 
          <TextField
            id="outlined-required"
            multiline
            maxRows={4}
            defaultValue=""
            size='small'
            fullWidth
          />
          </div>
      </div> 
    ); 
  } 
  
  export default InputTextField;