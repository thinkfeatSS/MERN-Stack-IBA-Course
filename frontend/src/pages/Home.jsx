import React from "react";
import PrimaryButton from "../components/PrimaryButton";
import SecondaryButton from "../components/SecondaryButton";
import LineIcon from "../components/LineIcon";
function Home() {
  return (
    <div>
      <nav className="flex justify-between items-center ">
        <h1 className="text-2xl">Thinkfeat</h1>
        <div className="hidden md:block">
          <ul className="text-lg flex gap-4">
            <li className="nav-link">Home</li>
            <li className="nav-link">Profile</li>
            <li className="nav-link">Projects</li>
            <li className="nav-link">Courses</li>
            <li className="nav-link">Contact Us</li>
          </ul>
        </div>
        <div>
          <PrimaryButton text="Sign In"></PrimaryButton>
          <SecondaryButton text="Sign Up"></SecondaryButton>
          {/* <SecondaryButton text="Let Start"></SecondaryButton> */}
        </div>
        <div  className="md:hidden">
        <LineIcon />

        </div>
      </nav>
    </div>
  );
}

export default Home;
