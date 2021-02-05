import './App.css';

import MainBanner from './components/Banner/index';
import Header from './containers/Header/index';

function App() {
  return (
    <div className="App">
      <Header />
      <MainBanner />
    </div>
  );
}

export default App;
