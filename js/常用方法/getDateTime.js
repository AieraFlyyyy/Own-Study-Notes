const getDateTime = (date, format = 'YYYY-MM-DD') => {
  if (!date || !moment(date).isValid()) {
    return null;
  }
  return moment(date).format(format);
};

const test = () => {
  const timeA = 1551146624; //时间戳
  const timeB = new Date(); //Date 

  const dateTimeA = getDateTime(timeA, 'YYYY-MM-DD');  // 2019/2/26
  const dateTimeB = getDateTime(timeA, 'YYYY-MM-DD hh:mm:ss');  // 2019/2/26 10:3:44

  const dateTimeC = getDateTime(timeB, 'YYYY-MM-DD');  // 2019/2/26
  const dateTimeD = getDateTime(timeB, 'YYYY-MM-DD hh:mm:ss');  // 2019/2/26 10:7:23
}
