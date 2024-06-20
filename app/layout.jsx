import { JetBrains_Mono } from "next/font/google"
import "./globals.css"
import Header from "@/components/Header"
import PageTransition from "@/components/PageTransition"
import SideTransition from "@/components/SideTransition"

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsmono",
})

export const metadata = {
  title: "My Portfolio",
  description: "",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jetBrainsMono.variable}>
        <Header />
        {/* <SideTransition /> */}
        {/* <PageTransition>
        {children}
        </PageTransition> */}
        {children}
      </body>
    </html>
  )
}
