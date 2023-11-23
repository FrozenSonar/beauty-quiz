"use client";
import {
  Button,
  rem,
  MantineProvider,
  createTheme,
  Checkbox,
  Radio,
} from "@mantine/core";
import { Unna, Work_Sans } from "next/font/google";
import { type PropsWithChildren } from "react";
import QuizProvider from "~/providers/QuizProvider";
import QuizApp from "~/screens/QuizApp";

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
});
const unna = Unna({
  variable: "--font-unna",
  weight: "700",
  subsets: ["latin"],
});

const theme = createTheme({
  components: {
    Checkbox: Checkbox.extend({
      styles: {
        input: { backgroundColor: "transparent", border: "2px solid white" },
      },
    }),
    Radio: Radio.extend({
      styles: {
        radio: { backgroundColor: "transparent", border: "2px solid white" },
        icon: { color: "#e2c47c" },
      },
    }),

    Button: Button.extend({
      vars: (theme, props) => {
        if (props.size === "3xl") {
          return {
            root: {
              "--button-height": rem(125),
              "--button-padding-x": rem(0),
              "--button-fz": rem(24),
              "--button-radius": rem(0),
            },
          };
        }
        if (props.size === "2xl") {
          return {
            root: {
              "--button-height": rem(100),
              "--button-padding-x": rem(0),
              "--button-fz": rem(24),
              "--button-radius": rem(0),
            },
          };
        }

        if (props.size === "custom-lg") {
          return {
            root: {
              "--button-height": rem(70),
              "--button-padding-x": rem(50),
              "--button-fz": rem(24),
              "--button-radius": rem(0),
            },
          };
        }

        if (props.size === "2xs") {
          return {
            root: {
              "--button-height": rem(24),
              "--button-padding-x": rem(10),
              "--button-fz": rem(10),
            },
          };
        }

        return { root: {} };
      },
    }),
  },
});

function App({ children }: PropsWithChildren) {
  return (
    <MantineProvider theme={theme}>
      <main
        className={`flex min-h-screen flex-col items-center pb-8 pt-4 text-white ${workSans.variable} ${unna.variable} font-sans`}
      >
        {children}
      </main>
    </MantineProvider>
  );
}

export default function HomePage() {
  return (
    <App>
      <QuizProvider>
        <QuizApp />
      </QuizProvider>
    </App>
  );
}
