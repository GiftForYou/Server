let util = {};

util.arrangeData = a => {
  function compare(a, b) {
    if (a.priority === undefined) {
      return -1;
    }
    if (a.priority < b.priority) return -1;
    if (a.priority > b.priority) return 1;
    return 0;
  }

  function shuffle(a) {
    for (let i = a.length; i; i--) {
      let j = Math.floor(Math.random() * i);
      [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
    return a;
  }

  let arr = shuffle(a);

  arr = arr.sort(function(a, b) {
    return b.priority - a.priority;
  });

  if (arr.length > 5) {
    console.log("dipotong");
    arr = arr.slice(0, 5);
  } else if (arr.length < 5) {
    arr[0].rand = 5 - arr.length;
  }

  while (arr.length < 5) {
    arr.unshift(arr[0]);
  }

  console.log(arr);
  return arr;
};

module.exports = util;
