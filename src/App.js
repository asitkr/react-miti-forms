import { Box, Container, CssBaseline, Paper } from '@mui/material';
import LinearStepper from './components/LinearStepper';

function App() {
  return (
    <div>
      <CssBaseline />
      <Container component={Box} p={4}>
        <Paper component={Box} p={3}>
          <LinearStepper />
        </Paper>
      </Container>
    </div>
  );
}

export default App;
