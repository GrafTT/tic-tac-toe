const initialState = {
  isX: true,
  cells_9: Array(9).fill(null),
  cells_16: Array(16).fill(null),
  isSmallBoard: true,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_PLAYER':
      return {
        ...state,
        isX: !state.isX
      }
    case 'CLICK_ON_CELL_B_9':
      const newCells_9 = state.cells_9.slice();
      if (state.isX) {
        newCells_9[action.id] = 'X'
        return {
          ...state,
          cells_9: newCells_9
        };
      } else {
        newCells_9[action.id] = '0'
        return {
          ...state,
          cells_9: newCells_9
        };
      }
    case 'CLICK_ON_CELL_B_16':
      const newCells_16 = state.cells_16.slice();
      if (state.isX) {
        newCells_16[action.id] = 'X'
        return {
          ...state,
          cells_16: newCells_16
        };
      } else {
        newCells_16[action.id] = '0'
        return {
          ...state,
          cells_16: newCells_16
        };
      }
    case 'CHANGE_BOARD':
      return {
        ...state,
        isSmallBoard: !state.isSmallBoard
      }
    case 'CLEAR':
      const emptyCells_9 = state.cells_9.map(cell => {
        cell = null;
        return cell;
      });
      const emptyCells_16 = state.cells_16.map(cell => {
        cell = null;
        return cell;
      })
      return {
        ...state,
        cells_9: emptyCells_9,
        cells_16: emptyCells_16
      }
    default:
      return state;
  }
}