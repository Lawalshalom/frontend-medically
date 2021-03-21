import avatar from '../../images/quick-access/symptoma.svg';

console.log(avatar);

export const userProfile = {
  firstName: 'Default',
  lastName: 'User',
  email: 'example@gmail.com',
  phone: '0914029358',
  dob: '01-03-1900',
  genotype: 'AA',
  bloodGroup: 'O+',
  gender: 'female',
  avatar,
};

export const PROFILE_FORM_PLACEHOLDERS = {
  FIRST_NAME: 'First Name',
  LAST_NAME: 'Last Name',
  EMAIL: 'Email',
  PHONE: 'Phone Number',
  DATE_OF_BIRTH: 'Date of Birth',
  BLOOD_GROUP: 'Blood Group (Optional)',
  GENOTYPE: 'Genotype (Optional)',
  GENDER: 'Gender',
  SAVE: 'Update',
};
