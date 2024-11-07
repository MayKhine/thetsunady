import { tokens } from "../../tokens.stylex"
import { Header } from "../layouts/Header"
import * as stylex from "@stylexjs/stylex"
export const Paintings = () => {
  return (
    <div>
      <Header />
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
