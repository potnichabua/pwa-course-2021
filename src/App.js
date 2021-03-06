import './App.scss';
import SendIcon from '@material-ui/icons/Send';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAlt';
import { Link } from 'react-router-dom'
import Chatbox from './Chatbox';

function App() {
  return (
    <div className="App col-6">
    <Link to="/friend-list">
       <ArrowBackIcon />
    </Link>
    <div className="App-header">
      Onion
    </div>
    <div className="App-content">
      <Chatbox />
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
