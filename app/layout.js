import { Inter } from "next/font/google";
import StyledComponentsRegistry from "./_lib/registry";
import GlobalStyles from "./_ui/styles/globals";
import Navbar from "./components/_ui/Navbar";
import ThemeWrapper from "./_ui/styles/theming";
import Footer from "./components/_ui/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Immovables | Sadique",
  description: "A Real Estate Webapp",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <StyledComponentsRegistry>
        <ThemeWrapper>
          <GlobalStyles />
          <body className={inter.className}>
            <Navbar />
            {children}
            <Footer />
          </body>
        </ThemeWrapper>
      </StyledComponentsRegistry>
    </html>
  );
}
