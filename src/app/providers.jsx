"use client";
import { AuthProvider } from "@/context/AuthContext";
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
  },
});

export function Providers({ children }) {
  return (
    <StyledEngineProvider>
      <ThemeProvider theme={theme}>
        <AuthProvider>{children}</AuthProvider>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}
