import React, { useState } from "react";
import { View, TextInput, Button, ScrollView, StyleSheet } from "react-native";
import { Card, Title, Paragraph } from "react-native-paper";
import { encrypt } from "@/app/utils/encrypt";
import { decrypt } from "@/app/utils/decrypt";

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
    <ScrollView contentContainerStyle={styles.container}>
      <Title style={styles.title}>HNG TASK ONE</Title>
      <Card style={styles.card}>
        <Card.Content>
          <Title style={styles.cardTitle}>Encryption and Decryption App</Title>

          {/* Input Text Field */}
          <TextInput
            style={styles.input}
            placeholder="Enter text to encrypt"
            value={inputText}
            onChangeText={setInputText}
          />

          {/* Secret Key Field */}
          <TextInput
            style={styles.input}
            placeholder="Enter secret key"
            value={key}
            onChangeText={setKey}
          />

          {/* Buttons for Encryption and Decryption */}
          <View style={styles.buttonContainer}>
            <Button
              title="Encrypt"
              onPress={handleEncrypt}
              disabled={!inputText || !key}
            />
            <Button
              title="Decrypt"
              onPress={handleDecrypt}
              disabled={!encryptedText || !key}
            />
          </View>

          {/* Encrypted Text Output */}
          <Title style={styles.outputTitle}>Encrypted Text:</Title>
          <Card style={styles.outputCard}>
            <Card.Content>
              <Paragraph style={styles.outputText}>
                {encryptedText || "Encrypted text will appear here..."}
              </Paragraph>
            </Card.Content>
          </Card>

          {/* Decrypted Text Output */}
          <Title style={styles.outputTitle}>Decrypted Text:</Title>
          <Card style={styles.outputCard}>
            <Card.Content>
              <Paragraph style={styles.outputText}>
                {decryptedText || "Decrypted text will appear here..."}
              </Paragraph>
            </Card.Content>
          </Card>
        </Card.Content>
      </Card>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: "#f0f0f0",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: "skyblue",
    marginBottom: 16,
  },
  card: {
    marginBottom: 16,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 8,
    marginBottom: 16,
    color: "black",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  outputTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  outputCard: {
    marginBottom: 16,
  },
  outputText: {
    fontSize: 16,
  },
});

export default EncryptionApp;
