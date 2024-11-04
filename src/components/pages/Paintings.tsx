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

const styles = stylex.create({ base: { backgroundColor: "white" } })
