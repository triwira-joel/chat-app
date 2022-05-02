import React, { Component } from "react";
import "./App.scss";
import { connect, sendMsg } from "./api";
import Header from "./components/Header/Header.jsx";
import ChatHistory from "./components/ChatHistory/ChatHistory";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chatHistory: []
    }
  }

  componentDidMount() {
    connect((msg) => {
      console.log("New Message")
      this.setState(prevState => ({
        chatHistory: [...this.state.chatHistory, msg]
      }))
      console.log(this.state);
    });
  }

  send() {
    console.log("hello");
    sendMsg("hello");
  }

  render() {
    return (
      <div className="App">
        <Header />
        <ChatHistory chatHistory={this.state.chatHistory} />
        <ChatHistory />
        <button onClick={this.send}>Hit</button>
      </div>
    );
  }
}

export default App;