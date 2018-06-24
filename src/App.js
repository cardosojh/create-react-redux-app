import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { clickButton, onChangeValue } from './actions';
import './App.css';

import Custom from './Custom';

class App extends Component {
  
  state = {
    inputValue: ''
  };

  inputChange = event => {    
    this.setState({
      inputValue: event.target.value
    });
    
    this.props.onChangeValue(event.target.value);   
  }
  
  render() {

    const { 
      clickButton,
      newValue 
    } = this.props;

    return (
      <div className="App" style={{ paddingTop: '15px' }}>
        <input 
          onChange={this.inputChange}
          type='text' 
          value={this.state.inputValue}
          />
        <button onClick={() => clickButton(this.state.inputValue)}>
          Click me!
        </button>
        <h1>{newValue}</h1>
        <br />
        <br />
        <br />
        <Custom />
      </div>
    );
  }
}

const mapStateToProps = store => ({
  newValue: store.clickState.newValue,
  newValueChange: store.changeValueState.newValue
});

const mapDispatchToProps = dispatch => 
  bindActionCreators( { clickButton, onChangeValue}, dispatch );

export default connect(mapStateToProps, mapDispatchToProps) (App);