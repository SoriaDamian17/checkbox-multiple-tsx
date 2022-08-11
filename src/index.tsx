import { StrictMode } from "react";
import * as ReactDOMClient from "react-dom/client";
import { ThemeProvider } from "styled-components";
import Theme from "./Theme";
import App from "./App";

const rootElement = document.getElementById("root");
const root = ReactDOMClient.createRoot(rootElement);

root.render(
  <StrictMode>
    <ThemeProvider theme={Theme}>
      <App />
    </ThemeProvider>
  </StrictMode>
);
