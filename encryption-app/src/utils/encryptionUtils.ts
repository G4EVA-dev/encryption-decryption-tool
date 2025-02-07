const shiftChar = (char: string, shift: number): string => {
  if (char.match(/[a-z]/i)) {
    const code = char.charCodeAt(0);
    const shiftAmount = code >= 65 && code <= 90 ? 65 : 97;
    return String.fromCharCode(
      ((code - shiftAmount + shift) % 26) + shiftAmount
    );
  }
  return char;
};

export const encrypt = (text: string, key: string): string => {
  let encryptedText = "";
  const keySum = key
    .split("")
    .reduce((sum, char) => sum + char.charCodeAt(0), 0);
  const shift = keySum % 26;

  for (let i = 0; i < text.length; i++) {
    encryptedText += shiftChar(text[i], shift);
  }

  return encryptedText;
};

export const decrypt = (text: string, key: string): string => {
  let decryptedText = "";
  const keySum = key
    .split("")
    .reduce((sum, char) => sum + char.charCodeAt(0), 0);
  const shift = keySum % 26;

  for (let i = 0; i < text.length; i++) {
    decryptedText += shiftChar(text[i], 26 - shift);
  }

  return decryptedText;
};
