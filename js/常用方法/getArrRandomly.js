
//打乱答案顺序
getArrRandomly = (arr) => {
  var len = arr.length;
  for (var i = len - 1; i >= 0; i--) {
    var randomIndex = Math.floor(Math.random() * (i + 1));
    var itemIndex = arr[randomIndex];
    arr[randomIndex] = arr[i];
    arr[i] = itemIndex;
  }
  return arr;
}

const test = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7];

  const randomListA = getArrRandomly(arr);      //[2,3,1,6,5,4,7]
  const randomListB = getArrRandomly(arr);      //[4,2,3,5,1,7,6]

}
