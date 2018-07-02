import React from 'react';
import PropTypes from 'prop-types';
import Cell from './Cell';

const Board3x3 = ({cells, onClick}) => {
  return (
    <React.Fragment>
      {cells.map((cell, i)=><Cell key={i} num={i} onClick={()=>onClick(i)} cell={cell}/>)}
    </React.Fragment>
  )
}

Board3x3.propTypes = {
  cells: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired
}


export default Board3x3;