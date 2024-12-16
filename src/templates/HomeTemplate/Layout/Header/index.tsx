import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="p-4 bg-opacity-40 bg-black text-white w-full fixed z-10">
      <div className="container flex justify-between h-16 mx-auto">
        <NavLink
          to={"/"}
          aria-label="Back to homepage"
          className="flex items-center p-2"
        >
          <img
            src="https://cyberlearn.vn/wp-content/uploads/2020/03/cyberlearn-min-new-opt2.png"
            alt="cyberlearn.vn"
          />
        </NavLink>
        <ul className="items-stretch hidden space-x-3 lg:flex">
          <li className="flex">
            <NavLink to={"/"} className="flex items-center">
              Trang chủ
            </NavLink>
          </li>
          <li className="flex">
            <NavLink to={"/"} className="flex items-center">
              Liên hệ
            </NavLink>
          </li>
          <li className="flex">
            <NavLink to={"/"} className="flex items-center">
              Tin tức
            </NavLink>
          </li>
          <li className="flex">
            <NavLink to={"/"} className="flex items-center">
              Ứng dụng
            </NavLink>
          </li>
        </ul>
        <div className="items-center flex-shrink-0 hidden lg:flex">
          <button className="self-center px-8 py-3 rounded">Đăng nhập</button>
          <button className="self-center px-8 py-3 font-semibold rounded bg-violet-600">
            Đăng ký
          </button>
        </div>
      </div>
    </header>
  );
}
