import { Report } from 'notiflix';
import { NavigateFunction } from 'react-router-dom';

export const showBookReadMessage = (navigate: NavigateFunction | void) => {
  Report.success(
    'The book is read',
    'It was an exciting journey, where each page revealed new horizons, and the characters became inseparable friends.',
    'Okay',
    function handlerClick() {
      navigate && navigate('/library');
    },
    {
      backOverlay: false,
    },
  );
};
