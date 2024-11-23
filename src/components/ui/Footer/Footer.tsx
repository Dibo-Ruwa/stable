"use client";
import React from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { sublinks } from "@/constants";
import Image from "next/image";
import { FiFacebook } from "react-icons/fi";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-200 text-black p-6 xs:p-8 sm:p-10 md:p-12 lg:p-16">
      <div className="flex flex-row md:flex-col justify-between flex-wrap gap-6 lg:gap-8">
        {/* Column 1 */}
        <div className="flex flex-row justify-between md:flex-col md:gap-6 gap-16 md:mb-6 mb-8 pt-4">
          <div className="mb-4 flex flex-col xs:items-center items-start">
            <div className="relative w-24 h-10 mb-4">
              <Image
                src="/logo.png"
                fill={true}
                alt="Logo"
                className="object-contain"
              />
            </div>
            <p className="text-gray-700 mb-4 text-center lg:text-left">
              Making life easier, one service at a time.
            </p>
          </div>

          {sublinks.map((column, index) => (
            <div
              key={index}
              className="mb-3 flex flex-col gap-2 items-start"
            >
              <h3 className="text-lg font-semibold text-gray-800 font-poppins mb-2">
                {column.title}
              </h3>
              <ul className="list-none p-0 sm:text-center text-left">
                {column.links.map((link, index) => (
                  <li key={index} className="mb-1 text-gray-700">
                    <Link
                      href={link.path}
                      className="text-black hover:text-[#27a124] transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Follow Us Section */}
        <div className="flex flex-col sm:items-center items-start sm:gap-4 gap-4">
          <h3 className="text-lg font-semibold text-gray-800 font-poppins">
            Follow Us
          </h3>
          <div className="flex gap-4">
            <Link
              href="https://web.facebook.com/people/Dibo-Ruwa/100091340989617/"
              className="text-content text-2xl"
            >
              <FiFacebook />
            </Link>
            <Link
              href="https://twitter.com/DiboRuwa"
              className="text-content text-2xl"
            >
              <FaXTwitter />
            </Link>
            <Link
              href="https://www.instagram.com/diboruwa/"
              className="text-content text-2xl"
            >
              <FaInstagram />
            </Link>
            <Link
              href="https://www.linkedin.com/company/dibo-ruwa"
              className="text-content text-2xl"
            >
              <FaLinkedin />
            </Link>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-6 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} DiboRuwa. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
