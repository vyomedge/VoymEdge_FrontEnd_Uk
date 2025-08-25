import React from "react";
import { Sen, Manrope } from "next/font/google";

const sen = Sen({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});


const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});
import Footer from "@/common-component/footer/Footer";
import Navbar from "@/common-component/navbar/Navbar";
import CookiesBanner from "@/common-component/model/CookiesBanner";

export default function Layout({ children }) {
  return (
    <div className={`${sen.className} ${manrope.className}`}>
      <CookiesBanner/>
      <Navbar></Navbar>
      <main>{children}</main>
      <Footer></Footer>
    </div>
  );
}
