import React from 'react';
import {BrowserRouter,Route,Link} from 'react-router-dom';
import Dashboard from '../dashboard/index.js';
import Landing from '../landing/index.js';

class App extends React.Component{
  render(){
    return(
      <div className='app'>
        <BrowserRouter>
          <div>
            <nav>
              <ul>
                <li><Link to="/">Landing</Link></li>
                <li><Link to="../dashboard/index">Dashboard</Link></li>
              </ul>
            </nav>
            <Route exact path='/' component={Landing}/>
            <Route exact path='/dashboard/index' component={Dashboard}/>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
