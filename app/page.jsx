"use client"

import Photo from "@/components/Photo"
import Socials from "@/components/Socials"
import Stats from "@/components/Stats"
import { Button } from "@/components/ui/button"
import { FiDownload } from "react-icons/fi"
import React, { useState, useEffect } from "react"

import { motion } from "framer-motion"

const Homepage = () => {
  const [pastYears, setPastYears] = useState(0)
  useEffect(() => {
    const year = new Date("2020-08-01").getFullYear()
    const currentYear = new Date().getFullYear()
    setPastYears(currentYear - year)
  }, [])
  return (
    <motion.section
      // initial={{ opacity: 0 }}
      // animate={{
      //   opacity: 1,
      //   transition: { delay: 0.4, duration: 0.5, ease: "easeIn" },
      // }}
      className="h-full"
    >
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="order-2 xl:order-none text-center xl:text-left">
            <span className="text-xl">Full-Stack-Entwickler</span>
            <h1 className="h1 mb-6">
              Hi, I'm <br />
              <span>Gideon Jura</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              Ich bin ein <span className="font-bold">Full-Stack Entwickler</span> mit{" "}
              <span className="font-bold">{pastYears > 8 ? "mehr als 8" : pastYears} Jahren</span> Berufserfahrung. Ich
              liebe es <span className="italic">Web-Seiten & Apps</span> zu bauen.
            </p>

            {/* socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button variant="outline" size="lg" className="uppercase flex items-center gap-2">
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0 ">
                <Socials
                  containerStyles="flex gap-6"
                  iconStyles="
                  w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500
                "
                />
              </div>
            </div>
          </div>

          {/* photo */}
          <div className="order-1 xl:order-none mb-3 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      {/* <Stats /> */}
    </motion.section>
  )
}

export default Homepage
