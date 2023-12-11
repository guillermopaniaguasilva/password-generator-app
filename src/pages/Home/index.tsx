import { useEffect, useState } from 'react';
import PasswordField from './components/PasswordField';

import { Button, Checkbox, RangeSelector } from 'ui-library/index';
import {
  determinePasswordStrength,
  generatePassword,
} from '../../helpers/password';
import StrengthIndicator from './components/StrengthIndicator';
import { Container, Heading } from './styles';

export default function Home() {
  const [password, setPassword] = useState<string>('');
  const [strength, setStrength] = useState<number>(0);
  const [charLength, setCharLength] = useState<number>(10);
  const [includeUppercaseLetters, setIncludeUppercaseLetters] =
    useState<boolean>(false);
  const [includeLowercaseLetters, setIncludeLowercaseLetters] =
    useState<boolean>(false);
  const [includeNumbers, setIncludeNumbers] = useState<boolean>(false);
  const [includeSymbols, setIncludeSymbols] = useState<boolean>(false);

  useEffect(() => {
    const passwordStrength = determinePasswordStrength(
      charLength,
      includeUppercaseLetters,
      includeLowercaseLetters,
      includeNumbers,
      includeSymbols
    );
    setStrength(passwordStrength);
  }, [
    charLength,
    includeUppercaseLetters,
    includeLowercaseLetters,
    includeNumbers,
    includeSymbols,
  ]);

  const handleGeneratePassword = () => {
    const password = generatePassword(
      charLength,
      includeUppercaseLetters,
      includeLowercaseLetters,
      includeNumbers,
      includeSymbols
    );
    setPassword(password);
  };

  return (
    <>
      <Heading>Password Generator</Heading>
      <div>
        <PasswordField password={password} />
      </div>
      <Container className="mt-3">
        <RangeSelector charLength={charLength} setCharLength={setCharLength} />
        <Checkbox
          label="Include Uppercase Letters"
          isChecked={includeUppercaseLetters}
          setIsChecked={setIncludeUppercaseLetters}
        />
        <Checkbox
          label="Include Lowercase Letters"
          isChecked={includeLowercaseLetters}
          setIsChecked={setIncludeLowercaseLetters}
        />
        <Checkbox
          label="Include Numbers"
          isChecked={includeNumbers}
          setIsChecked={setIncludeNumbers}
        />
        <Checkbox
          label="Include Symbols"
          isChecked={includeSymbols}
          setIsChecked={setIncludeSymbols}
        />
        <StrengthIndicator strength={strength} />
        <Button text="generate" onClick={handleGeneratePassword} />
      </Container>
    </>
  );
}
