import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './Components/Home/Home';
import Search from './Components/Search/Search';
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/' exact>
          <Redirect to='/home' />
        </Route>
        <Route path='/home' exact>
          <Home />
        </Route>
        <Route path='/search'>
          <Search />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
