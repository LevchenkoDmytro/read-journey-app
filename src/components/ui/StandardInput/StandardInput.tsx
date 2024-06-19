import { Wrapper, Input, ErrorText, ErrorIcon, SuccessIcon } from './styled';
import svg from '../../../assets/sprite.svg';
import { StandardInputProps } from './type';

const StandardInput = ({
  register,
  type,
  validation,
  errors,
  value,
  placeholder
}: StandardInputProps) => {

  return (
    <Wrapper>
      <Input
        disableUnderline
        autoComplete={'off'}
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

export default StandardInput;
