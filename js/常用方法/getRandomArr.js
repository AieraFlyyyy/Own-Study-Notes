// 随机从数组中抽取不重复元素
getRandomArr = (data, num) => {
  const tmpArr = this.getArrRandomly(data);
  let arr = [];
  for (let i = 0; i < num; i++) {
    arr.push(tmpArr[i]);
  };
  this.setState({ arr });
}


const test = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7];

  const randomListA = getArrRandomly(arr, 3);      //[1,6,5]
  const randomListB = getArrRandomly(arr, 3);      //[4,2,7]

}
