export interface IListCard {
  imageUrl: string;
  title: string;
  author: string;
  _id: string;
  recommend: boolean;
  handlerClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}
