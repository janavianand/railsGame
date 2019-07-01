import React from "react"
import {BrowserRouter,Switch,Route,Link} from 'react-router-dom'

import Home from './Home'
import Play from './Play'
import {Provider} from 'react-redux'
import store from '../store/index'

class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <BrowserRouter>
        <nav>
          <Link to='/'><pre>Home</pre></Link>
          <Link to='/play'><pre>Play</pre></Link>
        </nav>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/play' component={Play}/>
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App
