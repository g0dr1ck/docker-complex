import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import OtherPage from './OtherPage';
import Fib from './Fib'

function App() {
  return (
    <Router>
      <div className="App">
      <header className="App-header">
      <h1 className="App-title">Fib Application</h1>
      <Link to="/">Home</Link>
      <Link to="/otherpage">Otherpage</Link>
        <div>
          <Route exact path="/" component={Fib} />
          <Route path="/otherpage" component={OtherPage} />
        </div>
        
        
      </header>
    </div>
    </Router>
    
  );
}

export default App;
