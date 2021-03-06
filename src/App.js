import './App.scss';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Link } from 'react-router-dom'

function App({children}) {

  return (
    <div className="App col-6">
      <div className="App-header">
        <Link to="/friend-list">
          Friend List
        </Link>

        <Link to="/friend-list">
          Profile
        </Link>

        <Link to="/friend-list">
          Chatbox
        </Link>

    </div>
    <div className="App-content">
      {children}
    </div>
  </div>
  );
}

/*
<div className="App col-6">
  <div className="App-header">
    <Link to="/friend-list">
      <button>
        <ArrowBackIcon />
        Friend List
      </button>
    </Link>  
  </div>
  <div className="App-content">
  <Chatbox />
  </div>
</div>
*/
export default App;
