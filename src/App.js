import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import TodoMain from './components/TodoMain';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Router>
          {/* <Login  /> */}
          <Navbar />
          <Switch>
            <Route exact path='/home'>
              <Home />
            </Route>
            <Route exact path='/todomain'>
              <TodoMain />
            </Route>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='*' component={NotFound} />
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
