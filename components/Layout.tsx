import React, { Component } from "react";

const Layout = ({ children }: any) => {
  return (
    <div className="w-full p-0 m-0  bg-gradient-to-r from-[#0a0a0a] to-black cursor-default">
      {children}
    </div>
  );
};
export default Layout;
