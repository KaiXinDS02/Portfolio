import React from "react";
import Navbar from "./Navbar"; // Your navbar component

const Layout = ({ children }) => (
  <div>
    <Navbar />
    <main>{children}</main>
  </div>
);

export default Layout;