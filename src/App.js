import React, { Component } from 'react'
import './App.css';
// import LightBulbApp from './components/LightBulbApp/LightBulbApp'
// import InputsEventsApp from './components/InputsEventsApp/InputsEventsApp'
// import MadlibApp from './components/MadlibApp/MadlibApp'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import mockCats from './mockCats'
import Home from './pages/Home'
import CatIndex from './pages/CatIndex'
import CatShow from './pages/CatShow'
import CatNew from './pages/CatNew'
import CatEdit from './pages/CatEdit'
import NotFound from './pages/NotFound'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cats: mockCats
    };
  }

  render() {
    return (
      <Router>
        <Switch>
          {/* Home */}
          <Route exact path="/" component={ Home } />
          {/* Index */}
          <Route path="/catindex" component={ CatIndex } />
          {/* Show */}
          <Route path="/catshow/:id" component={ CatShow } />
          {/* New */}
          <Route path="/catnew" component={ CatNew } />
          {/* Edit */}
          <Route path="/catedit/:id" component={ CatEdit } />
          <Route component={ NotFound }/>
        </Switch>
      </Router>
    );
  }
}

export default App;
