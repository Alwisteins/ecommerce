import React from "react";
import Topbar from "../components/topbar/Topbar";

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout(props: RootLayoutProps) {
  const { children } = props;
  return (
    <div>
      <Topbar />
      <main className="px-10">{children}</main>
    </div>
  );
}
