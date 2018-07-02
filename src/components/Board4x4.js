import React from 'react';
import PropTypes from 'prop-types';
import Cell from './Cell';

const Board4x4 = ({cells, onClick}) => {
  return (
    <React.Fragment>
      {cells.map((cell, i)=><Cell key={i} num={i} onClick={()=>onClick(i)} cell={cell}/>)}
    </React.Fragment>
  )
}

Board4x4.propTypes = {
  cells: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Board4x4;