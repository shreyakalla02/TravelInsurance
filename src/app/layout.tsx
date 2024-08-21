import "./globals.css";
import Navbar from "./components/Navbar";
import React, { ReactNode } from "react";

export const metadata = {
  title: "Tripago",
  description: "Schedule an insured trip!",
};

type MyComponentProps = React.PropsWithChildren<{}>;

export default function RootLayout({ children }: MyComponentProps) {
  return (
    <html>
      <body>
        <div>
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}

