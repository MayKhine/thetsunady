import * as stylex from "@stylexjs/stylex"
import { Footer } from "../layouts/Footer"
import { MenuBar } from "../layouts/MenuBar"
import { tokens } from "../../tokens.stylex"
import exb1 from "../../assets/photos/exb1.jpg"
export const Experiences = () => {
  return (
    <div>
      <div {...stylex.props(styles.pageContainer)}>
        {" "}
        <MenuBar />
        <div {...stylex.props(styles.base)}>
          <img {...stylex.props(styles.img)} src={exb1}></img>
          <p {...stylex.props(styles.title)}>Past + Current Shows</p>
          <div>
            <p>2018 TELRWER</p>
            <p>2019 TELRWER</p>
            <p>2024 TELRWER</p>
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
    backgroundColor: tokens.green2,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: "5rem",
  },
  img: { maxWidth: "70%", width: "400px" },
  title: { fontSize: "1.5rem" },
})
