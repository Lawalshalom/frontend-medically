import { Upload, message } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { RcFile, UploadChangeParam } from 'antd/lib/upload';
import { UploadFile } from 'antd/lib/upload/interface';
import { useState } from 'react';
import { classes } from '../../../shared/constants';

function getBase64(img: RcFile, callback: Function) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

function beforeUpload(file: RcFile) {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJpgOrPng && isLt2M;
}

const Avatar = () => {
  const [loading, setLoadng] = useState(false);
  const [imgUrl, setImgUrl] = useState('');

  const handleChange = (info: UploadChangeParam<UploadFile<any>>) => {
    if (info.file.status === 'uploading') {
      setLoadng(true);
      return;
    }
    if (info.file.status === 'done') {
      // get image url from backend
      getBase64(
        info.file.originFileObj,
        (imgUrl: React.SetStateAction<string>) => {
          setLoadng(false);
          setImgUrl(imgUrl);
        }
      );
    }
  };

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div className={classes.mt4}>Upload</div>
    </div>
  );
  return (
    <Upload
      name="avatar"
      listType="picture-card"
      className="avatar-uploader"
      showUploadList={false}
      beforeUpload={beforeUpload}
      onChange={handleChange}
    >
      {imgUrl ? <img src={imgUrl} alt="avatar" /> : uploadButton}
    </Upload>
  );
};
export default Avatar;
