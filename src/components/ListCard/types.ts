export interface IListCard {
  imageUrl: string;
  title: string;
  author: string;
  _id: string;
  handlerClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}
