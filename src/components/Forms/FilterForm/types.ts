export interface IFilterForm {
  title: string;
  author: string;
}

export interface IFilterFormProps {
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}
