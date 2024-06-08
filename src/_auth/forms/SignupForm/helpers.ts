import Notiflix from 'notiflix';
import { NavigateFunction } from 'react-router-dom';

export const showSuccessNotification = (navigate: NavigateFunction) => {
  Notiflix.Report.success(
    'You have successfully registered',
    'Сlick Ok to log in',
    'Ok',
    function cb() {
      navigate('/sign-in');
    },
    {
      backOverlay: false,
    }
  );
};

export const showErrorNotification = (error: string) => {
  Notiflix.Report.failure('Error', error, 'Ok', {
    backOverlay: false,
  });
};
