import { FC } from 'react';
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
import StandardInput from '../../../components/ui/StandardInput';
import PasswordInput from '../../../components/ui/PasswordInput';
import {
  emailValidation,
  passwordValidation,
} from '../../../constants/validation';
import { ILoginFormData } from './type';
import { showErrorNotification } from '../helpers';
import { useAppSelector } from '../../../hooks/reduxHooks';
import { CircularProgress } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { doc } from 'prettier';

const SigninForm: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const isLoading = useAppSelector((state: any) => state.auth.isLoading);
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    watch,
  } = useForm<ILoginFormData>({
    mode: 'onChange',
    defaultValues: {
      email: 'kaka2132424W@i.ua',
      password: '1234567',
    },
  });

  const submit = (data: ILoginFormData) => {
    dispatch(loginUserThunk(data))
      .unwrap()
      .then(() => {
        navigate('/');
      })
      .catch((error: string) => {
        showErrorNotification(error);
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
