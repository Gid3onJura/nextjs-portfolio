import Photo from "@/components/Photo"
import Socials from "@/components/Socials"
import { Button } from "@/components/ui/button"
import React from "react"
import { FiDownload } from "react-icons/fi"

const Homepage = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left mt-5 xl:mt-0">
            <span className="text-xl">Web-Entwickler</span>
            <h1 className="h1 mb-6">
              Hi, I'm Gideon <br />
              <span>Gideon Jura</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              Veniam tempor enim eu eu nisi eu dolor sint pariatur. Ex ullamco non adipisicing amet nisi reprehenderit
              consectetur irure non magna. Duis pariatur incididunt commodo ullamco mollit Lorem exercitation eu.
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
          <div>
            <Photo />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Homepage
