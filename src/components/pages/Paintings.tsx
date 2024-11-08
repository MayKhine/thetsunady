import { tokens } from "../../tokens.stylex"
import { Header } from "../layouts/Header"
import * as stylex from "@stylexjs/stylex"

import p1 from "../../assets/paintings/1.png"
import p2 from "../../assets/paintings/2.png"
import p3 from "../../assets/paintings/3.png"
import p4 from "../../assets/paintings/4.png"
import p5 from "../../assets/paintings/5.png"
import p6 from "../../assets/paintings/6.png"
import p7 from "../../assets/paintings/7.png"
import p8 from "../../assets/paintings/8.png"

export const Paintings = () => {
  return (
    <div>
      <Header />
      <div {...stylex.props(styles.base)}>
        <div {...stylex.props(styles.paintingDiv)}>
          <img {...stylex.props(styles.paitning)} src={p1} />
          <img {...stylex.props(styles.paitning)} src={p2} />
          <img {...stylex.props(styles.paitning)} src={p3} />
          <img {...stylex.props(styles.paitning)} src={p4} />
          <img {...stylex.props(styles.paitning)} src={p5} />
          <img {...stylex.props(styles.paitning)} src={p6} />
          <img {...stylex.props(styles.paitning)} src={p7} />

          <img {...stylex.props(styles.paitning)} src={p8} />
        </div>
      </div>
    </div>
  )
}

const styles = stylex.create({
  base: {
    // backgroundColor: tokens.green2,
    marginTop: "5rem",
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
    justifyContent: "center",
    justifyItems: "center",
    alignItems: "center",
  },
  paintingDiv: {
    // margin: "3rem",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    // backgroundColor: "gray",
    maxWidth: "100%",
    // width: "500px",
    // padding: "1rem",
    gap: "3rem",
    // alignContent: "center",
    justifyContent: "center",
  },
  paitning: {
    minWidth: "300px",
    maxWidth: "40%",
    height: "auto",
    objectFit: "contain",
  },
})
