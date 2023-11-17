import React, { useEffect, useState } from "react";

import LineIcon from "./LineIcon";
function NavBar() {
    const [isOpen, setisOpen] = useState(false)
    const [sticky, setSticky] = useState(false)

    useEffect(()=>{},[])
  const menuLinks = ["Home", "About", "Skills", "Projects", "Contact"];

  return (
    <>
    <nav className="fixed w-full top-0 left-0">
      <div className="flex justify-between items-center ">

      <h1>Name</h1>
      <div className="hidden md:block ">
        <ul className="flex text-lg gap-4 bg-white text-gray-900 py-2 px-6 rounded-bl-full">
          {menuLinks.map((item) => {
            return <li>{item}</li>;
          })}
        </ul>
      </div>
      </div>
      <div className={`${isOpen ? 'text-gray-900' : 'right-[-100%]'} z-10 md:hidden`} onClick={()=>{setisOpen(!isOpen)}}>
        <LineIcon />
      </div>
      
    </nav>  
    <div className=
    {`${isOpen ? 'right-0' : 'right-[-100%]'} top-0 absolute h-full w-3/4 bg-slate-200 duration-300 md:hidden `}>
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
