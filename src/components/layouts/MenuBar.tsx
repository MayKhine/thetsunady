import { Link } from "react-router-dom"
import * as stylex from "@stylexjs/stylex"
import { Button } from "./Button"
import { DropdownMenu } from "./DropdownMenu"
import { useState } from "react"
export const MenuBar = () => {
  const [isOpen, setIsOpen] = useState(false)

  // const navigate = useNavigate()

  // const buttonClickFn = (text: string) => {
  //   const path = "./" + (text.toLowerCase() == "home" ? "" : text.toLowerCase())
  //   console.log("What is the path? " + path)
  //   navigate(path, { replace: true })
  // }
  const toggleDropDown = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div {...stylex.props(styles.base)}>
      <div {...stylex.props(styles.logoDiv)}> Thet Su Nady</div>

      <div {...stylex.props(styles.buttonsDiv)}>
        <Link to="/">
          <Button text="Home" />
        </Link>

        <div
          {...stylex.props(styles.dropdownMenuContainer)}
          onMouseEnter={toggleDropDown}
          onMouseLeave={toggleDropDown}
        >
          <Button text="About" />
          {isOpen && <DropdownMenu />}
        </div>
        <Link to="/paintings">
          <Button text="Paintings" />
        </Link>
      </div>
    </div>
  )
}

const styles = stylex.create({
  base: {
    // backgroundColor: "rgba(255,255,255,0.7)",
    // backgroundColor: {
    //   default: "red",
    //   "@media (max-width: 576px)": "pink",
    // },
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    position: "fixed",
    top: "0",
    paddingTop: ".5rem",
    paddingBottom: ".5rem",
    alignItems: "center",
  },
  logoDiv: {
    marginLeft: "1rem",
    fontFamily: '  "WindSong", cursive',
    fontWeight: "600",
    fontSize: "2rem",
  },
  buttonsDiv: {
    // backgroundColor: "red",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    // alignContent: "center",
    alignItems: "center",
  },
  dropdownMenuContainer: {
    // backgroundColor: "red",
    // position: "relative",
    display: "inline-block",
  },
})
