import Link from "next/link"
import React from "react"

import { FaGithub, FaLinkedin, FaXing } from "react-icons/fa"

const socials = [
  {
    icon: <FaGithub />,
    path: "https://github.com/Gid3onJura",
  },
  {
    icon: <FaLinkedin />,
    path: "",
  },
  {
    icon: <FaXing />,
    path: "",
  },
]

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        )
      })}
    </div>
  )
}

export default Socials
