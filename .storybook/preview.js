import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import React from "react";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: "centered",
};

export const decorators = [
  Story => (
    <ChakraProvider>
      <CSSReset />
      <Story />
    </ChakraProvider>
  ),
];
