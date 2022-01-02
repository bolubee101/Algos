const odd_one_out = (arr) => {

  var evens = [];
  var odds = [];
  for (var i = 0; i < arr.length; i++) {
    if ((arr[i] % 2) == 0) {
      evens.push(arr[i]);
    }
    else {
      odds.push(arr[i]);
    }
  }
  var elen = evens.length;
  var olen = odds.length;

  if (elen > olen) {
    return odds[0];
  }
  else {
    return evens[0];
  }

}

console.log(odd_one_out([19, 5, 42, 1, 77]))