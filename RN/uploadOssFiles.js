
// 图片上传  使用 react-native-image-picker

// 页面 :

uploadImage = () => {
  const { list, files } = this.state;
  RNImagePicker.showImagePicker(options, response => {
    console.log('Response = ', response);
    if (response.didCancel) {
      console.log('User cancelled photo picker');
    } else if (response.error) {
      console.log('ImagePicker Error: ', response.error);
    } else if (response.customButton) {
      console.log('User tapped custom button: ', response.customButton);
    } else {
      this.props.dispatch({
        type: 'remote/uploadOssFiles',
        payload: [{ ...response }],
        callback: (res = []) => {
          console.log(res);
        },
      });
    }
  });
};


// effect :
uploadOssFiles = ({ payload, callback }) => {
  // 目前仅支持单个照片上传
  const proArr = payload.map(async subitem => {
    const fileUri = ossupload(subitem);
    return fileUri;
  });
  const data = yield Promise.all(proArr, ret => ret);
  callback && callback(data);
}


// oss.js

import { NativeModules, Platform } from 'react-native';
const { PushNative = {} } = NativeModules;
const bucketname = 'xxxxxxxxfile';
// bucketname 是全局唯一的，尽量保证你的bucketname不与别人的重复
export const uploadOssFile = file => {
  const { uri = '', path = '' } = file;
  if (Platform.OS === 'ios') {
    // ios和Android的文件目录不一样，所以分别传uri和path 
    PushNative.uploadImage(uri, bucketname, 'ios_12345678')
      .then(s => console.log(s, '@@@'))
      .catch(err => {
        console.log(err);
      });
  } else {
    PushNative.compressImage(path)
      .then(s => PushNative.uploadImage(s, bucketname, 'android_12371823'))
      .catch(err => {
        console.log(err);
      });
  }
};
