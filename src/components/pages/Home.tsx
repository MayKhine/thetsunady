import * as stylex from "@stylexjs/stylex"
import { MenuBar } from "../layouts/MenuBar"
import { Footer } from "../layouts/Footer"
import p1 from "../../assets/paintings/1.png"
import p2 from "../../assets/paintings/2.png"
import p3 from "../../assets/paintings/3.png"
import p4 from "../../assets/paintings/4.png"
import p5 from "../../assets/paintings/5.png"
import { tokens } from "../../tokens.stylex"
import { HamburgerMenu } from "../layouts/HamburgerMenu"
import { Header } from "../layouts/Header"
export const Home = () => {
  return (
    <div>
      {/* <MenuBar /> */}
      <Header />
      {/* <HamburgerMenu /> */}
      <div {...stylex.props(styles.base)}>
        <div {...stylex.props(styles.paintingDiv)}>
          <img src={p1} />
          <img src={p2} />

          <img src={p3} />
          <img src={p4} />
          <img src={p5} />
        </div>
        <Footer />
      </div>
    </div>
  )
}

const styles = stylex.create({
  base: {
    // backgroundColor: tokens.green2,
    // marginTop: "5rem",
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
    justifyContent: "center",
    justifyItems: "center",
    alignItems: "center",
  },
  paintingDiv: {
    marginTop: "5rem",
    display: "flex",
    flexDirection: "column",
    // backgroundColor: "white",
    maxWidth: "70%",
    width: "500px",
    padding: "1rem",
    gap: "5rem",
  },

  img: { maxWidth: "400px", height: "auto", padding: "3rem" },
})
