"use client";
import Footer from "./Footer";
import Nav from "./Nav";

import { SessionProvider } from "next-auth/react";

export default function CustomLayout({ children }: any) {
  return (
    <SessionProvider>
      <div className="flex flex-col min-h-screen">
        <Nav></Nav>
        {children}
      </div>
      <Footer></Footer>
    </SessionProvider>
  );
}
