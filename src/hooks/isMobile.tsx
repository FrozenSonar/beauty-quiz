"use client";
import { useMediaQuery } from "@mantine/hooks";
import { em } from "@mantine/core";

export default function useScreen() {
  const isMobile = useMediaQuery(`(max-width: ${em(750)})`);
  return { isMobile };
}
