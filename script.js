function firstWord(s) {
  // your code here
	s = s.trim();
    let word = "";
    for(let ch of s) {
        if(ch === ' '){
            return word;
        }
        word += ch;
    }
    return s;
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
