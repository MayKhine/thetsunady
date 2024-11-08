import * as stylex from "@stylexjs/stylex"
import { Footer } from "../layouts/Footer"
import p0 from "../../assets/paintings/0.png"

import p1 from "../../assets/paintings/1.png"
import p2 from "../../assets/paintings/2.png"
import p3 from "../../assets/paintings/3.png"
import p4 from "../../assets/paintings/4.png"
import p5 from "../../assets/paintings/5.png"
import { tokens } from "../../tokens.stylex"
import { Header } from "../layouts/Header"
export const Home = () => {
  return (
    <div>
      <Header />
      <div {...stylex.props(styles.base)}>
        <div {...stylex.props(styles.textDiv)}>
          <p {...stylex.props(styles.title)}> Love is blooming</p>
          <p {...stylex.props(styles.text)}>
            My current project is entitled Love is Blooming and addresses themes
            of love and romanticism. The technique used is fluid painting with
            the flower a metaphor for love and they are blooming in these
            artworks.
          </p>
          <p {...stylex.props(styles.text)}>
            Initially I had an idea of the shape I wanted and the colour, with
            gold flakes scattered in the middle to signify the pollen, as gold
            is scarce and valuable, just like love can be. Pollen is inside the
            flower and love is inside our hearts. This involved some
            experimentation due to the colours and I found that using more white
            and blue gave a better effect for the final piece. Instead of using
            Gesso as a background layer I experimented with the paint on the
            canvas and discovered that without the Gesso the canvas absorbed
            quickly the paint and that gave a transparency to the canvas itself.
          </p>
        </div>
        <div {...stylex.props(styles.paintingDiv)}>
          {/* <img src={p0} /> */}

          <img src={p1} />
          <img src={p2} />
          <img src={p3} />
          <img src={p4} />
          <img src={p5} />
        </div>
        <Footer />
      </div>
    </div>
  )
}

const styles = stylex.create({
  base: {
    // backgroundColor: tokens.green2,
    // marginTop: "5rem",
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
    justifyContent: "center",
    justifyItems: "center",
    alignItems: "center",
  },
  paintingDiv: {
    marginTop: "1rem",
    display: "flex",
    flexDirection: "column",
    // backgroundColor: "white",
    maxWidth: "70%",
    width: "500px",
    padding: "1rem",
    gap: "5rem",
  },

  img: { maxWidth: "400px", height: "auto", padding: "3rem" },
  textDiv: {
    // display: "flex",
    // flexDirection: "column",
    marginTop: "5rem",
    // padding: "1rem",
    // backgroundColor: tokens.brown1,
    color: tokens.green4,
    width: "50%",
    minWidth: "270px",
    maxWidth: "500px",
    // minWidth: "300px",
  },
  title: {
    // fontFamily: '"WindSong", cursive',
    fontWeight: "600",
    fontSize: "2rem",
    fontStyle: "italic",
  },
  text: { marginTop: "1rem" },
})
