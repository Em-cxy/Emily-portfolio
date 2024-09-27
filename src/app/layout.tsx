import { Inter } from "next/font/google";
import "./globals.css";
// import CustomCursor from "@/components/CustomCursor";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ian's Portfolio",
  description: "Created by Ian",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <CustomCursor />  */}
        {children}
      </body>
    </html>
  );
}
