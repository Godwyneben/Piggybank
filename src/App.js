import { BrowserRouter, Switch, Route } from 'react-router-dom';

// pages and Components
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Signup from './pages/signup/SignUp'
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/home">
            <Home />
          </Route>
          
          <Route exact path="/login">
            < Login />
          </Route>

          <Route exact path="/signup">
            < Signup />
          </Route>

        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
