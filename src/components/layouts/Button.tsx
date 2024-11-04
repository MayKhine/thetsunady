import * as stylex from "@stylexjs/stylex"
import { tokens } from "../../tokens.stylex"

type ButtonProps = {
  type?: "button" | "submit" | "reset"
  text: string
  onClickFn?: () => void
}

export const Button = ({ type, text, onClickFn }: ButtonProps) => {
  return (
    <button type={type} {...stylex.props(styles.base)} onClick={onClickFn}>
      {text.toLocaleUpperCase()}
    </button>
  )
}

const styles = stylex.create({
  base: {
    backgroundColor: "rgba(255,255,255,0.4)",
    color: {
      default: tokens.green4,
      ":hover": tokens.brown3,
    },
    // width: "80px",
    marginRight: "1rem",
    cursor: "pointer",
    fontWeight: "500",
    border: "0px",
    fontSize: "1rem",
    padding: ".8rem",
    width: "max-content",
  },
})
