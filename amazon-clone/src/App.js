import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import Login from './components/Login';

function App() {
  return (
    <div className='app'>

      <Router>
        <Switch>

          <Route path='/'>
            <Header/>
            <Home />
          </Route>

          <Route path='/login'>
            <Login />
          </Route>

        </Switch>
      </Router>

    </div>
  )
}

export default App;
