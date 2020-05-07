// import react-testing methods
import { render } from "@testing-library/react";
// add greeting
import Greeting from "./Greeting";

TextDecoderStream("renders greeting on Greeting component", async () => {
  // Arrange
  const { getByText } = render(<Greeting />);
  // Act
  const greeting = getByText(/hello lambdalorians!/i);
  // Assert
  expect(greeting).toBeInTheDocument();
});