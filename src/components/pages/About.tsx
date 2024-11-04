import * as stylex from "@stylexjs/stylex"
import { MenuBar } from "../layouts/MenuBar"
import profilePic from "../../assets/photos/profile.jpg"
import { tokens } from "../../tokens.stylex"

export const About = () => {
  return (
    <div {...stylex.props(styles.base)}>
      <MenuBar />
      <div {...stylex.props(styles.baseDiv)}>
        <img {...stylex.props(styles.img)} src={profilePic} />
        <div {...stylex.props(styles.about)}>
          <p {...stylex.props(styles.title)}>Thet Su Nady</p>
          <p {...stylex.props(styles.subText)}>
            A painter, singer and art lover.
          </p>
          <p>
            Born and raised in Yangon, Myanmar, and currently living in Leeds,
            England.
          </p>
        </div>
      </div>
    </div>
  )
}

const styles = stylex.create({
  base: { backgroundColor: tokens.natural, height: "100%" },
  baseDiv: {
    backgroundColor: tokens.green1,
    display: "flex",
    flexDirection: "row",
    margin: "3rem",
    height: "100%",
  },
  img: { maxWidth: "300px", height: "auto" },
  about: { margin: "3rem", color: tokens.green4 },
  title: { fontSize: "1.5rem" },
  subText: { fontStyle: "italic", fontWeight: "600" },
})
