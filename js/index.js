var PREFIXES = [
  'mis',
  'pre',
  'a',
  'acro',
  'act',
  'ambi',
  'ana',
  'anim',
  'auto',
  'bio',
  'col',
];

var ROOTS = [
  'chrono',
  'dict',
  'gen',
  'mand',
  'phil',
  'script',
  'photo',
  'phono',
  'terr',
  'vac'
];

var SUFFIXES = [
  'acy',
  'al',
  'dom',
  'er',
  'ed',
  'ist',
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