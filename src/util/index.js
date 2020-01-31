var uniqueOccurrences = function(arr) {
  let hash = {};

  arr.forEach(num => (hash[num] = (hash[num] || 0) + 1));
  //console.log('HASH', hash);
  const val = Object.values(hash).sort((a, b) => a - b);

  for (let i = 0; i < val.length - 1; i++) {
    if (val[i] === val[i + 1]) return false;
  }
  return true, hash;
};

// console.log(
//   uniqueOccurrences([
//     'Javascript',
//     'Python',
//     'Javascript',
//     'Python',
//     'Python',
//     'Node'
//   ])
// );
