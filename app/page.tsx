import React from "react";
import Link from "next/link";
import { pageLinks } from "@/constant";

const page = () => {
  return (
    <div
      className="flex flex-col overflow-hidden
     min-h-screen"
    >
      <h1>Links : </h1>
      <ul className="list-decimal w-full h-full ml-5 p-3">
        {pageLinks.map((link, index) => (
          <li key={index}>
            <Link href={link.href} className="text-blue-600 underline">
              {link.pagename}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default page;
