import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import StandardInput from '../../../Inputs/StandardInput';
import PasswordInput from '../../../Inputs/PasswordInput';
import {
  Form,
  Button,
  StyledLink,
  WrapperButton,
  InputsWrapper,
  CircularProgressStyle,
} from './styled';

import { IRegistrationInfo } from '../../../../types/data';
import {
  nameValidation,
  emailValidation,
  passwordValidation,
} from '../../../../helpers/validation';
import { useAppDispatch, useAppSelector } from '../../../../hooks/reduxHooks';
import { registerUserThunk } from '../../../../redux/auth/thunk';
import { handlerError } from '../helpers';

const SignupForm = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const isLoading = useAppSelector(state => state.auth.isLoading);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
  } = useForm<IRegistrationInfo>({
    mode: 'onChange',
  });

  const submit = (userInfo: IRegistrationInfo) => {
    dispatch(registerUserThunk(userInfo))
      .unwrap()
      .then(() => {
        navigate('/sign-in');
      })
      .catch(error => {
        handlerError(error);
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
