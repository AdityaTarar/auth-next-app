import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";

const Navbar = () => {
  const router = useRouter();

  const links = [
    {
      id: 1,
      link: "Sign In ",
      path: '/auth/login'
    },
    {
      id: 2,
      link: "Sign Up",
      path: '/auth/signup'

    },
  ];
  console.log('router.pathname', router.pathname);

  return (
    <div className="flex items-center w-full bg-[#fff]" style={{ justifyContent: 'space-between', paddingLeft: 46, paddingRight: 46 }}>
      <div className="bg-[#E8486F] text-white font-bold" style={{ padding: 20, cursor: "pointer" }} onClick={() => router.push('/')}>
        <span> IMPACTHUB</span>
      </div>
      <div>
        <ul className="flex gap-20">
          {links.map(({ id, link, path }) => (
            <li
              key={id}
              className={`nav-links px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 hover:text-white duration-200  link-underline ${router.pathname === path ? 'text-[#E8486F]' : 'text-gray-500'}`}
            >
              <Link href={path}>{link}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>

  );
};

export default Navbar;
