import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import StandardInput from '../../../components/ui/StandardInput';
import PasswordInput from '../../../components/ui/PasswordInput';
import {
  Form,
  Button,
  StyledLink,
  WrapperButton,
  InputsWrapper,
  CircularProgressStyle,
} from './styled';

import { IUserInfo } from '../../../types/data';
import {
  nameValidation,
  emailValidation,
  passwordValidation,
} from '../../../constants/validation';
import { showSuccessNotification, showErrorNotification } from '../helpers';
import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHooks';
import { registerUserThunk } from '../../../redux/auth/thunk';

const SignupForm = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const isLoading = useAppSelector(state => state.auth.isLoading);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
  } = useForm<IUserInfo>({
    mode: 'onChange',
  });

  const submit = (userInfo: IUserInfo) => {
    dispatch(registerUserThunk(userInfo))
      .unwrap()
      .then(() => {
        showSuccessNotification(navigate);
      })
      .catch((error: string) => {
        showErrorNotification(error);
      });
  };

  return (
    <Form onSubmit={handleSubmit(submit)}>
      <InputsWrapper>
        <StandardInput
          type="name"
          register={register}
          validation={nameValidation}
          errors={errors}
          value={watch('name')}
          placeholder="Name"
        />

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
          placeholder="Password"
        />
      </InputsWrapper>
      <WrapperButton>
        <Button disabled={!isValid} type="submit">
          {isLoading ? <CircularProgressStyle size={30} /> : 'Registration'}
        </Button>
        <StyledLink to="/sign-in">Already have an account?</StyledLink>
      </WrapperButton>
    </Form>
  );
};

export default SignupForm;
