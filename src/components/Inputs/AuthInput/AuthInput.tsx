import { Wrapper, Input, ErrorText, ErrorIcon, SuccessIcon } from './styled';
import svg from '../../../assets/sprite.svg';
import { IAuthInputProps } from './types';

const AuthInput = ({
  register,
  type,
  validation,
  errors,
  value,
  placeholder,
}: IAuthInputProps) => {
  return (
    <Wrapper>
      <Input
        disableUnderline
        type={type}
        placeholder={placeholder}
        {...register(type, validation)}
        className={errors[type] ? 'redBorder' : value ? 'greenBorder' : ''}
      />

      {errors[type] ? (
        <>
          <ErrorText>{errors[type]?.message as string}</ErrorText>
          <ErrorIcon>
            <use href={svg + '#icon-error'}></use>
          </ErrorIcon>
        </>
      ) : value ? (
        <SuccessIcon>
          <use href={svg + '#icon-success'}></use>
        </SuccessIcon>
      ) : null}
    </Wrapper>
  );
};

export default AuthInput;
