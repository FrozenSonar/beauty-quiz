import "~/styles/globals.css";
import "@mantine/core/styles.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "City Beauty",
  description: "Build Your Perfect Body",
  icons: [{ rel: "icon", url: "/assets/city-beauty-logo.png" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`bg-beauty-blue font-sans ${inter.variable}`}>
        {children}
      </body>
    </html>
  );
}
