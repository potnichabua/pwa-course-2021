import './App.scss';
import SendIcon from '@material-ui/icons/Send';
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAlt';

function App() {
  const [text, setText] = useState("");
  const [lines, setLines] = useState([]);
  
  const onTextChange = (event) => {
    setText(event.target.value);
  };

  const onSend = () =>{
    setLines([...lines, text]);
    setText("");
  };

  const keyPress = (event) => {
    if (event.which === 13){
      onSend();
    }
  };

  return (
    <div className="App">
      <div className="App-header">
        Onion
      </div>
      <div className="App-chatroom">
        <div className="App-chatroom-text chat-right">
          Hello
        </div>
        <div className="App-chatroom-text chat-right">
          I'm Prikhom
        </div>
        <div className="App-chatroom-text chat-left">
          Baba
        </div>
      </div>
      <div className="App-textbox">
        <div className="icon"><SentimentSatisfiedAltIcon fontSize="large" /></div>
        <input type="text" className="App-textbox-input"/>
        <div className="App-textbox-send"><SendIcon /></div>
      </div>
    </div>
  );
}

export default App;
