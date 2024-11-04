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
  footbar: {
    // position: "fixed",
    // bottom: "0",
    // display: "flex",
    // backgroundColor: "white",
    // flexDirection: "row",
    // justifyContent: "flex-end",
    // alignSelf: "flex-end",
    // alignItems: "flex-end",
    // alignContent: "flex-end",
    // padding: "1rem",
  },

  iconDiv: {
    // backgroundColor: "red",
    display: "flex",
    flexDirection: "row",
    // alignSelf: "flex-end",
    gap: "1rem",
    padding: "2rem",
    // cursor: "pointer",

    // position: "fixed",
    // bottom: 0,
    // left: 0,
    // width: "100%",
    // backgroundColor: "#333",
    // color: "#fff",
    // textAlign: "center",
    // zIndex: 1000,
  },
})
