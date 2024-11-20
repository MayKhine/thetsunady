import * as stylex from "@stylexjs/stylex"
import { Footer } from "../layouts/Footer"
import exb1 from "../../assets/photos/exb1.jpg"
import { Header } from "../layouts/Header"
export const Experiences = () => {
  return (
    <div>
      <div {...stylex.props(styles.pageContainer)}>
        <Header />
        <div {...stylex.props(styles.base)}>
          <img {...stylex.props(styles.img)} src={exb1}></img>
          <p {...stylex.props(styles.title)}>Past + Current Shows</p>
          <div {...stylex.props(styles.shows)}>
            <div>
              <p {...stylex.props(styles.header)}> Group Exhibitions</p>
              {/* <p>Hope (2016) - Gallery 65, Yangon</p>
              <p>Rich Palette (2017) - Gallery 65, Yangon, Myanmar</p>
              <p>Rich Palette (2018) - Gallery 65, Yangon, Myanmar</p>
              <p>Insein Township Art Exhibition - MAOC Gallery, Yangon</p>
              <p>Rich Palette (2019) - Gallery 65, Yangon, Myanmar</p>
              <p>
                Anupyinnyar Charity Online Exhibition (2020) - Artissmile
                Gallery, Yangon, Myanmar
              </p>
              <p>Generation (2023) - Waterlily Gallery, Yangon</p>
              <p>Beyond the Summer (2023) - Vision Art Gallery, Yangon</p>
              <p>The Way to Art (2023) - Neutral Art Gallery, Yangon</p>
              <p>White Heart Season 4 Charity Exhibition (2023)</p> */}
              <p>2016 - Hope, Gallery 65, Yangon</p>
              <p>2017 - Rich Palette,Gallery 65, Yangon, Myanmar</p>
              <p>2018 - Rich Palette, Gallery 65, Yangon, Myanmar</p>
              <p>2018 - Insein Township Art Exhibition, MAOC Gallery, Yangon</p>
              <p>2019 - Rich Palette, Gallery 65, Yangon, Myanmar</p>
              <p>
                2020 - Anupyinnyar Charity Online Exhibition, Artissmile
                Gallery, Yangon, Myanmar
              </p>
              <p>2023 - Generation, Waterlily Gallery, Yangon</p>
              <p>2023 - Beyond the Summer, Vision Art Gallery, Yangon</p>
              <p>2023 - The Way to Art, Neutral Art Gallery, Yangon</p>
              <p>2023 - White Heart Season 4 Charity Exhibition</p>
            </div>
            <div>
              <p {...stylex.props(styles.header)}> Solo Exhibition</p>
              <p>
                2023 - On the Lost Path, Authentique Art Gallery, Yangon,
                Myanmar
              </p>
            </div>
            <div>
              <p {...stylex.props(styles.header)}> International Exhibition</p>
              <p>2024 - Beyond the Frame, Slung Low, Leeds, England</p>
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
    // backgroundColor: tokens.green2,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: "5rem",
    fontSize: ".8rem",
  },
  img: { maxWidth: "70%", width: "400px" },
  title: { fontSize: "2rem", fontWeight: "600" },
  header: { fontSize: "1.5rem", fontWeight: "600" },
  shows: {
    margin: "2rem",
    display: "flex",
    flexDirection: "column",
    // backgroundColor: tokens.green1,
    maxWidth: "80%",
    rowGap: "2rem",
  },
})
