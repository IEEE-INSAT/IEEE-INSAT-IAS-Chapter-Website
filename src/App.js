import './App.scss';
import Home from './pages/Home';
import FixedBackg from './components/FixedBackg';
import AboutUs from './pages/AboutUs';

function App() {
  return (
    <div className="App">
      <FixedBackg/>
      {/* <Home/> */}
      <AboutUs/>
    </div>
  );
}

export default App;
