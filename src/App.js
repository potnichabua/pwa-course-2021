import './App.css';

function App() {
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
          Line2
        </div>
      </div>
      <div className="App-textbox">
        <input type="text" className="App-textbox-input"/>
        <div className="App-textbox-send">Send!</div>
      </div>
    </div>
  );
}

export default App;
