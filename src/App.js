import logo from './logo.svg';
import './App.css';
import CityInfo from './components/cityInfo/CityInfo';
import CityPhotos from './components/cityPhotos/CityPhotos';
import AnotherLandmarks from './components/anotherLandmarks/AnotherLandmarks';
import FamousLandmark from './components/famousLandmark/FamousLandmark';
import NavBar from './components/navBar/NavBar';
import { HashRouter, BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
//Не срабатывает default в switch
// const NotFound = () => <div>Not found</div>
// const NotFoundRedirect = () => <Redirect to='/not-found' />
// Route component={NotFoundRedirect} />

// Не работают meta propertys

function App() {
  // const NotFoundRedirect = () => <Redirect to='/not-found' />
  return (
    <HashRouter>
      <div className=''>
        <div>
          <NavBar />
        </div>
        {/* <Switch> */}
          <Route path='/info' component={CityInfo} />
          <Route path='/famous-landmark' component={FamousLandmark} />
          <Route path='/landmarks' component={AnotherLandmarks} />
          <Route path='/photos' component={CityPhotos} />
          {/* <Route component={NotFoundRedirect} />
        </Switch> */}
      </div>
    </HashRouter>
  );
}

export default App;
