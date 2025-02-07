import React, { useState } from "react";
import { encrypt, decrypt } from "../utils/encryptionUtils";

const EncryptionApp: React.FC = () => {
  const [inputText, setInputText] = useState("");
  const [key, setKey] = useState("");
  const [encryptedText, setEncryptedText] = useState("");
  const [decryptedText, setDecryptedText] = useState("");

  const handleEncrypt = () => {
    setEncryptedText(encrypt(inputText, key));
  };

  const handleDecrypt = () => {
    setDecryptedText(decrypt(encryptedText, key));
  };

  return (
    <div>
      <h1>Encryption and Decryption App</h1>
      <div>
        <label>
          Input Text:
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Secret Key:
          <input
            type="text"
            value={key}
            onChange={(e) => setKey(e.target.value)}
          />
        </label>
      </div>
      <div>
        <button onClick={handleEncrypt}>Encrypt</button>
        <button onClick={handleDecrypt}>Decrypt</button>
      </div>
      <div>
        <h2>Encrypted Text:</h2>
        <p>{encryptedText}</p>
      </div>
      <div>
        <h2>Decrypted Text:</h2>
        <p>{decryptedText}</p>
      </div>
    </div>
  );
};

export default EncryptionApp;
