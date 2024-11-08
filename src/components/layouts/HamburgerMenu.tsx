import * as stylex from "@stylexjs/stylex"
import { Button } from "./Button"
import { Link } from "react-router-dom"
import { useState } from "react"
import { GiHamburgerMenu } from "react-icons/gi"
import { tokens } from "../../tokens.stylex"

export const HamburgerMenu = () => {
  const [isHamMenuOpen, setIsHamMenuOpen] = useState(false)
  return (
    <div
      {...stylex.props(styles.base)}
      onMouseLeave={() => {
        setIsHamMenuOpen(false)
      }}
      // {...stylex.props(styles.buttonsContainer)}
      // onClick={() => {
      //   setIsHamMenuOpen(true)
      // }}
    >
      <div {...stylex.props(styles.logoDiv)}> Thet Su Nady</div>
      <div
        // onMouseLeave={() => {
        //   setIsHamMenuOpen(false)
        // }}
        {...stylex.props(styles.buttonsContainer)}
        onClick={() => {
          setIsHamMenuOpen(true)
        }}
      >
        <div {...stylex.props(styles.hamburger)}>
          <GiHamburgerMenu style={{ fontSize: "2rem" }} />
        </div>
        {isHamMenuOpen && (
          <div {...stylex.props(styles.dropdownButtonsDiv)}>
            <Link to={"/"}>
              <Button text="Home"></Button>
            </Link>
            <Link to={"/about"}>
              <Button text="About"></Button>
            </Link>
            <Link to={"/exibitions"}>
              <Button text="Exibitions"></Button>
            </Link>
            <Link to={"/paintings"}>
              <Button text="Paintings"></Button>
            </Link>
          </div>
        )}
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
    // height: "max-content",
  },
  buttonsContainer: {
    // flexDirection: "column",
    display: "inline-block",
  },
  hamburger: {
    // width: "8rem",
    cursor: "pointer",
    paddingRight: "3rem",
    width: "100%",
    backgroundColor: "rgba(255,255,255,1)",
  },
  dropdownButtonsDiv: {
    backgroundColor: "rgba(255,255,255,0.8)",
    // backgroundColor: tokens.brown1,
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    right: "0",
    zIndex: 1,
    width: "100%",
  },
})
