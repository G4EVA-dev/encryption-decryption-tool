import React from "react";
import { Provider as PaperProvider } from "react-native-paper";
import EncryptionApp from "@/components/EncryptionApp";

export default function App() {
  return (
    <PaperProvider>
      <EncryptionApp />
    </PaperProvider>
  );
}
