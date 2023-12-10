import hoverCopy from 'assets/images/fa-regular_copy.svg';
import copy from 'assets/images/icon-copy.svg';
import clipboardCopy from 'clipboard-copy';
import { useEffect, useState } from 'react';
import { Copied, Icon, Password } from './styles';

type PasswordFieldProps = {
  password: string;
};

export default function PasswordField({ password }: PasswordFieldProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [label, setLabel] = useState<string>(password);
  const [isFilled, setIsFilled] = useState<boolean>(false);
  const [hasCopied, setHasCopied] = useState<boolean>(false);

  const defaultLabel = 'P4$5W0rD!';

  useEffect(() => {
    if (password !== defaultLabel) {
      setIsFilled(true);
      setLabel(password);
    }

    if (password === '') {
      setIsFilled(false);
      setLabel(defaultLabel);
    }
  }, [password]);

  const handleCopy = () => {
    if (password === '' || password === defaultLabel) return;

    clipboardCopy(password);
    setHasCopied(true);
    setTimeout(() => {
      setHasCopied(false);
    }, 3000);
  };

  return (
    <div className="d-flex justify-content-between w-100">
      <Password isFilled={isFilled}>{label}</Password>
      {hasCopied && <Copied>copied</Copied>}
      <Icon
        src={isHovered ? hoverCopy : copy}
        alt="copy icon"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleCopy}
      />
    </div>
  );
}
