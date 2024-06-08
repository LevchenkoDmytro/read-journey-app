import { useState } from 'react';
import StandardInput from '../StandardInput';
import { StandardInputProps } from '../StandardInput/type';
import { IconWrapper, EyeIcon, EyeOffIcon, Wrapper } from './styled';
import svg from '../../../assets/sprite.svg';

const PasswordInput = ({
  register,
  type,
  validation,
  errors,
  value,
}: StandardInputProps) => {
  const [isShowPassword, setIsShowPassword] = useState(false);

  const handlerClick = () => setIsShowPassword(state => !state);

  return (
    <Wrapper>
      <StandardInput
        type={type === 'password' && !isShowPassword ? 'password' : 'text'}
        register={register}
        validation={validation}
        errors={errors}
        value={value}
      />

      {!value ? null : (
        <IconWrapper onClick={handlerClick}>
          {isShowPassword ? (
            <EyeIcon>
              <use href={svg + '#icon-eye'}></use>
            </EyeIcon>
          ) : (
            <EyeOffIcon>
              <use href={svg + '#icon-eye-off'}></use>
            </EyeOffIcon>
          )}
        </IconWrapper>
      )}
    </Wrapper>
  );
};

export default PasswordInput;
