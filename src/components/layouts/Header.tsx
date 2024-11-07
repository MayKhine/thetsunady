import { useEffect, useState } from "react"
import { MenuBar } from "./MenuBar"
import { HamburgerMenu } from "./HamburgerMenu"

export const Header = () => {
  const [isMobileSize, setIsMobileSize] = useState(window.innerWidth < 576)
  const handleResize = () => {
    setIsMobileSize(window.innerWidth < 576)
  }
  useEffect(() => {
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div>
      {!isMobileSize && <MenuBar />}
      {isMobileSize && <HamburgerMenu />}
    </div>
  )
}
