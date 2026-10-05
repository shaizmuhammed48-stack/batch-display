import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Student Batch Display",
  description: "Live student batch timing display",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
