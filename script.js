//your code here
// const evaluatedText = document.getElementById("evaluatedText");
// const letterCount = document.getElementById("letterCount");

// evaluatedText.addEventListener("input", function() {
//   const text = evaluatedText.value;
//   const count = text.length;
//   letterCount.textContent = count;
// });
const evaluatedText = document.getElementById("evaluatedText");
const letterCount = document.getElementById("letterCount");

const countLetters = (text) => {
  let count = 0;
  for (let i = 0; i < text.length; i++) {
    if (text[i] !== " ") {
      count++;
    }
  }
  return count;
};

evaluatedText.addEventListener("input", function() {
  const text = evaluatedText.value;
  const count = countLetters(text);
  letterCount.textContent = count;
});
