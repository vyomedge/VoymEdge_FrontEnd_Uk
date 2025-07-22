import React from "react";

import Footer from "@/common-component/footer/Footer";
import Navbar from "@/common-component/navbar/Navbar"; 



export default function Layout({ children }) {
  return (
    <div>
      <Navbar></Navbar>
      <main >{children}</main>
      <Footer></Footer>
    </div>
  );
}
