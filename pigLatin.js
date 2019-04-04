// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples:
//  pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
//  pigIt('Hello world !');     // elloHay orldway !



// my solution:
function pigIt(str){ 
  const pigPhrase = []
  str.split(" ").forEach(word => {
    const pigWord = word.split("")
    const ltr1 = pigWord.shift()
    if (ltr1 !== "?" && ltr1 !== "!") {
      pigWord.push(ltr1 + "ay")
      pigPhrase.push(pigWord.join(""))
    } else {
      pigWord.push(ltr1)
      pigPhrase.push(pigWord.join(""))
    }
  })
  return pigPhrase.join(" ")
}

// way cleaner version I found after my solution using regex

function pigIt(str){
  return str.replace(/(\w)(\w*)(\s|$)/g, "\$2\$1ay\$3")
}
