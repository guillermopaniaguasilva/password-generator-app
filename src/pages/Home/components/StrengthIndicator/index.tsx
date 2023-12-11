import theme from 'theme/index';
import { Bar, BarsContainer, Container, Label, StrengthLabel } from './styles';

type StrenghtIndicatorProps = {
  strength: number;
};

export default function StrengthIndicator({
  strength,
}: StrenghtIndicatorProps) {
  const strengthLabel =
    strength === 4
      ? 'strong'
      : strength === 3
      ? 'medium'
      : strength === 2
      ? 'weak'
      : strength === 1
      ? 'very weak!'
      : '';

  const indicatorColor =
    strength === 4
      ? theme.colors.green
      : strength === 3
      ? theme.colors.yellow
      : strength === 2
      ? theme.colors.orange
      : strength === 1
      ? theme.colors.red
      : theme.colors.veryDarkGrey;

  return (
    <Container className="mt-5">
      <Label>strength</Label>
      <StrengthLabel>{strengthLabel}</StrengthLabel>
      <BarsContainer>
        {[...Array(4)].map((_, i) => (
          <Bar
            key={i}
            $shouldBeColored={i + 1 <= strength}
            $indicatorColor={indicatorColor}
          />
        ))}
      </BarsContainer>
    </Container>
  );
}
