import { Inter } from "next/font/google";
import "@/styles/layout.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "My Portfolio Website",
  description: "Developed with Nextjs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        </body>
    </html>
  );
}