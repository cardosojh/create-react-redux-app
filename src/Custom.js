import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

class Custom extends Component {
  
  render() {

    const { newValue, newValueCustom } = this.props;

    return (
      <div className="App" style={{ paddingTop: '10px' }}>        
        <h2>Atualizado via Click</h2>
        <h3>{newValue}</h3>
        <h2>Atualizado via onChange</h2>
        <h3>{newValueCustom}</h3>        
      </div>
    );
  }
}

const mapStateToProps = store => ({
  newValue: store.clickState.newValue,
  newValueCustom: store.changeValueState.newValueCustom
});

export default connect(mapStateToProps) (Custom);