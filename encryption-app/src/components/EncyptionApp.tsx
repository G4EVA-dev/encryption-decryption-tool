import React, { useState } from "react";
import { encrypt } from "../utils/encrypt.ts";
import { decrypt } from "../utils/decrypt.ts";
import {
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  Grid,
  Box,
} from "@mui/material";

const EncryptionApp: React.FC = () => {
  // State for input text, secret key, encrypted text, and decrypted text
  const [inputText, setInputText] = useState("");
  const [key, setKey] = useState("");
  const [encryptedText, setEncryptedText] = useState("");
  const [decryptedText, setDecryptedText] = useState("");

  // Handler for encryption
  const handleEncrypt = () => {
    setEncryptedText(encrypt(inputText, key));
  };

  // Handler for decryption
  const handleDecrypt = () => {
    setDecryptedText(decrypt(encryptedText, key));
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography
        variant="h4"
        component="h1"
        align="center"
        color="skyblue"
        gutterBottom
      >
        HNG TASK ONE
      </Typography>
      <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
        {/* App Title */}
        <Typography variant="h4" component="h1" align="center" gutterBottom>
          Encryption and Decryption App
        </Typography>

        {/* Input Text Field */}
        <TextField
          label="Input Text"
          fullWidth
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          margin="normal"
          variant="outlined"
          placeholder="Enter text to encrypt"
        />

        {/* Secret Key Field */}
        <TextField
          label="Secret Key"
          fullWidth
          value={key}
          onChange={(e) => setKey(e.target.value)}
          margin="normal"
          variant="outlined"
          placeholder="Enter secret key"
        />

        {/* Buttons for Encryption and Decryption */}
        <Grid container spacing={2} sx={{ mt: 2 }}>
          <Grid item xs={12} sm={6}>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={handleEncrypt}
              disabled={!inputText || !key} // Disable if input or key is empty
            >
              Encrypt
            </Button>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button
              variant="contained"
              color="secondary"
              fullWidth
              onClick={handleDecrypt}
              disabled={!encryptedText || !key} // Disable if encrypted text or key is empty
            >
              Decrypt
            </Button>
          </Grid>
        </Grid>

        {/* Encrypted Text Output */}
        <Box sx={{ mt: 4 }}>
          <Typography variant="h6" gutterBottom>
            Encrypted Text:
          </Typography>
          <Paper elevation={1} sx={{ p: 2, backgroundColor: "#f5f5f5" }}>
            <Typography variant="body1" sx={{ wordWrap: "break-word" }}>
              {encryptedText || "Encrypted text will appear here..."}
            </Typography>
          </Paper>
        </Box>

        {/* Decrypted Text Output */}
        <Box sx={{ mt: 4 }}>
          <Typography variant="h6" gutterBottom>
            Decrypted Text:
          </Typography>
          <Paper elevation={1} sx={{ p: 2, backgroundColor: "#f5f5f5" }}>
            <Typography variant="body1" sx={{ wordWrap: "break-word" }}>
              {decryptedText || "Decrypted text will appear here..."}
            </Typography>
          </Paper>
        </Box>
      </Paper>
    </Container>
  );
};

export default EncryptionApp;
