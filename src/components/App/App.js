import React, { Component } from 'react';
import Header from '../Header/Header';
// import EnterNumber from '..EnterNumber/EnterNumber'
// import CurrentTotal from '../CurrentTotal/CurrentTotal';
// import History from '../History/History';

class App extends Component {
  State = {
    newNumber: {
      currentTotal: "0",
    }
  }

  //input box
  handleInputChange = (event) => {
    console.log(event.target.value);

  }//end handleInputChange


  //buttons

  handleAddChange = (event) => {
    console.log('Add Number Handle Clicked');

  }//handleAddChange

  handleSubtractChange = (event) => {
    console.log('Subtract Number Handle Clicked');

  }//handleSubtractChange



  render() {
    return (
      <div >
        <Header />
        <button onClick={this.handleAddChange}>UP</button>

        <input
          placeholder="Enter Number"
          type="number"
          // value={this.state.currentTotal}
          onChange={this.handleInputChange}
        />

        <button onClick={this.handleSubtractChange}>DOWN</button>

        <div>

          Current Total: {this.state.currentTotal}

        </div>

      </div>



    );
  }
}//end class component

export default App;
