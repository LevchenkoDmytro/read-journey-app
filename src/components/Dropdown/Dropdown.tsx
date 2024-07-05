import { FC, useEffect, useState } from 'react';
import { MenuItem, SelectChangeEvent } from '@mui/material';
import { useAppDispatch } from '../../hooks/reduxHooks';
import { getLibraryBooksThunk } from '../../redux/books/thunk';
import { StyledFormControl, StyledSelect, dropdownMenuStyle } from './styled';
import svg from '../../assets/sprite.svg';
import { IDropdownProps } from './type';

const Dropdown: FC<IDropdownProps> = ({ setCurrentPage }) => {
  const dispatch = useAppDispatch();
  const [filterStatus, setFilterStatus] = useState('All books');

  useEffect(() => {
    dispatch(
      getLibraryBooksThunk(
        filterStatus === 'All books' ? '' : filterStatus.toLowerCase(),
      ),
    );
  }, [filterStatus]);

  const handlerChange = (event: SelectChangeEvent<unknown>) => {
    setCurrentPage(1);

    const value = event.target.value as string;
    setFilterStatus(value);
  };

  return (
    <>
      <StyledFormControl>
        <StyledSelect
          value={filterStatus}
          onChange={handlerChange}
          MenuProps={dropdownMenuStyle}
          // IconComponent={
          //   <svg>
          //     <use href={svg + '#icon-eye-off'}></use>
          //   </svg>
          // }
        >
          <MenuItem value={'Unread'}>Unread</MenuItem>
          <MenuItem value={'In-progress'}>In progress</MenuItem>
          <MenuItem value={'Done'}>Done</MenuItem>
          <MenuItem value={'All books'}>All books</MenuItem>
        </StyledSelect>
      </StyledFormControl>
    </>
  );
};

export default Dropdown;
