// pair programmed with liuming, sunny, justin

const wordSearch = (letters, word) => { 
    let newArray = transpose(letters);
    const horizontalJoin = letters.map(ls => ls.join(''))
    //console.log(letters[1].reverse());
    let reverseArray = [];
    for (letter of letters) {
        reverseArray.push(letter.reverse());
        console.log(reverseArray);
    } const backwardsArray = reverseArray.map(ls => ls.join(''))
    for (b of backwardsArray) {
        if (b.includes(word)) return true;
    }
    for (l of horizontalJoin) {
        if (l.includes(word)) return true
    } const verticalJoin = newArray.map(ls => ls.join(''))
    for (f of verticalJoin) {
        if (f.includes(word)) return true
    }
    return false;
}

const transpose = matrix => {
    let newMatrix = [];
    for (let row in matrix[0]) {
      let newRow = [];
      for (let col in matrix) {
        newRow.push(matrix[col][row]);
      }
      newMatrix.push(newRow);
    }
    return (newMatrix);
  };
  
module.exports = wordSearch