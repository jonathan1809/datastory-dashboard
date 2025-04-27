"use client";

import { colors } from "@/app/providers/chackra-theme";
import {
  ChakraProvider,
  createSystem,
  defaultConfig,
  defineConfig,
} from "@chakra-ui/react";
import { ReactNode } from "react";

interface ChackraProviderProps {
  children: ReactNode;
}

const config = defineConfig({
  theme: {
    tokens: {
      colors: Object.entries(colors).reduce((acc, [key, value]) => {
        acc[key] = {
          value: typeof value === "string" ? value : JSON.stringify(value),
        };
        return acc;
      }, {} as Record<string, { value: string }>),
    },
  },
});

const system = createSystem(defaultConfig, config);

const ChackraProvider = ({ children }: ChackraProviderProps) => {
  return <ChakraProvider value={system}>{children}</ChakraProvider>;
};

export default ChackraProvider;
