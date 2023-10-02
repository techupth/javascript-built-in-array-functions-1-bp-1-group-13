let words = ["apple", "cat", "dog", "elephant"];

function get5CharWords(words) {
  let letter = words.split("")
  let count = letter.length;
  if(count >= 5){
    return words
  }
}

const result = words.filter(get5CharWords);

console.log(result); // Output: ["apple", "elephant"]
