import React from 'react';
import TextField from '@mui/material/TextField';

function InputTextField() {

    /*const [ContentValue, setContentValue] = useState(""); 
    const onContentChange = (event) => { 
      setContentValue(event.currentTarget.value); 
    };*/ 

    return ( 
      <div> 
        <form> 
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
        </form> 
      </div> 
    ); 
  } 
  
  export default InputTextField;