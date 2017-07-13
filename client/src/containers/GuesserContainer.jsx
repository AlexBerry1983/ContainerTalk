import React from 'react';
import GuesserForm from '../components/GuesserForm';
import io from 'socket.io-client';

class GuesserContainer extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      question: null
    };

    this.socket = io();
    this.socket.on("game", ( question ) => { this.setState( {question: question}) });

    this.submitForm = this.submitForm.bind(this);
    this.questionKeyUp = this.questionKeyUp.bind(this);
  }

  questionKeyUp(event){
    this.setState({
      question: event.target.value
    })
  }

  submitForm(event){
    event.preventDefault();
    if (this.state.question) {
      let currentQuestion = this.state.question;
      this.socket.emit("game", currentQuestion)
    }
  };

  render() {
    return (
      <div>I am a guesser container
        <GuesserForm 
          questionKeyUp={this.questionKeyUp}
          onSubmit={this.submitForm} 
          />
          {this.state.question}
      </div>
      )
  }

}

export default GuesserContainer