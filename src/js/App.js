import './App.css';

import Header from './containers/Header/index';
import MainBanner from './components/Banner/index';
import MainStoresBar from './components/MainStoresBar/index';
import Solutions from './components/Solutions/index';
import MeetUs from './components/MeetUs/index';
import Contact from './components/Contact/index';

function App() {
  return (
    <div className="App">
      <Header />
      <MainBanner />
      <MainStoresBar />
      <Solutions />
      <MeetUs />
      <Contact />
    </div>
  );
}

export default App;
