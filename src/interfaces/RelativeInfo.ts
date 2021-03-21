export interface IRelativeInfo {
  first_name: string;
  last_name: string;
  genotype: string;
  blood_group: string;
  date_of_birth: string;
  gender: GenderTypes;
}

export interface IProfileInfo {
  first_name: string;
  last_name: string;
  genotype: string;
  email: string;
  uid?: string;
  phone: string;
  blood_group: string;
  date_of_birth: string;
  imageSrc: string;
  gender: GenderTypes;
}

export enum GenderTypes {
  Male = 'male',
  Female = 'female',
  Other = 'other',
  None = '',
}
