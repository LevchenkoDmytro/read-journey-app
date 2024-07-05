import ListCard from '../ListCard';
import { Grid } from './styled';
import { IBookListProps } from './types';

const BookList = ({
  books,
  setCurrentBook,
  setIsShowModal,
}: IBookListProps) => {

  const handlerClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    const bookId = event.currentTarget?.dataset.id;
    const book = books.find(({ _id }) => bookId === _id) || null;

    setIsShowModal(true);
    setCurrentBook(book);
  };
  
  return (
    <Grid>
      {books?.map(({ _id, author, imageUrl, title, recommend }) => (
        <ListCard
          key={_id}
          _id={_id}
          imageUrl={imageUrl}
          author={author}
          title={title}
          recommend={recommend}
          handlerClick={handlerClick}
        />
      ))}
    </Grid>
  );
};

export default BookList;
