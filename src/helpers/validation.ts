export const nameValidation = {
  required: 'Name is required',
  pattern: {
    value: /^[A-Za-z\s'-]+$/,
    message: 'Please enter a valid name',
  },
  minLength: {
    value: 2,
    message: 'Name must be at least 2 character long',
  },
  maxLength: {
    value: 50,
    message: 'Name must be at most 50 characters long',
  },
};

export const emailValidation = {
  required: 'Email is required',
  pattern: {
    value: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
    message: 'Please enter a valid email',
  },
  minLength: {
    value: 6,
    message: 'Email must be at least 6 characters long',
  },
  maxLength: {
    value: 100,
    message: 'Email must be at most 100 characters long',
  },
};

export const passwordValidation = {
  required: 'Password is requred',
  minLength: {
    value: 7,
    message: 'Password must be at least 7 characters long',
  },
};

export const validationPages = {
  required: 'This field is required.',
  pattern: {
    value: /^(([1-4][0-9]{0,3})|([1-9][0-9]{0,2})|(5000))$/,
    message: 'Value must be a number from 1 to 5000',
  },
};

export const validatePageNumber = (
  value: string,
  totalPages: number | undefined,
) => {
  const parsedValue = parseInt(value, 10);

  if (isNaN(parsedValue) || parsedValue < 1) {
    return 'Please enter a valid number.';
  }
  if (totalPages && parsedValue > totalPages) {
    return `You cannot enter a value greater than the number of pages.`;
  }
  return true;
};
