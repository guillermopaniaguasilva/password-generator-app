export function determinePasswordStrength(
  length: number,
  uppercase: boolean,
  lowercase: boolean,
  numbers: boolean,
  symbols: boolean
): number {
  let strengthScore: number = 0;

  // Check length
  if (length >= 8 && length <= 12) strengthScore += 1;
  else if (length > 12 && length <= 16) strengthScore += 2;
  else if (length > 16) strengthScore += 3;

  // Check character types
  if (uppercase) strengthScore += 1;
  if (lowercase) strengthScore += 1;
  if (numbers) strengthScore += 1;
  if (symbols) strengthScore += 2;

  // Map the strength score to the password strength level
  if (strengthScore === 0) return 0;
  else if (strengthScore <= 2) return 1;
  else if (strengthScore <= 4) return 2;
  else if (strengthScore <= 6) return 3;
  else return 4;
}

export function generatePassword(
  length: number,
  includeUppercase: boolean,
  includeLowercase: boolean,
  includeNumbers: boolean,
  includeSymbols: boolean
): string {
  const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
  const numberChars = '0123456789';
  const symbolChars = '!@#$%^&*()-=_+[]{}|;:,.<>?';

  let validChars = '';

  // Add characters based on parameters
  if (includeUppercase) validChars += uppercaseChars;
  if (includeLowercase) validChars += lowercaseChars;
  if (includeNumbers) validChars += numberChars;
  if (includeSymbols) validChars += symbolChars;

  let password = '';
  const validCharsLength = validChars.length;

  // Generate random password
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * validCharsLength);
    password += validChars[randomIndex];
  }

  return password;
}
