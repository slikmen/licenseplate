export function removeDashes(string: string) {
    string = string.split("-").join("");
    return string;
  }
  
  export function findIndices(str: string, char: string) {
    return str.split('').reduce((indices: any, letter, index) => {
      letter === char && indices.push(index);
      return indices;
    }, [])
  }
  
  export function checkIfNumber(letter: string) {
    const integer = parseInt(letter);
    if (integer) {
      if (!isNaN(integer)) {
        return true;
      }
    }
    return false;
  }