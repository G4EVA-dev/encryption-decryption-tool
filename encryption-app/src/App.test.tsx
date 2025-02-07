import { render, screen, fireEvent } from "@testing-library/react";
import EncryptionApp from "./components/EncyptionApp";

describe("EncryptionApp", () => {
  test("renders input fields, buttons, and output areas", () => {
    render(<EncryptionApp />);

    expect(screen.getByLabelText(/Input Text/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Secret Key/i)).toBeInTheDocument();
    expect(screen.getByText(/Encrypt/i)).toBeInTheDocument();
    expect(screen.getByText(/Decrypt/i)).toBeInTheDocument();
  });

  test("encrypts text when the Encrypt button is clicked", () => {
    render(<EncryptionApp />);
    const inputText = screen.getByLabelText(/Input Text/i);
    const keyInput = screen.getByLabelText(/Secret Key/i);
    const encryptButton = screen.getByText(/Encrypt/i);

    fireEvent.change(inputText, { target: { value: "hello" } });
    fireEvent.change(keyInput, { target: { value: "key" } });
    fireEvent.click(encryptButton);

    expect(screen.getByText(/Encrypted Text:/i)).not.toHaveTextContent("hello");
  });

  test("decrypts text when the Decrypt button is clicked", () => {
    render(<EncryptionApp />);
    const inputText = screen.getByLabelText(/Input Text/i);
    const keyInput = screen.getByLabelText(/Secret Key/i);
    const encryptButton = screen.getByText(/Encrypt/i);
    const decryptButton = screen.getByText(/Decrypt/i);

    fireEvent.change(inputText, { target: { value: "hello" } });
    fireEvent.change(keyInput, { target: { value: "key" } });
    fireEvent.click(encryptButton);
    fireEvent.click(decryptButton);

    expect(screen.getByText(/Decrypted Text:/i)).toHaveTextContent("hello");
  });
});
