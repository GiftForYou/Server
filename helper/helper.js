let util = {};

util.arrangeData = a => {
  function shuffle(a) {
    for (let i = a.length; i; i--) {
      let j = Math.floor(Math.random() * i);
      [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
    return a;
  }

  while (a.length < 5) {
    a.unshift(a[0]);
  }

  return shuffle(a);
};

module.exports = util;
