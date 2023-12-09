import { useState } from 'react';
import { Button as Btn, Icon } from './styles';

type ButtonType = {
  text: string;
  iconSrc?: string;
  hoverIconSrc?: string;
  iconAlt?: string;
  onClick: () => void;
};

export default function Button({
  text,
  iconSrc,
  hoverIconSrc,
  iconAlt,
  onClick,
}: ButtonType) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Btn
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {text}
      {iconSrc ? (
        <Icon src={isHovered ? hoverIconSrc : iconSrc} alt={iconAlt} />
      ) : null}
    </Btn>
  );
}
