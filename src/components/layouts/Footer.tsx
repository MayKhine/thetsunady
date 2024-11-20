import * as stylex from "@stylexjs/stylex"
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa"

export const Footer = () => {
  return (
    <div {...stylex.props(styles.base)}>
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
            window.open(
              "https://www.facebook.com/profile.php?id=100047340306058"
            )
          }}
        />
        <FaLinkedinIn
          cursor="pointer"
          onClick={() => {
            window.open("https://www.linkedin.com/in/thet-su-nady-35021912a/")
          }}
        />
      </div>
      <div>Created by May Khine</div>
    </div>
  )
}

const styles = stylex.create({
  base: {
    display: "flex",
    flexDirection: "column",
    height: "50px",
    // alignContent: "center",
    // justifyContent: "center",
    alignItems: "center",
    // alignSelf: "center",
    // backgroundColor: "red",
    fontSize: ".8rem",
  },

  iconDiv: {
    fontSize: "1.3rem",
    display: "flex",
    flexDirection: "row",
    gap: "1rem",
    paddingTop: "1rem",
    paddingBottom: ".3rem",
    // margin: "1rem",
    // justifySelf: "center",
    // alignItems: "center",
  },
})
