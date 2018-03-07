var PREFIXES = [
  'mis',
  'pre',
  'a',
  'acro',
  'act',
  'ambi',
  'de',
  'en',
  'extra',
  'hyper',
  'inter',
  'mono',
  'micro',
  'post',
  'trans',
  'sub',
  'non',
  'ex',
  'auto',
  'bio',
  'dis',
  'anti',
  'un',
  'trey',
];

var ROOTS = [
  'poop',
  'fart',
  'oreo',
  'scapple',
  'brooks',
  'scooper',
  'football',
  'fantasy',
  'chocolate',
  'keaton',
  'purvey',
  'boo',
  'underwear',
  'king',
  'champ',
  'ebron',
  'decker',
  'eifert',
  'taco',
  'fudge',
  'handsome',
  'bonjour',
  'withstand',
  'arizona',
  'gump',
  'incred',
  'snack',
  'grammar',
  'griz',
  'ver',
  'foot',
];

var SUFFIXES = [
  'ly',
  'eur',
  'ers',
  'dom',
  'ified',
  'er',
  'boo',
  'ed',
  'ist',
  'acy',
  'ism',
  'ize',
  'esque',
  'less',
  'ful',
  'y',
  'ical',
  'ity',
  'ment',
  'ness',
  'ship',
  'tion',
  'sion',
  'ate',
  'ify',
  'able',
];


function generateJasonism() {
  var prefix = PREFIXES[Math.floor(Math.random() * PREFIXES.length)]

  var root = ROOTS[Math.floor(Math.random() * ROOTS.length)]

  var suffix = SUFFIXES[Math.floor(Math.random() * SUFFIXES.length)]

  var jason = document.getElementById('jasonism');

  jason.innerHTML = prefix + root + suffix;
}

var button = document.getElementById('jason-button');

button.onclick = function() { generateJasonism(); }
