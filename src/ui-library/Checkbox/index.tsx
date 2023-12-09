import { Box, Label } from './styles';

type CheckboxProps = {
  label: string;
};

export default function Checkbox({ label }: CheckboxProps) {
  return (
    <>
      <Box type="checkbox" />
      <Label>{label}</Label>
    </>
  );
}
