export interface IFirebaseUserCredentials {
  displayName?: string;
  first_name?: string;
  last_name?: string;
  genotype?: string;
  email?: string;
  phone?: string;
  uid?: string;
  blood_group?: string;
  date_of_birth?: string;
  gender?: GenderTypes;
}

export enum GenderTypes {
  Male = 'male',
  Female = 'female',
  Other = 'other',
  None = '',
}
