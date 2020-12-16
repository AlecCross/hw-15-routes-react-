import logo from './logo.svg';
import './App.css';
import CityInfo from './components/cityInfo/CityInfo';
import CityPhotos from './components/cityPhotos/CityPhotos';
import AnotherLandmarks from './components/anotherLandmarks/AnotherLandmarks';
import FamousLandmark from './components/famousLandmark/FamousLandmark';
import NavBar from './components/navBar/NavBar';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
      </div>
      <div>
        <Route path='/info' component={CityInfo} />
        <Route path='/famous-landmark' component={FamousLandmark} />
        <Route path='/landmarks' component={AnotherLandmarks} />
        <Route path='/photos' component={CityPhotos} />
      </div>
    </BrowserRouter>
  );
}

export default App;
