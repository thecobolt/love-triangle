
module.exports = function getLoveTrianglesCount(preferences = []) {
  let sum = 0;
  for (let i = 0; i < preferences.length; i++) {
    const x = preferences[preferences[preferences[i] - 1] - 1] === i + 1;
    const y = i + 1 !== preferences[i];
    if( x && y) {
      sum++;
    }
  }
  return sum / 3;
};
