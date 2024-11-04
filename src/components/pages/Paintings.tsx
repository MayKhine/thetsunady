import { tokens } from "../../tokens.stylex"
import { MenuBar } from "../layouts/MenuBar"
import * as stylex from "@stylexjs/stylex"
export const Paintings = () => {
  return (
    <div>
      <MenuBar />
      <div {...stylex.props(styles.base)}> Paintings </div>
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
})
