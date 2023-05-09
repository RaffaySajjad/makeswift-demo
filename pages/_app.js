import "../global.css";
import { ThemeProvider, ThemeVariables } from "@trafilea/afrodita-components";
import shapermint from "@trafilea/afrodita-components/build/theme/shapermint.theme";
import revel from "@trafilea/afrodita-components/build/theme/revel.theme";
import truekind from "@trafilea/afrodita-components/build/theme/truekind.theme";

export default function App({ Component, children, pageProps }) {
  let theme;

  switch (process.env.NEXT_PUBLIC_STORE_NAME) {
    case "shapermint":
      theme = shapermint;
      break;
    case "revel":
      theme = revel;
      break;
    case "truekind":
      theme = truekind;
      break;
    default:
      theme = shapermint;
  }

  return (
    <ThemeProvider theme={theme}>
      <ThemeVariables theme={theme} />
      {children}
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
