import { useState } from "react";
import Logo from "../assets/Logo3.png";
import { menus } from "../utils/menu";
export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="w-[90%] sm:w-[80%] mx-auto">
      <div className="flex justify-between items-center py-3">
        <div className="">
          <a href="/">
            <img src={Logo} alt="" className="w-32" />
          </a>
        </div>
        <ul className="hidden lg:flex space-x-8 cursor-pointer">
          {menus.map((menu, index) => (
            <li
              key={index}
              className="text-[18px] hover:text-gray-500 hover:border-b-slate-300"
            >
              <a href={`/${menu.toLowerCase()}`}>{menu}</a>
            </li>
          ))}
        </ul>
        <div className="block lg:hidden">
          {showMenu ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className={`size-8 transition delay-200 duration-200`}
              onClick={() => setShowMenu((prev) => !prev)}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className={`size-8 transition delay-200 duration-200`}
              onClick={() => setShowMenu((prev) => !prev)}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          )}
        </div>
      </div>

      {showMenu && (
        <div
          className={`my-5 bg-slate-100 rounded-md transition-transform ease-out duration-200 delay-150 sm:${
            showMenu ? "hidden" : "block"
          }`}
        >
          <ul className="flex flex-col justify-center items-center space-y-8 cursor-pointer py-5">
            {menus.map((menu, index) => (
              <a  key={index}  href={`/${menu.toLowerCase()}`}>
                <li className="text-[18px] hover:text-gray-500 ">
                  {menu}
                </li>
              </a>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
