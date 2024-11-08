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
            <div {...stylex.props(styles.imgDiv)}>
              <img {...stylex.props(styles.img)} src={profilePic} />
            </div>
            <div {...stylex.props(styles.about)}>
              <p {...stylex.props(styles.title)}>Thet Su Nady</p>
              <p {...stylex.props(styles.subText)}>
                A painter, singer and art lover.
              </p>
              <p>
                I was born in Yangon in 1995, but my journey into the world of
                art didn’t begin until my early twenties. Growing up, my family
                didn’t support my desire to pursue the arts, so I initially
                focused on my studies. However, after completing my degree, I
                felt a renewed pull towards creativity and began to explore my
                passion for painting.
              </p>
              <p>
                There were moments when I thought about giving up on the idea of
                being a professional artist; without art, though, I felt as if
                I’d lost my way. I soon realized that creating is part of who I
                am, and I couldn’t imagine myself doing anything else.{" "}
              </p>
              <p>
                Art is more than a practice for me—it’s a feeling, an
                experience, a way of connecting deeply with myself. Each time I
                paint, I’m drawn back to this path, with no desire to turn back.
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
    // backgroundColor: tokens.green2,
    display: "flex",
    // flexDirection: "row",
    // alignItems: "center",
  },
  baseDiv: {
    backgroundColor: tokens.green1,
    display: "flex",
    flexDirection: "row",
    marginTop: "5rem",
    // height: "100%",
    flexWrap: "wrap",
  },
  imgDiv: { backgroundColor: tokens.green2 },
  img: { maxWidth: "300px", height: "auto", objectFit: "cover" },

  about: {
    // display: "flex",
    // flexDirection: "column",
    // margin: "3rem",
    backgroundColor: tokens.brown1,
    color: tokens.green4,
    width: "50%",
    // rowGap: "1rem",
  },
  title: { fontSize: "1.5rem" },
  subText: { fontStyle: "italic", fontWeight: "600" },
})
