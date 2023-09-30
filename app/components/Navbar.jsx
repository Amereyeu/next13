import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/arrow.svg";

function Navbar() {
  return (
    <nav>
      <div className="logo">
        <Image
          src={Logo}
          width={20}
          alt="logo"
          // placeholder="blur"
          quality={100}
        />
        <h1>Demo</h1>
      </div>
      <div className="links">
        <Link href="/">Home</Link>
        <Link href="/tickets">Tickets</Link>
        <Link href="/about">About</Link>
      </div>
    </nav>
  );
}

export default Navbar;

