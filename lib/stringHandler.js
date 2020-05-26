export function removeDashes(string) {
  string = string.split("-").join("");
  return string;
}

export function findIndices(str, char) {
  return str.split('').reduce((indices, letter, index) => {
    letter === char && indices.push(index);
    return indices;
  }, [])
}

export function checkIfNumber(letter) {
  const integer = parseInt(letter);
  if (integer) {
    if (!isNaN(integer)) {
      return true;
    }
  }
  return false;
}