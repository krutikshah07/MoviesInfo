import React, { Component } from 'react';

import './App.css';
import {HashRouter as Router ,Route} from 'react-router-dom'

import {Provider} from 'react-redux'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LandingComponent  from './components/LandingComponent'
import store from './redux/store'
import SingleMovie from './components/SingleMovie';
import { render } from '@testing-library/react';

class App extends Component {
    render() {
  return (
  
     
        <Provider store={store}>
          <Router>
            <div>
     <Navbar />
    <Route exact path="/" component={LandingComponent} />
    <Route exact path="/movie/:id" component= {SingleMovie} />
     <Footer />
     </div>
     </Router>
     </Provider>
    

  );
    }
}

export default App;
