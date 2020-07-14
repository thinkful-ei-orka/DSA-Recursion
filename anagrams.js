let storeAnagram = [];

function anagram(pre, str) {
  if (str.length < 2) {
    console.log(`Pre: ${pre}, Str: ${str}`);
    storeAnagram.push(pre + str);
    return pre + str;
  }

  for (let i = 0; i < str.length; i++) {
    anagram(pre + str.charAt(i), str.substring(0, i) + str.substring(i + 1));
  }
}

anagram('', 'abc');
console.log(storeAnagram);
