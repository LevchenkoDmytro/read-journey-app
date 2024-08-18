import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import AuthInput from '../../../components/Inputs/AuthInput';
import PasswordInput from '../../../components/Inputs/PasswordInput';
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
} from '../../../helpers/validation';
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
    dispatch(registerUserThunk({ userInfo, navigate }));
  };

  return (
    <Form onSubmit={handleSubmit(submit)}>
      <InputsWrapper>
        <AuthInput
          type="name"
          register={register}
          validation={nameValidation}
          errors={errors}
          value={watch('name')}
          placeholder="Name"
        />

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
          {isLoading ? <CircularProgressStyle size={30} /> : 'Registration'}
        </Button>
        <StyledLink to="/sign-in">Already have an account?</StyledLink>
      </WrapperButton>
    </Form>
  );
};

export default SignupForm;
