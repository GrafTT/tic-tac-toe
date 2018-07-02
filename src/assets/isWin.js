export const winOn3x3 = (cells) => {
  let win;
  if (
    (cells[0] === 'X' && cells[1] === 'X' && cells[2] === 'X') ||
    (cells[0] === 'X' && cells[3] === 'X' && cells[6] === 'X') ||
    (cells[0] === 'X' && cells[4] === 'X' && cells[8] === 'X') ||
    (cells[1] === 'X' && cells[4] === 'X' && cells[7] === 'X') ||
    (cells[2] === 'X' && cells[5] === 'X' && cells[8] === 'X') ||
    (cells[3] === 'X' && cells[4] === 'X' && cells[5] === 'X') ||
    (cells[6] === 'X' && cells[7] === 'X' && cells[8] === 'X') ||
    (cells[2] === 'X' && cells[4] === 'X' && cells[6] === 'X')
  ) {
    win = 'X'
  } else if (
    (cells[0] === '0' && cells[1] === '0' && cells[2] === '0') ||
    (cells[0] === '0' && cells[3] === '0' && cells[6] === '0') ||
    (cells[0] === '0' && cells[4] === '0' && cells[8] === '0') ||
    (cells[1] === '0' && cells[4] === '0' && cells[7] === '0') ||
    (cells[2] === '0' && cells[5] === '0' && cells[8] === '0') ||
    (cells[3] === '0' && cells[4] === '0' && cells[5] === '0') ||
    (cells[6] === '0' && cells[7] === '0' && cells[8] === '0') ||
    (cells[2] === '0' && cells[4] === '0' && cells[6] === '0')
  ) {
    win = '0'
  } else {
    win = 'Draw';
  }
  return win;
}

export const winOn4x4 = (cells) => {
  let win;
  if (
    (cells[0] === 'X' && cells[1] === 'X' && cells[2] === 'X') ||
    (cells[1] === 'X' && cells[2] === 'X' && cells[3] === 'X') ||
    (cells[4] === 'X' && cells[5] === 'X' && cells[6] === 'X') ||
    (cells[5] === 'X' && cells[6] === 'X' && cells[7] === 'X') ||
    (cells[8] === 'X' && cells[9] === 'X' && cells[10] === 'X') ||
    (cells[9] === 'X' && cells[10] === 'X' && cells[11] === 'X') ||
    (cells[12] === 'X' && cells[13] === 'X' && cells[14] === 'X') ||
    (cells[13] === 'X' && cells[14] === 'X' && cells[15] === 'X') ||
    (cells[0] === 'X' && cells[4] === 'X' && cells[8] === 'X') ||
    (cells[4] === 'X' && cells[8] === 'X' && cells[12] === 'X') ||
    (cells[1] === 'X' && cells[5] === 'X' && cells[9] === 'X') ||
    (cells[5] === 'X' && cells[9] === 'X' && cells[13] === 'X') ||
    (cells[2] === 'X' && cells[6] === 'X' && cells[10] === 'X') ||
    (cells[6] === 'X' && cells[10] === 'X' && cells[14] === 'X') ||
    (cells[3] === 'X' && cells[7] === 'X' && cells[11] === 'X') ||
    (cells[7] === 'X' && cells[11] === 'X' && cells[15] === 'X') ||
    (cells[0] === 'X' && cells[5] === 'X' && cells[10] === 'X') ||
    (cells[5] === 'X' && cells[10] === 'X' && cells[15] === 'X') ||
    (cells[3] === 'X' && cells[6] === 'X' && cells[9] === 'X') ||
    (cells[3] === 'X' && cells[9] === 'X' && cells[12] === 'X')
  ) {
    win = 'X'
  } else if (
    (cells[0] === '0' && cells[1] === '0' && cells[2] === '0') ||
    (cells[1] === '0' && cells[2] === '0' && cells[3] === '0') ||
    (cells[4] === '0' && cells[5] === '0' && cells[6] === '0') ||
    (cells[5] === '0' && cells[6] === '0' && cells[7] === '0') ||
    (cells[8] === '0' && cells[9] === '0' && cells[10] === '0') ||
    (cells[9] === '0' && cells[10] === '0' && cells[11] === '0') ||
    (cells[12] === '0' && cells[13] === '0' && cells[14] === '0') ||
    (cells[13] === '0' && cells[14] === '0' && cells[15] === '0') ||
    (cells[0] === '0' && cells[4] === '0' && cells[8] === '0') ||
    (cells[4] === '0' && cells[8] === '0' && cells[12] === '0') ||
    (cells[1] === '0' && cells[5] === '0' && cells[9] === '0') ||
    (cells[5] === '0' && cells[9] === '0' && cells[13] === '0') ||
    (cells[2] === '0' && cells[6] === '0' && cells[10] === '0') ||
    (cells[6] === '0' && cells[10] === '0' && cells[14] === '0') ||
    (cells[3] === '0' && cells[7] === '0' && cells[11] === '0') ||
    (cells[7] === '0' && cells[11] === '0' && cells[15] === '0') ||
    (cells[0] === '0' && cells[5] === '0' && cells[10] === '0') ||
    (cells[5] === '0' && cells[10] === '0' && cells[15] === '0') ||
    (cells[3] === '0' && cells[6] === '0' && cells[9] === '0') ||
    (cells[3] === '0' && cells[9] === '0' && cells[12] === '0')
  ) {
    win = '0'
  } else {
    win = 'Draw';
  }
  return win;
}