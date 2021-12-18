import React, {useState} from 'react';
import TextField from '@mui/material/TextField';

function InputTextField() {

    const [ContentValue, setContentValue] = useState(""); 
    const onContentChange = (event) => { 
      setContentValue(event.currentTarget.value); 
    }; 
    console.log(ContentValue); 

    return ( 
      <div> 
        <form onSubmit> 
          <div> 
          <TextField
            id="outlined-multiline-static"
            label="내용"
            multiline
            maxRows={4}
            defaultValue=""
          />
          </div> 
          <button onClick>작성</button> 
        </form> 
      </div> 
    ); 
  } 
  
  export default InputTextField;