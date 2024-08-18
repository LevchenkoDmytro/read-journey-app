export interface IState {
  recommendedBooks: IBook[];
  libraryBooks: IBook[];
  bookInfo: IBookInfo | null;
  readingStatus: string;
  totalPages: number;
  isLoading: boolean;
  error: string;
}

export interface IBook {
  imageUrl: string;
  title: string;
  author: string;
  recommend: boolean;
  totalPages: number;
  _id: string;
}

export interface IBookInfo extends IBook {
  owner: string;
  progress: [];
  status: string;
  timeLeftToRead: {
    hours: number;
    minutes: number;
    seconds: number;
  };
}

export interface IgetRecommendedBooksParams {
  currentPage: number;
  author: string;
  title: string;
  imageCount: number;
}

export interface IstartReadingBookParams {
  id: string | undefined;
  page: number | null;
}
