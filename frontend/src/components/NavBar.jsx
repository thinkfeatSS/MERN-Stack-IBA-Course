import React, { useEffect, useState } from "react";

import LineIcon from "./LineIcon";
function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  //         function - dependecy array
  useEffect(() => {
    //  event , callback function
    window.addEventListener("scroll", () => {
      // console.log("event occurred")
      // const nav = document.querySelector("nav");
      window.scrollY > 0 ? setSticky(true) : setSticky(false);
    });
  }, []);
  // Array of objects {name: "Home", link: "#home"}
  // const menuLinks = ["Home", "About", "Skills", "Projects", "Contact"];
  const menuLinks = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Skills", link: "#skills" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
  ];

  // console.log(menuLinks.map((items)=>{ return items}))
  return (
    <>
      <nav
        className={`fixed w-full top-0 left-0 z-50 ${
          sticky ? "md:bg-white/60" : "text-white"
        }`}
      >
        <div className="flex justify-between items-center ">
          <h1>Name</h1>
          <div className="hidden md:block ">
            <ul
              className={`flex text-lg gap-4 text-gray-900 py-2 px-6 rounded-bl-full ${
                sticky ? "bg-white/0 text-white" : "bg-white"
              }`}
            >
              {menuLinks.map((items, i) => (
                <li key={i} className="px-6 hover:text-cyan-600">
                  <a href={items.link}>{items.name} </a>
                </li>
              ))}
            </ul>
          </div>
          <div
            className={`${
              isOpen ? "text-gray-900" : "right-[-100%]"
            } z-10 md:hidden`}
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            <LineIcon />
          </div>
        </div>
      </nav>

      {/* Drawer */}
      <div
        className={`${
          isOpen ? "right-0" : "right-[-100%] w-0"
        } top-0 fixed h-full w-3/4 bg-slate-200 duration-300 md:hidden `}
      >
        <ul className="flex flex-col items-center text-lg gap-4 text-gray-900 p-6">
          {menuLinks.map((items, i) => (
            <li key={i} className="hover:text-cyan-600">
              <a href={items.link}>{items.name} </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default NavBar;
