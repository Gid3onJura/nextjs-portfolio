"use client"

import { usePathname } from "next/navigation"
import React from "react"

import { CiMenuFries } from "react-icons/ci"
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"
import Link from "next/link"

const links = [
  {
    name: "start",
    path: "/",
  },
  // {
  //   name: "services",
  //   path: "/services",
  // },
  {
    name: "über mich",
    path: "/resume",
  },
  {
    name: "projekte",
    path: "/projects",
  },
  {
    name: "kontakt",
    path: "/contact",
  },
]

const MobileNav = () => {
  const pathName = usePathname()
  return (
    <Sheet>
      <SheetTrigger className="flex items-center justify-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <div className="mt-32 mb-40 text-center text-2xl">
          <Link href="/">
            <h1 className="text-4xl font-semibold">
              Gideon<span className="text-accent">.</span>
            </h1>
          </Link>
        </div>
        <nav className="flex flex-col justify-center items-center gap-8">
          {links.map((link, index) => {
            return (
              <Link
                href={link.path}
                key={index}
                className={`${
                  link.path === pathName && "text-accent border-b-2 border-accent"
                } capitalize hover:text-accent transition-all`}
              >
                {link.name}
              </Link>
            )
          })}
        </nav>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav
