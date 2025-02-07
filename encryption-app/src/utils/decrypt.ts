/**
 * Shifts a single character by a given shift value.
 * @param char - The character to shift.
 * @param shift - The number of positions to shift the character.
 * @returns The shifted character.
 */
const shiftChar = (char: string, shift: number): string => {
  if (char.match(/[a-z]/i)) {
    const code = char.charCodeAt(0);
    const shiftAmount = code >= 65 && code <= 90 ? 65 : 97; // Handle uppercase and lowercase
    return String.fromCharCode(
      ((code - shiftAmount + shift) % 26) + shiftAmount
    );
  }
  return char; // Return non-alphabetic characters as-is
};

/**
 * Calculates the shift value based on the secret key.
 * @param key - The secret key.
 * @returns The shift value.
 */
const calculateShift = (key: string): number => {
  const keySum = key
    .split("")
    .reduce((sum, char) => sum + char.charCodeAt(0), 0);
  return keySum % 26; // Ensure the shift is within the alphabet range
};

/**
 * Decrypts a given encrypted text using a secret key.
 * @param text - The encrypted text.
 * @param key - The secret key.
 * @returns The decrypted text.
 */
export const decrypt = (text: string, key: string): string => {
  const shift = calculateShift(key);
  return text
    .split("")
    .map((char) => shiftChar(char, 26 - shift)) // Reverse the shift for decryption
    .join("");
};
