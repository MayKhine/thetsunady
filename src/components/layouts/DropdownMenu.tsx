import * as stylex from "@stylexjs/stylex"
import { Button } from "./Button"
import { Link } from "react-router-dom"

export const DropdownMenu = () => {
  return (
    <div {...stylex.props(styles.base)}>
      <Link to={"/about"}>
        <Button text="Info"></Button>
      </Link>
      <Link to={"/experiences"}>
        <Button text="Exibiitions"></Button>
      </Link>
    </div>
  )
}

const styles = stylex.create({
  base: {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    zIndex: 1,
    backgroundColor: "rgba(255,255,255,.8)",
  },
})
