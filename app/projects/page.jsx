"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"

import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"

import { BsArrowUpRight, BsGithub } from "react-icons/bs"

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs, FaDatabase } from "react-icons/fa"

import { SiTailwindcss, SiNextdotjs } from "react-icons/si"
import Link from "next/link"
import Image from "next/image"
import SliderButtons from "@/components/SliderButtons"

const projects = [
  {
    category: "Backend",
    title: "Project 1",
    description: "Enim ea quis consectetur excepteur id ex minim aliqua ipsum ex fugiat do cupidatat.",
    stack: [
      {
        icon: <FaNodeJs />,
        name: "NodeJS",
      },
      {
        icon: <FaDatabase />,
        name: "SQL",
      },
    ],
    image: "/assets/nature.jpg",
    github: "https://github.com/Gid3onJura/portfolio-website",
    live: "https://developer-portfolio-site.vercel.app/",
  },
  {
    category: "Frontend",
    title: "Project 2",
    description: "Nisi quis dolore cupidatat fugiat quis non nisi ad ut voluptate ex tempor est voluptate.",
    stack: [
      {
        icon: <FaReact />,
        name: "React Native",
      },
      {
        icon: <SiTailwindcss />,
        name: "Tailwind CSS",
      },
    ],
    image: "/assets/nature.jpg",
    github: "https://github.com/Gid3onJura/portfolio-website",
    live: "https://developer-portfolio-site.vercel.app/",
  },
  {
    category: "Frontend",
    title: "Project 3",
    description: "Esse ullamco in eu amet.",
    stack: [
      {
        icon: <SiNextdotjs />,
        name: "NextJs",
      },
    ],
    image: "/assets/nature.jpg",
    github: "https://github.com/Gid3onJura/portfolio-website",
    live: "https://developer-portfolio-site.vercel.app/",
  },
]

const Projects = () => {
  const [project, setProject] = useState(projects[0])
  const [projectNum, setProjectNum] = useState(1)

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex
    setProject(projects[currentIndex])
    setProjectNum(currentIndex + 1)
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.4, duration: 0.4, ease: "easeIn" } }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl leading-none font-thin">0{projectNum}</div>

              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category}-Projekt
              </h2>
              <p className="text-white/60">{project.description}</p>
              <ul className="flex gap-4 mt-2 mb-2 xl:mb-0 xl:mt-0">
                {project.stack.map((item, index) => {
                  return (
                    <li className="text-4xl text-accent" key={index}>
                      {item.icon}
                    </li>
                  )
                })}
              </ul>
              {/* seperator */}
              <div className="border border-white/20 mb-2 xl:mb-0"></div>
              <div className="flex items-center gap-4">
                <Link href={project.live} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[50px] h-[50px] rounded-full bg-white/5 justify-center items-center flex group">
                        <BsArrowUpRight className="text-white text-2xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Zum Live-Projekt</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <Link href={project.github} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[50px] h-[50px] rounded-full bg-white/5 justify-center items-center flex group">
                        <BsGithub className="text-white text-2xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Zum GitHub-Repo</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      {/* image */}
                      <div className="relative w-full h-full">
                        <Image src={project.image} fill className="object-cover" alt="" />
                      </div>
                    </div>
                  </SwiperSlide>
                )
              })}
              <SliderButtons
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Projects
