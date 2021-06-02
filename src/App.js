import './App.css';
import { Router } from '@reach/router';
import Homepage from './components/HomePage';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import About from './components/About';
import Account from './components/Account';
import IndexPage from './components/IndexPage';
import ShoeId from './components/ShoeId';

function App() {
  return (
    <div className="App">
      <Router>
        <Homepage default />
        <SignIn path='/signin' />
        <SignUp path='/signup' />
        <About path='/about' />
        <Account path='/account' />
        <IndexPage path='/index' />
        <ShoeId path='/sneakers/:sneaker_id' />
      </Router>
    </div>
  );
}

export default App;
