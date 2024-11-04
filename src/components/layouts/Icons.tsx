import * as stylex from "@stylexjs/stylex"
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa"

export const Icons = () => {
  return (
    <div {...stylex.props(styles.iconDiv)}>
      <FaInstagram
        cursor="pointer"
        onClick={() => {
          window.open("https://www.instagram.com/thetsutsny/")
        }}
      />
      <FaFacebookF
        cursor="pointer"
        onClick={() => {
          window.open("https://www.facebook.com/thetsu.nady/")
        }}
      />
      <FaLinkedinIn
        cursor="pointer"
        onClick={() => {
          window.open("https://www.linkedin.com/in/thet-su-nady-35021912a/")
        }}
      />
    </div>
  )
}

const styles = stylex.create({
  iconDiv: {
    // backgroundColor: "white",
    display: "flex",
    flexDirection: "row",
    gap: "1rem",
    padding: "3rem",
    // cursor: "pointer",
  },
})
