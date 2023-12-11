import { Box, Label } from './styles';

type CheckboxProps = {
  label: string;
  isChecked: boolean;
  setIsChecked: (isChecked: boolean) => void;
};

export default function Checkbox({
  label,
  isChecked,
  setIsChecked,
}: CheckboxProps) {
  const id = label.replace(/\s+/g, '');

  return (
    <div className="d-flex align-items-center mt-4">
      <Box
        id={id}
        type="checkbox"
        checked={isChecked}
        onChange={(e) => setIsChecked(e.target.checked)}
      />
      <Label htmlFor={id}>{label}</Label>
    </div>
  );
}
