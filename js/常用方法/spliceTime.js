
//  import  getDateTime
const spliceTime = (createTime, format = 'YYYY-MM-DD', start, end) => {
  if (createTime.length <= 0 || !createTime[0]) {
    return {
      [start]: null,
      [end]: null,
    };
  }
  const aaa = createTime.map(v => {
    return getDateTime(v, format);
  });
  return {
    [start]: getDateTime(aaa[0], format),
    [end]: getDateTime(aaa[1], format),
  };
};

// Use:  
// const timeList = [DateA,DateB];
// const formatDate = 'YYYY-MM-DD';
// const startTimeApi = 传给后端的api;
// const endTimeApi = 传给后端的api;
// spliceTime(timeList,formatDate,startTimeApi,endTimeApi);

const test = () => {

  // <FormItem label={"订单创建日期"}>      
  //   {getFieldDecorator('createTime', {
  //     initialValue: createTime,
  //   })(
  //     <RangePicker showToday={true} format={formatDate} />
  //   )}
  // </FormItem>

  // ant design 使用Form表单时，监听的RangerPicker 获得的参数为两个Date格式的数组

  form.validateFieldsAndScroll((err, filter) => {
    if (!err) {
      const { createTime, ...rest } = filter;
      const create = spliceTime(commentTime, formatDate, 'commentStartTime', 'commentEndTime');
      this.getList({ ...rest, ...create });
    }
  });
}