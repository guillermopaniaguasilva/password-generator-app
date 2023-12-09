import { Button as Btn, Icon } from './styles';

type ButtonType = {
  text: string;
  iconSrc?: string;
  iconAlt?: string;
  onClick: () => void;
};

export default function Button({
  text,
  iconSrc,
  iconAlt,
  onClick,
}: ButtonType) {
  return (
    <Btn onClick={onClick}>
      {text}
      {iconSrc ? <Icon src={iconSrc} alt={iconAlt} /> : null}
    </Btn>
  );
}
