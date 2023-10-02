let words = ["hello", "world"];

function getWordLengths(words) {
  let letter = words.split("");
  return letter.length
}

const result = words.map(getWordLengths);

console.log(result); // Output: [5, 5]
