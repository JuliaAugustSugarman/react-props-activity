import React, { Component } from 'react';
import Header from '../Header/Header';
// import EnterNumber from '..EnterNumber/EnterNumber'
// import CurrentTotal from '../CurrentTotal/CurrentTotal';
// import History from '../History/History';

class App extends Component {
  State = {
    currentTotal: 0,
  }


//input box
handleAddNumberChange = (propertyName) => (event) => {
  console.log('Handle input working');
  
}


  //buttons
  handleAddChange = (event) => {
    console.log('Add Number Handle Clicked');
    
  }

  handleSubtractChange = (event) => {
    console.log('Subtract Number Handle Clicked');
    
  }

  render() {
    return (
      <div >
        <Header />
          <button onClick={this.handleAddChange}>UP</button>

        <input
          placeholder="Enter Number"
          type="number"
          // value={this.state.newStar.starDiameter}
          onChange={this.handleAddNumberChange}
        />

          <button onClick={this.handleSubtractChange}>DOWN</button>
      </div>
     
    );
  }
}//end class component

export default App;
