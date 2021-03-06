import './App.scss';
import { Link } from 'react-router-dom'

function App({children}) {

  return (
    <div className="App col-6">
      <div className="App-header">
        <Link to="/friend-list">
          <button>
            Friend List
          </button>
        </Link>

        <Link to="/Profile">
          <button>
            Profile
          </button>
        </Link>

        <Link to="/Chatbox">
          <button>
            Chatbox
          </button>
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
