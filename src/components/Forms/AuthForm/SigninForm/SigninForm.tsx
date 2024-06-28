import { FC } from 'react';
import {
  Form,
  Button,
  InputsWrapper,
  StyledLink,
  WrapperButton,
} from './styled';
import { useAppDispatch } from '../../../../hooks/reduxHooks';
import { loginUserThunk } from '../../../../redux/auth/thunk';
import { useForm } from 'react-hook-form';
import StandardInput from '../../../Inputs/StandardInput';
import PasswordInput from '../../../Inputs/PasswordInput';
import {
  emailValidation,
  passwordValidation,
} from '../../../../helpers/validation';
import { ILoginInfo } from '../../../../types/data';
import { useAppSelector } from '../../../../hooks/reduxHooks';
import { CircularProgress } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { handlerError } from '../helpers';

const SigninForm: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const isLoading = useAppSelector(state => state.auth.isLoading);
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    watch,
  } = useForm<ILoginInfo>({
    mode: 'onChange',
    defaultValues: {
      email: 'kaka2132424W@i.ua',
      password: '1234567',
    },
  });

  const submit = (data: ILoginInfo) => {
    dispatch(loginUserThunk(data))
      .unwrap()
      .then(() => {
        navigate('/');
      })
      .catch(error => {
        handlerError(error);
      });
  };

  return (
    <Form onSubmit={handleSubmit(submit)}>
      <InputsWrapper>
        <StandardInput
          type="email"
          register={register}
          validation={emailValidation}
          errors={errors}
          value={watch('email')}
          placeholder="Email"
        />

        <PasswordInput
          type="password"
          register={register}
          validation={passwordValidation}
          errors={errors}
          value={watch('password')}
          placeholder="password"
        />
      </InputsWrapper>

      <WrapperButton>
        <Button disabled={!isValid || isLoading} type="submit">
          {isLoading ? <CircularProgress size={30} /> : 'Log In'}
        </Button>
        <StyledLink to="/sign-up">Don’t have an account? </StyledLink>
      </WrapperButton>
    </Form>
  );
};

export default SigninForm;
