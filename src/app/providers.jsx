"use client";
import { CartProvider } from "@/lib/CartContext";
import {
  StyledEngineProvider,
  createTheme,
  ThemeProvider,
} from "@mui/material/styles";

const { palette } = createTheme();
const { augmentColor } = palette;
const createColor = (mainColor) => augmentColor({ color: { main: mainColor } });
const theme = createTheme({
  palette: {
    black: createColor("#000000"),
    orl: createColor("#fff2e6"),
    atc: createColor("#9c4f1f"),
    lg: createColor("#344b6e"),
    teal: createColor("#0c2b14")
  },
});

export function Providers({ children }) {
  return (
    <StyledEngineProvider>
        <ThemeProvider theme={theme}>
          <CartProvider>{children}</CartProvider>
        </ThemeProvider>
    </StyledEngineProvider>
  );
}
