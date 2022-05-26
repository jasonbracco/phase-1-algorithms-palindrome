function isPalindrome(string) {
  const characterArray = string.split('')
  const reverseCharacterArray = [...characterArray].reverse()
  for (i = 0; i<characterArray.length;i++){
    if (characterArray[i] === reverseCharacterArray[i]){
      return true
    }
    else{
      return false
    }
  }
}

/* 
Create a function isPalindrome

Pass isPalindrome a string
split the characters of the word into an array

*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  //add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("mom"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("jasonisthebest"))
}

module.exports = isPalindrome;
