export interface IBookObj {
  imageUrl: string;
  title: string;
  author: string;
  recommend: boolean;
  totalPages: number;
  _id: string;
}

export interface IRegistrationInfo {
  name: string;
  password: string;
  email: string;
}

export interface ILoginInfo {
  name: string;
  password: string;
  email: string;
}
