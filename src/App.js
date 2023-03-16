import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textClicked: false
    };

  }

  //handler goes here
  changeText(){
    this.setState(state =>({
      textClicked: !state.textClicked
    }));
  }

  render() {
    const {text} = this.state

    return (
      <div>
        <p>Greetings!</p>
          <button label = "aButton" onClick = {() => {this.changeText(text)}}>
            {this.state.textClicked ? "thanks!" : "click me"}
          </button>
      </div>
    );
  }
}
