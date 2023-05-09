import type { Preview } from "@storybook/react";
import "../global.css";
import React from "react";
import shapermint from "@trafilea/afrodita-components/build/theme/shapermint.theme";
import revel from "@trafilea/afrodita-components/build/theme/revel.theme";
import truekind from "@trafilea/afrodita-components/build/theme/truekind.theme";
import { ThemeProvider, ThemeVariables } from "@trafilea/afrodita-components";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (Story) => {
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
        <ThemeProvider theme={shapermint}>
          <ThemeVariables theme={shapermint} />
          <div id="frontend-root">
            <Story />
          </div>
          <div id="scripts"></div>
        </ThemeProvider>
      );
    },
  ],
};

export default preview;
