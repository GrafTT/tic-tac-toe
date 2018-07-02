export const changePlayer = () => {
  return {
    type: 'CHANGE_PLAYER',
  }
}

export const board3x3 = (id) => {
  return {
    type: 'CLICK_ON_CELL_B_9',
    id,
  }
}

export const board4x4 = (id) => {
  return {
    type: 'CLICK_ON_CELL_B_16',
    id,
  }
}

export const changeBoard = () => {
  return {
    type: 'CHANGE_BOARD',

  }
}

export const clear = () => {
  return {
    type: 'CLEAR',

  }
}