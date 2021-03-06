import './Chatbox.scss';
import SendIcon from '@material-ui/icons/Send';
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAlt';
import { useState } from 'react';
import App from './App';

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
    <App> 
        <div className="App col-12">
            <div className="App-chatroom">
                {
                lines.map(x => {
                    return  <div className="App-chatroom-text chat-right">
                            {x}
                            </div>
                })
                }
            </div>
            <div className="App-textbox">
                <div className="icon"><SentimentSatisfiedAltIcon fontSize="large" /></div>
                <input type="text" className="App-textbox-input" value={text} onChange={onTextChange} onKeyPress={keyPress}/>
                <div className="App-textbox-send" onClick={onSend}><SendIcon /></div>
            </div>
        </div>
    </App> 
  );
}

export default Chatbox;
