export interface IBookObj {
  imageUrl: string;
  title: string;
  author: string;
  recommend: boolean;
  totalPages: number;
  _id: string;
}

export interface IUserInfo {
  name: string;
  password: string;
  email: string;
}
