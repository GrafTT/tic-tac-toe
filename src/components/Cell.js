import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';

const Cell = ({onClick, cell}) => {

  return (
    <div className='cell' onClick={onClick}>
      {cell}
    </div>
  )
}

Cell.propTypes = {
  onClick: PropTypes.func.isRequired,
  cell: PropTypes.oneOf(['X', '0', null])
}

export default Cell;