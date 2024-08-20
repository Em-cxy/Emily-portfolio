import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between items-center bg-secondary font-primary text-white p-5 text-xl">
      <div className="flex-1 flex justify-start pl-10">
        <Link href={"/"}>Logo</Link>
      </div>

      <div className="flex-1 flex justify-end gap-8 pr-10">
        <Link href={"/"}>Home</Link>
        <Link href={"/about"}>About</Link>
        <Link href={"/projects"}>Projects</Link>
      </div>
    </div>
  );
};

export default Header;
