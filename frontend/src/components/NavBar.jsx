import React, { useState } from "react";

import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";
import LineIcon from "./LineIcon";
function NavBar() {
    const [isOpen, setisOpen] = useState(false)
  const menuLinks = ["Home", "About", "Skills", "Projects", "Contact"];

  return (
    <>
    <nav className="flex justify-between items-center">
      <h1>Name</h1>
      <div className="hidden md:block">
        <ul className="flex text-lg gap-4">
          {menuLinks.map((item) => {
              return <li>{item}</li>;
            })}
        </ul>
      </div>
      <div className="md:hidden" onClick={()=>{setisOpen(!isOpen)}}>
        <LineIcon />
      </div>
      
    </nav>
    <div className=
    {`${isOpen ? 'right-0' : 'right-[-100%]'} absolute h-full w-3/4 bg-slate-200 duration-300 md:hidden `}>
    <ul className="flex flex-col items-center text-lg gap-4 text-gray-900 p-6">
          {menuLinks.map((item) => {
              return <li className="hover:text-blue-700" onClick={()=>{setisOpen(!isOpen)}}>{item}</li>;
            })}
        </ul>
    </div>
    </>
  );
}

export default NavBar;
