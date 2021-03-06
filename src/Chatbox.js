import './Chatbox.scss';
import SendIcon from '@material-ui/icons/Send';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAlt';
import { useState } from 'react';
import { Link } from 'react-router-dom'

function Chatbox() {

  const [text, setText] = useState("");
  const [lines, setLines] = useState([]);

  const onTextChange = (event) => {
    setText(event.target.value);
  }

  const onSend = () => {
    setLines([...lines, text]);
    setText("");
  };

  const keyPress = (event) => {
    console.log("hello");
    if (event.which === 13) {
      onSend();
    }
  }

  return (
    <div className="App col-6">
      <Link to="/friend-list">
         <ArrowBackIcon />
      </Link>
      <div className="App-header">
        Onion
      </div>
      <div className="App-chatroom">
        {
          lines.map(x => {
            return  <div className="App-chatroom-text chat-right">
                      {x}
                    </div>
          })
        }
        {/* <div className="App-chatroom-text chat-left">
          Baba
        </div> */}
      </div>
      <div className="App-textbox">
        <div className="icon"><SentimentSatisfiedAltIcon fontSize="large" /></div>
        <input type="text" className="App-textbox-input" value={text} onChange={onTextChange} onKeyPress={keyPress}/>
        <div className="App-textbox-send" onClick={onSend}><SendIcon /></div>
      </div>
    </div>
  );
}

export default Chatbox;
