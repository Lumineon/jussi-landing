import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';

import LandingPage from './pages/LandingPage'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <LandingPage />
      </div>
    </ThemeProvider>
  );
}

export default App;
