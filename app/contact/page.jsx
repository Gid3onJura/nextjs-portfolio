"use client"

import React from "react"

import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa"

import { motion } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Tel.",
    description: "0176 456789",
  },
  {
    icon: <FaEnvelope />,
    title: "E-Mail",
    description: "mail@googlemail.com",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Zur Zeit in",
    description: "Leipzig",
  },
]

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.4, duration: 0.4, ease: "easeIn" } }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:h-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl ">
              <h3 className="text-4xl text-accent">Zusammen Entwickeln</h3>
              <p className="text-white/60">
                Sint dolore culpa labore esse ut labore amet dolor et cupidatat velit. Esse quis nostrud non quis
                dolore. Id labore tempor mollit consectetur ut ea. Nulla Lorem reprehenderit incididunt enim non.
              </p>
              {/* input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="firstname" placeholder="Firstname" />
                <Input type="lastname" placeholder="Lastname" />
                <Input type="email" placeholder="E-Mail" />
                <Input type="phone" placeholder="Telefon" />
              </div>
              {/* message */}
              <Textarea className="h-[200px]" placeholder="Um was soll es gehen?..." />
              <Button size="md" className="max-w-40">
                Send
              </Button>
            </form>
          </div>
          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[53px] h-[52px] xl:w-[53px] xl:h-[52px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Contact
