const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

function titleIt(str) {
  const result = [];
  const words = str.split(" ");
  for (let i = 0; i < words.length; i++) {
    if (typeof words[i][0] === 'string') {
      const capFirst = words[i][0].toUpperCase();
      result.push(capFirst + words[i].slice(1));
    }
  }
  return result.join(" ");
}

const titleCased = () => {
  return tutorials.map(titleIt);
}