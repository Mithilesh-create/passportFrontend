import React from "react";
import Link from 'next/link'
function Navbar({pass}) {
  return (
    <div className="navbarContainer">
      <div className="navbar">
        <div className={pass==="Login"?"backgroundChange":""}>
          <Link href="/">Login</Link>
        </div>
        <div className={pass==="Register"?"backgroundChange":""}>
          <Link href="/register">Register</Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
