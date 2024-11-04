import * as stylex from "@stylexjs/stylex"
import { Button } from "./Button"

export const DropdownMenu = () => {
  return (
    <div {...stylex.props(styles.base)}>
      <Button text="Info"></Button>
      <Button text="Exibiitions"></Button>
    </div>
  )
}

const styles = stylex.create({
  base: {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    zIndex: 1,
  },
})
