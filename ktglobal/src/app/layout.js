import { Inter } from "next/font/google";
import "./globals.css";
import AppContainer from "./layout/AppContainer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Kt Global",
  description: " ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppContainer>
          {children}
        </AppContainer>
      </body>
    </html>
  );
}
