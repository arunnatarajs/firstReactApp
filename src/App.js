import './App.css';
import {BrowserRouter as Router,Route} from "react-router-dom";

import Home from './components/Home';
import Commit from './components/Commit';


function App() {
  return (
   <Router>
     <Route path="/home" component={Home} />

     <Route path="/repositories/:owner/:repository/commits/:oid" component={Commit}/>

     
    </Router>
  );
}

export default App;
