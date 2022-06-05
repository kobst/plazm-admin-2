import logo from './logo.svg';
import './App.css';

import SearchForm from './components/SearchForm';

function App() {
  return (
    <div className="App">
      <header className="header">
      <h4 >plazm admin</h4>
      {/* <button className="sign-out" onClick={signOut}>Sign out</button> */}
      </header>
      {/* <div className="App-header"> */}
      <div>
      <SearchForm/>
      </div>
    </div>
  );
}

export default App;
