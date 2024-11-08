import * as stylex from "@stylexjs/stylex"
import { tokens } from "../../tokens.stylex"

type ButtonProps = {
  type?: "button" | "submit" | "reset"
  text: string
  onClickFn?: () => void
  // children?: React.ReactNode
}

export const Button = ({
  type,
  text,
  onClickFn,
}: //  children
ButtonProps) => {
  return (
    <button type={type} {...stylex.props(styles.base)} onClick={onClickFn}>
      {text.toLocaleUpperCase()}
      {/* {children} */}
    </button>
  )
}

const styles = stylex.create({
  base: {
    // backgroundColor: "rgba(255,255,255,0.0)",
    backgroundColor: {
      default: "rgba(255,255,255,0.0)",
      ":hover": tokens.green1,
    },
    color: {
      default: tokens.green4,
      ":hover": tokens.brown4,
    },
    // width: "80px",
    marginRight: "1rem",
    cursor: "pointer",
    fontWeight: "500",
    border: "0px",
    fontSize: "1rem",
    padding: ".8rem",
    // width: "max-content",
    width: "100%",
    // alignSelf: "flex-start",
    // textAlign: "left",
  },
})
