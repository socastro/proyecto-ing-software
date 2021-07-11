import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import { Route, Switch } from 'react-router'
import { BrowserRouter as Router } from 'react-router-dom'
import Header from "./components/Header";
import form from './pages/formPage';
import account from './pages/account';
import maquinas from './pages/maquinas';
import Footer from "./components/Footer";


const routing = (
  <Router>
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/inscripcion" component={form} />
        <Route exact path="/maquinas" component={maquinas} />
        <Route exact path="/cuenta" component={account} />
      </Switch>
      <Footer />
    </div>
  </Router>
);

ReactDOM.render(
 routing,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
