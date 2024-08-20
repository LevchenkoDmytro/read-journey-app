import {
  Form,
  Button,
  InputsWrapper,
  StyledLink,
  WrapperButton,
} from './styled';
import { useAppDispatch } from '../../../hooks/reduxHooks';
import { loginUserThunk } from '../../../redux/auth/thunk';
import { useForm } from 'react-hook-form';
import AuthInput from '../../Inputs/AuthInput';
import PasswordInput from '../../Inputs/PasswordInput';
import {
  emailValidation,
  passwordValidation,
} from '../../../helpers/validation';
import { IUserInfo } from '../../../types/data';
import { useAppSelector } from '../../../hooks/reduxHooks';
import { CircularProgress } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const SigninForm = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const isLoading = useAppSelector(state => state.auth.isLoading);
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    watch,
  } = useForm<IUserInfo>({
    mode: 'onChange',
    defaultValues: {
      email: 'lion2010@i.ua',
      password: '1234567',
    },
  });

  const submit = (userInfo: IUserInfo) => {
    dispatch(loginUserThunk({ userInfo, navigate }));
  };

  return (
    <Form onSubmit={handleSubmit(submit)}>
      <InputsWrapper>
        <AuthInput
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
          placeholder="Password"
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
