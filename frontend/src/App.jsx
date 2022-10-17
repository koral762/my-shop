
import { HashRouter as Router, Route } from 'react-router-dom';
import { routes } from './routes.js';



import {NavBar} from './cmps/NavBar';
import './assets/styles/styles.scss';


function App() {
  return (
    <div className="App">
      <Router>
      <NavBar/>
        <main>
          {routes.map(route => <Route key={route.path} exact component={route.component} path={route.path} />)}
        </main>

      </Router>
    </div>
  );
}

export default App;
