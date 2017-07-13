import React from 'react';
import ChooserForm from '../components/ChooserForm';
import io from "socket.io-client";

class ChooserContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      answer: null
    };

    this.socket = io();
    this.socket.on("game", this.state.answer);

    this.submitForm = this.submitForm.bind(this);
    this.answerKeyUp = this.answerKeyUp.bind(this);
  }


  answerKeyUp(event){
    this.setState({
      answer: event.target.value
    });
  };

  submitForm(event){
    event.preventDefault();
    if (this.state.answer) {
      let currentAnswer = this.state.answer;

      this.socket.emit("game", currentAnswer)
    }
  };


  render() {
    return (
      <div>I am a chooser container
      <ChooserForm 
        answerKeyUp={this.answerKeyUp}
        onSubmit={this.submitForm}
      />
      {this.state.answer}
      </div>
    )
  };

}

export default ChooserContainer