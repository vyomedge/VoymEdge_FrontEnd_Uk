
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
import React, { useEffect, useState } from "react";
import ConnectModal from "@/common-component/model/ConnectModel";

export default function Layout({ children }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
    }, 7000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className={`${sen.className} ${manrope.className}`}>
      <CookiesBanner />
      <Navbar></Navbar>
      <ConnectModal open={open} setOpen={setOpen} />
      <main>{children}</main>
      <Footer></Footer>
    </div>
  );
}
