import * as stylex from "@stylexjs/stylex"
import profilePic from "../../assets/photos/profile.jpg"
import { tokens } from "../../tokens.stylex"
import { Footer } from "../layouts/Footer"
import { Header } from "../layouts/Header"
export const About = () => {
  return (
    <div>
      <div {...stylex.props(styles.pageContainer)}>
        <Header />
        <div {...stylex.props(styles.base)}>
          <div {...stylex.props(styles.baseDiv)}>
            <img {...stylex.props(styles.img)} src={profilePic} />
            <div {...stylex.props(styles.about)}>
              <p {...stylex.props(styles.title)}>Thet Su Nady</p>
              <p {...stylex.props(styles.subText)}>
                A painter, singer and art lover.
              </p>
              <p>
                Born and raised in Yangon, Myanmar, and currently living in
                Leeds, England.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

const styles = stylex.create({
  pageContainer: {
    minHeight: "calc(100vh - 50px)",
    display: "flex",
    flexDirection: "column",
  },
  base: {
    // marginTop: "5rem",
    backgroundColor: tokens.green2,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  baseDiv: {
    backgroundColor: tokens.green1,
    display: "flex",
    flexDirection: "row",
    marginTop: "5rem",
    // height: "100%",
  },
  img: { maxWidth: "300px", height: "auto" },
  about: { margin: "3rem", color: tokens.green4 },
  title: { fontSize: "1.5rem" },
  subText: { fontStyle: "italic", fontWeight: "600" },
})
