import { Stack } from '@mui/material';
import './App.css';
import Home from './routers/Home';


function App() {
  return (
    <Stack spacing={2} direction="row">
      <div>
        <Home/>
      </div>
    </Stack>
  );
}

export default App;
