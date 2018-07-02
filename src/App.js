import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Board3x3 from './components/Board3x3';
import Board4x4 from './components/Board4x4';
import {connect} from 'react-redux';
import {changePlayer, board3x3, board4x4, changeBoard, clear} from './store/actions/actions';
import {winOn3x3, winOn4x4} from './assets/isWin'

import './App.css';


class App extends Component {
  
  clickToggle = (id) => {
    if(this.props.isSmallBoard){
      this.props.dispatch(board3x3(id));
    }
    this.props.dispatch(board4x4(id));
    this.props.dispatch(changePlayer());
  }

  winnerHandler = ()=>{
    if(this.props.isSmallBoard){
      const cells_9 = this.props.cells_9;
      return winOn3x3(cells_9);
    }else{
      const cells_16 = this.props.cells_16;
      return winOn4x4(cells_16);
    }
  }

  clearBoard = ()=>{
    this.props.dispatch(clear())
  }

  changeBoardButton = () => {
    this.props.dispatch(changeBoard())
    this.clearBoard();
  }
  render() {

    let win = this.winnerHandler();

    return (
      <div className="App">
        <h1>Next turn: {this.props.isX ? 'X' : '0'}</h1>
        <button onClick={this.changeBoardButton}>Change Board</button>
        {this.props.isSmallBoard ? (
          <div className="board3x3">
            <Board3x3 cells={this.props.cells_9} onClick={this.clickToggle}/>
          </div>
        ) : (
          <div className="board4x4">
            <Board4x4 cells={this.props.cells_16} onClick={this.clickToggle}/>
          </div>
        )}
        <button onClick={this.clearBoard}>Clear</button>
        <h2>Winner: {win}</h2>
      </div>
      
    );
  }
}

const mapStateToProps = state=>{
  return {
    cells_9: state.cells_9,
    cells_16: state.cells_16,
    isX: state.isX,
    isSmallBoard: state.isSmallBoard,
  }
}

App.propTypes = {
  cells_9: PropTypes.array.isRequired,
  cells_16: PropTypes.array.isRequired,
  isX: PropTypes.bool.isRequired,
  isSmallBoard: PropTypes.bool.isRequired
}

export default connect(mapStateToProps)(App);
