import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './pages/Home/Home/Home';
import Dashboard from './pages/Dashboard/Dashboard/Dashboard';
import Login from './pages/Login/Login/Login';
import Register from './pages/Login/Register/Register';
import ExploreAllProducts from './pages/ExploreAllProducts/ExploreAllProducts';
import AuthProvider from './contexts/AuthProvider';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/allProducts">
              <ExploreAllProducts />
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route exact path="/Login">
              <Login />
            </Route>
            <Route exact path="/register">
              <Register />
            </Route>
          </Switch>
        </Router >
      </AuthProvider>
    </div >
  );
}

export default App;
